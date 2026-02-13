'use client';

import { useEffect, useState } from 'react';

import { sanitizePostHtml } from '@/lib/sanitaze-post-html';

export type ArticleSection = {
  id: string;
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

type Parsed = { safeHtml: string; sections: ArticleSection[] };

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

export function useArticleParse(html: string): Parsed {
  const [state, setState] = useState<Parsed>(() => ({
    safeHtml: sanitizePostHtml(html),
    sections: [],
  }));

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;

      const safe = sanitizePostHtml(html);

      if (typeof window === 'undefined' || typeof window.DOMParser === 'undefined') {
        setState({ safeHtml: safe, sections: [] });
        return;
      }

      const doc = new window.DOMParser().parseFromString(safe, 'text/html');

      const used = new Map<string, number>();
      const sections: ArticleSection[] = [];

      const nodes = Array.from(doc.body.querySelectorAll('h1,h2,h3,h4,h5,h6'));

      for (let i = 0; i < nodes.length; i++) {
        const h = nodes[i];
        const title = (h.textContent ?? '').replace(/\s+/g, ' ').trim();
        if (!title) continue;

        const level = Number(h.tagName.slice(1)) as ArticleSection['level'];

        const baseRaw = h.getAttribute('id') || `sec-${slugify(title)}` || `sec-${i + 1}`;
        const base = baseRaw || `sec-${i + 1}`;

        const count = used.get(base) ?? 0;
        used.set(base, count + 1);

        const id = count === 0 ? base : `${base}-${count + 1}`;

        h.setAttribute('id', id);
        sections.push({ id, title, level });
      }

      setState({ safeHtml: doc.body.innerHTML, sections });
    };

    if (typeof queueMicrotask === 'function') queueMicrotask(run);
    else setTimeout(run, 0);

    return () => {
      cancelled = true;
    };
  }, [html]);

  return state;
}
