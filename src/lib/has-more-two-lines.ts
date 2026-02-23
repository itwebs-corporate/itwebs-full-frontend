export function hasMoreTwoLines(el: HTMLElement | null) {
  if (!el) return false;

  const lineHeight = getCachedLineHeight(el);
  if (lineHeight <= 0) return false;

  return el.scrollHeight > lineHeight * 2 + 1;
}

const lineHeightCache = new WeakMap<HTMLElement, number>();

function getCachedLineHeight(el: HTMLElement) {
  const cached = lineHeightCache.get(el);
  if (cached) return cached;

  const styles = getComputedStyle(el);
  const parsedLineHeight = parseFloat(styles.lineHeight);
  const fontSize = parseFloat(styles.fontSize);
  const resolvedLineHeight = Number.isNaN(parsedLineHeight)
    ? Number.isNaN(fontSize)
      ? 0
      : fontSize * 1.2
    : parsedLineHeight;

  lineHeightCache.set(el, resolvedLineHeight);
  return resolvedLineHeight;
}
