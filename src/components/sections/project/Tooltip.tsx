import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  show: string;
  name: string;
  displayName: string;
  color: string;
  horizon: string;
  vertical: string;
};

export default function Tooltip(props: Props) {
  const { show, name, displayName, color, horizon, vertical } = props;

  return (
    <AnimatePresence>
      {show === name && (
        <motion.div
          style={{
            backgroundColor: color !== 'white' ? color : '#777777',
            position: 'absolute',
            left: '50%',
            padding: 8,
            borderRadius: 10,
          }}
          initial={{
            x: horizon === 'center' ? '-50%' : 0,
            y: vertical === 'center' ? '70%' : 20,
            opacity: 0,
          }}
          animate={{
            x: horizon === 'center' ? '-50%' : '0',
            y: vertical === 'center' ? '50%' : '0',
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          exit={{
            x: horizon === 'center' ? '-50%' : 0,
            y: vertical === 'center' ? '70%' : 20,
            opacity: 0,
            transition: { duration: 0.4 },
          }}>
          <h4 style={{ fontWeight: 500, textShadow: '3px 3px 3px #494949' }}>{displayName}</h4>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
