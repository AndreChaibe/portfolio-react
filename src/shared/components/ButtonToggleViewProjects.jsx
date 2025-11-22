const ButtonToggleViewProjects = ({ children, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="cursor-pointer rounded-[5%] px-10 py-3 mb-7 mt-5 bg-purple-900 text-white hover:bg-purple-800 transition-colors"
        >
            {children}
        </button>
    );
}

export default ButtonToggleViewProjects;