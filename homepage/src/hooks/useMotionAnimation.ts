export function useMotionAnimation(yValue: number) {
  return {
    initial: { opacity: 0, y: yValue },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      ease: 'easeInOut',
      duration: 1,
      y: { duration: 1 },
    },
  };
}
