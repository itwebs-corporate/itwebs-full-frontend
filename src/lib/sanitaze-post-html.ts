import sanitizeHtml from 'sanitize-html';

export function sanitizePostHtml(dirty: string) {
  return sanitizeHtml(dirty, {
    allowedTags: [
      'p',
      'br',
      'hr',
      'h1',
      'h2',
      'h3',
      'h4',
      'strong',
      'b',
      'em',
      'i',
      'u',
      's',
      'blockquote',
      'ul',
      'ol',
      'li',
      'a',
      'pre',
      'code',
      'img',
      'figure',
      'figcaption',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
    ],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
      '*': ['class'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    disallowedTagsMode: 'discard',
    transformTags: {
      h1: 'h2',

      a: (_tagName, attribs) => {
        const href = attribs.href || '';
        const isExternal = /^https?:\/\//i.test(href);
        return {
          tagName: 'a',
          attribs: {
            ...attribs,
            target: isExternal ? '_blank' : attribs.target,
            rel: isExternal ? 'nofollow noopener noreferrer' : attribs.rel,
          },
        };
      },
    },
  });
}
