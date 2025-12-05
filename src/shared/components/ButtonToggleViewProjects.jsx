const ButtonToggleViewProjects = ({ children, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="cursor-pointer rounded-[5%] px-10 py-3 mb-7 mt-5 bg-purple-800 text-white"
        >
            {children}
        </button>
    );
}

export default ButtonToggleViewProjects;