import { Mouse } from "lucide-react";

const ScrollIndicator = ({ 
  position = "bottom",
  height = "h-17",
  gradientFrom = "from-[#510F7AB0]/20",
  gradientTo = "to-transparent",
  iconColor = "text-purple-400/100",
  iconSize = "w-8 h-10",
  showIcon = true,
  zIndex = "z-5"
}) => {
  const positionClasses = {
    bottom: "bottom-0",
    top: "top-0"
  };

  const gradientDirection = position === "bottom" 
    ? "bg-gradient-to-t" 
    : "bg-gradient-to-b";

  const borderPosition = position === "bottom" 
    ? "top-0" 
    : "bottom-0";

  const iconPosition = position === "bottom"
    ? "bottom-2"
    : "top-2";

  return (
    <div className={`absolute ${positionClasses[position]} left-0 right-0 ${height} pointer-events-none ${zIndex}`}>

      <div className={`absolute inset-0 ${gradientDirection} ${gradientFrom} via-[#510F7AB0]/5 ${gradientTo} backdrop-blur-sm`}></div>
      
      <div className={`absolute ${borderPosition} left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent`}></div>
      
      {showIcon && (
        <div className={`absolute ${iconPosition} left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce`}>
          <Mouse className={`${iconSize} ${iconColor} animate-pulse`} />
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;