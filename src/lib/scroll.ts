export const NAV_OFFSET = 80;

type ScrollOptions = {
  behavior?: ScrollBehavior;
  updateHash?: boolean;
};

export function scrollToElement(
  el: HTMLElement | null,
  { behavior = "smooth", updateHash = true }: ScrollOptions = {}
): boolean {
  if (!el) return false;

  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, y), behavior });

  if (updateHash && el.id) {
    history.replaceState(null, "", `#${el.id}`);
  }

  return true;
}

export function scrollToId(
  id: string,
  options?: ScrollOptions
): boolean {
  return scrollToElement(document.getElementById(id), options);
}

export function scrollToSelector(
  selector: string,
  options?: ScrollOptions
): boolean {
  return scrollToElement(
    document.querySelector<HTMLElement>(selector),
    options
  );
}

export function scrollToIdWhenReady(
  id: string,
  {
    behavior = "smooth",
    updateHash = true,
    maxAttempts = 20,
    delayMs = 50,
  }: ScrollOptions & { maxAttempts?: number; delayMs?: number } = {}
): void {
  let attempts = 0;

  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      const { height, width } = el.getBoundingClientRect();
      if (height > 0 || width > 0) {
        scrollToElement(el, { behavior, updateHash });
        return;
      }
    }

    attempts += 1;
    if (attempts < maxAttempts) {
      window.setTimeout(tryScroll, delayMs);
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(tryScroll);
  });
}
