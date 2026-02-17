export function hasMoreTwoLines(el: HTMLElement | null) {
  if (!el) return false;

  const wasNone = el.classList.contains('line-clamp-none');

  el.classList.remove('line-clamp-none');
  el.classList.add('line-clamp-2');
  const clamped = el.getBoundingClientRect().height;

  el.classList.remove('line-clamp-2');
  const full = el.getBoundingClientRect().height;

  el.classList.add('line-clamp-2');
  if (wasNone) {
    el.classList.remove('line-clamp-2');
    el.classList.add('line-clamp-none');
  }

  return full > clamped + 1;
}
