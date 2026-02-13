import parse, {
  type DOMNode,
  domToReact,
  type Element,
  type HTMLReactParserOptions,
} from 'html-react-parser';
import Link from 'next/link';
import { createElement } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/ui/typography/typography';

const headingRe = /^h[1-6]$/;

const breakHeadingChildRe = /^(h[1-6]|p|ul|ol|li|div|section|article|table|br)$/;

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingVariant = 'h3' | 'h4' | 'p2';

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function extractText(nodes: unknown[]): string {
  let out = '';
  for (const n of nodes) {
    if (typeof n === 'object' && n && (n as { type?: unknown }).type === 'text') {
      out += (n as { data?: string }).data ?? '';
      continue;
    }
    const kids = (n as { children?: unknown })?.children;
    if (Array.isArray(kids)) out += extractText(kids);
  }
  return out.replace(/\s+/g, ' ').trim();
}

function makeIdFactory() {
  const used = new Map<string, number>();
  return (existingId: string | undefined, title: string) => {
    const base = existingId || (title ? `sec-${slugify(title)}` : `sec-${used.size + 1}`);
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

function hasBreakingChild(el: Element) {
  const kids = (el.children ?? []) as unknown as DOMNode[];
  for (const n of kids) {
    if (n && (n as { type?: string }).type === 'tag') {
      const nm = (n as Element).name;
      if (breakHeadingChildRe.test(nm)) return true;
    }
  }
  return false;
}

export function TextParsed({ safeHtml }: { safeHtml: string }) {
  const makeId = makeIdFactory();

  const options: HTMLReactParserOptions = {
    replace(node: DOMNode) {
      if (node.type !== 'tag') return;

      const el = node as Element;

      const name = el.name;
      const attribs = el.attribs;
      const parent = el.parent;
      const children = (el.children ?? []) as unknown as DOMNode[];

      if (name === 'br') return null;

      const parentName = parent && parent.type === 'tag' ? (parent as Element).name : '';
      const parentIsHeading = headingRe.test(parentName);
      const parentIsBrokenHeading = parentIsHeading && hasBreakingChild(parent as Element);

      const isHeading = headingRe.test(name);
      const isParentHeading = parentIsHeading && !parentIsBrokenHeading;

      if (isHeading && isParentHeading) {
        return <span className={attribs?.class}>{domToReact(children, options)}</span>;
      }

      if (isHeading) {
        const tag = name as HeadingTag;
        const level = Number(tag.slice(1));

        const variant: HeadingVariant = level <= 2 ? 'h3' : level === 3 ? 'h4' : 'p2';

        const titleAll = extractText(el.children as unknown as unknown[]);
        const id = makeId(attribs?.id, titleAll);

        const broken = hasBreakingChild(el);

        if (broken) {
          const kids = (el.children ?? []) as unknown as DOMNode[];

          const splitAt = kids.findIndex(
            (n) =>
              (n as { type?: string })?.type === 'tag' &&
              breakHeadingChildRe.test((n as Element).name)
          );

          const headKids = splitAt === -1 ? kids : kids.slice(0, splitAt);
          const restKids = splitAt === -1 ? [] : kids.slice(splitAt);

          const title = extractText(headKids as unknown as unknown[]);
          const hasTitle = Boolean(title);

          return (
            <>
              {hasTitle ? (
                <Typography
                  asChild
                  className={cn('scroll-mt-[120px]', level >= 4 && 'font-semibold', attribs?.class)}
                  variant={variant}
                >
                  {createElement(tag, { id }, domToReact(headKids, options))}
                </Typography>
              ) : null}

              {restKids.length ? <>{domToReact(restKids, options)}</> : null}
            </>
          );
        }

        return (
          <Typography
            asChild
            className={cn('scroll-mt-[120px]', level >= 4 && 'font-semibold', attribs?.class)}
            variant={variant}
          >
            {createElement(tag, { id }, domToReact(children, options))}
          </Typography>
        );
      }

      if (name === 'p') {
        return (
          <Typography asChild className={attribs?.class} variant="p2">
            <p>{domToReact(children, options)}</p>
          </Typography>
        );
      }

      if (name === 'a') {
        const href = attribs?.href ?? '';
        const className = attribs?.class;
        const isInternal = href.startsWith('/') || href.startsWith('#');

        if (isInternal) {
          return (
            <Link className={className} href={href}>
              {domToReact(children, options)}
            </Link>
          );
        }

        const { class: _class, ...rest } = (attribs ?? {}) as Record<string, string>;

        return (
          <a {...rest} className={className} href={href}>
            {domToReact(children, options)}
          </a>
        );
      }

      if (name === 'img') {
        const src = attribs?.src || '/default/article-section.png';
        const alt = attribs?.alt || '';
        return <img alt={alt} decoding="async" loading="lazy" src={src} />;
      }

      return;
    },
  };

  return <div className="flex flex-col gap-4">{parse(safeHtml, options)}</div>;
}
