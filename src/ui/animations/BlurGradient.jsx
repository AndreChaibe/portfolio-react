
import { motion } from "motion/react";
import { useMemo } from 'react';

const BlurGradient = ({ 
  colors = ['#8B5CF69C'],
  intensity = 'medium', 
  position = 'bottom',
  height = '200px',
  animate = true,
  className = ''
}) => {
  const intensityMap = useMemo(() => ({
    light: 'blur-xl',
    medium: 'blur-2xl',
    heavy: 'blur-3xl'
  }), []);

  const gradientColors = useMemo(() => 
    [...colors, ...colors].join(', '),
    [colors]
  );

  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(90deg, ${gradientColors})`,
    backgroundSize: '200% 100%',
    animation: animate ? 'moveGradient 10s linear infinite' : 'none',
    willChange: animate ? 'background-position' : 'auto'
  }), [gradientColors, animate]);

  const renderBlur = useMemo(() => (pos) => (
    <motion.div
      key={pos}
      initial={animate ? { opacity: 0, scale: 0.8 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute left-0 right-0 pointer-events-none z-0 ${
        pos === 'top' ? 'top-0' : 'bottom-0'
      } ${className}`}
      style={{ height }}
    >
      <div 
        className={`w-full h-full ${intensityMap[intensity]} opacity-60`}
        style={gradientStyle}
      />
    </motion.div>
  ), [animate, className, height, intensityMap, intensity, gradientStyle]);

  return (
    <>
      <style>{`
        @keyframes moveGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      {(position === 'top' || position === 'both') && renderBlur('top')}
      {(position === 'bottom' || position === 'both') && renderBlur('bottom')}
    </>
  );
};

export default BlurGradient