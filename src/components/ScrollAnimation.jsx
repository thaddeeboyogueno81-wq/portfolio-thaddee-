import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function ScrollAnimation({ children, speed = 1, className = '' }) {
  const { scrollYProgress } = useScroll();
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100 * speed]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
