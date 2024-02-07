import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  show: string;
  name: string;
  displayName: string;
  color: string;
  horizon: string;
  vertical: string;
};

/**
 *
 * @param props 프로젝트 각 데이터 및 초기 위치 설정
 * @returns framer motion을 이용한 애니메이션
 */
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
            zIndex: 999,
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
