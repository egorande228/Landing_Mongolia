type Cleanup = void | (() => void);

export const observeOnce = (
  element: Element,
  onEnter: () => Cleanup,
  options?: IntersectionObserverInit,
) => {
  let cleanup: Cleanup;

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) {
      return;
    }

    cleanup = onEnter();
    observer.disconnect();
  }, options);

  observer.observe(element);

  return () => {
    observer.disconnect();

    if (typeof cleanup === "function") {
      cleanup();
    }
  };
};
