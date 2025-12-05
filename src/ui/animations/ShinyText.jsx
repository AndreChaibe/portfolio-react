const ShinyText = ({ children, disabled = false, speed = 2, gradientColors = "" }) => {

    const gradientStyle = disabled 
        ? {} 
        : {
            backgroundImage: `linear-gradient(5deg, ${gradientColors})`,
            backgroundSize: '200% 100%',
            animation: `shine ${speed}s linear infinite`
        };

    return (
        <div 
            className={`${disabled ? '' : 'bg-clip-text text-transparent'}`}
            style={gradientStyle}
        >
            {children}
        </div>
    );
};

export default ShinyText;