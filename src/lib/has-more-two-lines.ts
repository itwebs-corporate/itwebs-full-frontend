export function hasMoreTwoLines(el: HTMLElement | null) {
  if (!el) return false;

  const styles = getComputedStyle(el);
  const lineHeight = parseFloat(styles.lineHeight);

  if (isNaN(lineHeight)) return false;

  return el.scrollHeight > lineHeight * 2 + 1;
}
