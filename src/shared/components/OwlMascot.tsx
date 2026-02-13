import { useState, useEffect, useRef, type CSSProperties } from 'react';
import owlImage from "../../assets/imgs/common/owl-in-tree.png";

interface EyePosition {
  x: number;
  y: number;
}

interface EyePositions {
  left: EyePosition;
  right: EyePosition;
}

interface BalloonPosition {
  top: string;
  left: string;
}

const OwlMascot = () => {
  const [eyePositions, setEyePositions] = useState<EyePositions>({ 
    left: { x: 0, y: 0 }, 
    right: { x: 0, y: 0 } 
  });
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [showBalloon, setShowBalloon] = useState<boolean>(false);
  const [balloonPosition, setBalloonPosition] = useState<BalloonPosition>({ 
    top: '35%', 
    left: '50%' 
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [balloonRendered, setBalloonRendered] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkRotation = (): void => {
      const mobile = window.innerWidth <= 690;
      setIsRotated(mobile);
      setIsMobile(mobile);
    };

    checkRotation();
    window.addEventListener('resize', checkRotation);
    return () => window.removeEventListener('resize', checkRotation);
  }, []);

  useEffect(() => {
    let delayTimer: NodeJS.Timeout;

    if (window.innerWidth <= 690) {
      delayTimer = setTimeout(() => {
        setBalloonRendered(true);
        setTimeout(() => {
          setShowBalloon(true);
        }, 10);
      }, 5000);
    } else {
      delayTimer = setTimeout(() => {
        setBalloonRendered(true);
        setTimeout(() => {
          setShowBalloon(true);
        }, 10);
      }, 5000);
    }

    const hideTimer = setTimeout(() => {
      setShowBalloon(false);
      setTimeout(() => {
        setBalloonRendered(false);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 690) {
      setBalloonPosition({
        top: '0%',
        left: '45%',
      });
    } else {
      setBalloonPosition({
        top: '35%',
        left: '50%',
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (!leftEyeRef.current || !rightEyeRef.current) return;

      const calculateEyePosition = (eyeElement: HTMLDivElement): EyePosition => {
        const eyeRect = eyeElement.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        let angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

        if (isRotated) {
          angle = angle + Math.PI;
        }

        const maxDistance = 5;
        const mouseDistance = Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY);
        const distance = Math.min(maxDistance, mouseDistance / 80);

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      setEyePositions({
        left: calculateEyePosition(leftEyeRef.current),
        right: calculateEyePosition(rightEyeRef.current),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isRotated]);

  const balloonStyle: CSSProperties = {
    top: isMobile ? '-32%' : '35%',
    left: balloonPosition.left,
    transform: isMobile ? 'rotate(180deg)' : 'none',
    width: isMobile ? '200px' : '260px',
    opacity: showBalloon ? 1 : 0,
    transition: 'opacity 0.5s ease-out, transform 1s ease-out',
  };

  const leftEyePupilStyle: CSSProperties = {
    transform: `translate(calc(-50% + ${eyePositions.left.x}px), calc(-50% + ${eyePositions.left.y}px))`,
    transition: 'transform 0.1s ease-out',
  };

  const rightEyePupilStyle: CSSProperties = {
    transform: `translate(calc(-50% + ${eyePositions.right.x}px), calc(-50% + ${eyePositions.left.y}px))`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div
      className="fixed flex justify-center items-end right-[-0rem] w-[27rem] h-[100vh] 
                 max-[1355px]:right-[-5rem]
                 max-[1010px]:hidden
                 max-[690px]:flex
                 max-[690px]:h-[40%]
                 max-[690px]:top-[-28vh]
                 max-[690px]:rotate-180
                 [@media(max-height:630px)]:hidden"
    >
      <div className="relative w-[100%] h-[41rem] max-[690px]:w-[14rem] max-[690px]:h-[20rem]">
        {balloonRendered && (
          <div className="absolute translate-x-[-50%] z-10" style={balloonStyle}>
            <div
              className="relative bg-black rounded-2xl px-3 py-4 shadow-lg"
              style={{
                fontSize: isMobile ? '12px' : '16px',
              }}
            >
              <p className="text-purple-100 font-medium text-center">
                Olá! Permita-me apresentar: <span className="text-purple-400">sou Adamastor!</span> É um
                prazer receber sua visita.{' '}
                <span className="text-purple-400">Serei seu companheiro</span> durante esta exploração!
              </p>
              <div className="absolute bottom-[90%] left-[46%] translate-x-[-50%]">
                <div className="w-8 h-8 bg-black rotate-45"></div>
              </div>
            </div>
          </div>
        )}

        <img
          ref={imgRef}
          className="absolute w-full h-full object-contain"
          src={owlImage}
          alt="Ilustração de uma coruja estilizada, formada por linhas geométricas simples, empoleirada no topo de uma árvore escura. A coruja tem olhos grandes e redondos, asas e peitos destacados por traços retos e angulares, transmitindo um visual moderno e minimalista."
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <div
            ref={leftEyeRef}
            className="absolute w-[1.9rem] h-[1.9rem] bg-[#2d1b4e] rounded-full pointer-events-none
                       max-[690px]:w-[0.95rem] max-[690px]:h-[0.95rem]"
            style={{
              top: '17.8%',
              left: '37.5%',
            }}
          >
            <div
              className="absolute w-[50%] h-[50%] bg-white rounded-full top-1/2 left-1/2"
              style={leftEyePupilStyle}
            ></div>
          </div>

          <div
            ref={rightEyeRef}
            className="absolute w-[1.9rem] h-[1.9rem] bg-[#2d1b4e] rounded-full pointer-events-none
                       max-[690px]:w-[0.95rem] max-[690px]:h-[0.95rem]"
            style={{
              top: '17.8%',
              left: '50.9%',
            }}
          >
            <div
              className="absolute w-[50%] h-[50%] bg-white rounded-full top-1/2 left-1/2"
              style={rightEyePupilStyle}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwlMascot;