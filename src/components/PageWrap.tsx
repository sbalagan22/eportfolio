import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageWrap({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={
        reduce
          ? undefined
          : {
              opacity: 0,
              y: -10,
              transition: { duration: 0.18, ease: 'easeIn' },
            }
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
