const Button = ({children, style, onClick}) => {
    return (
        <button onClick={onClick} className={`cursor-pointer ${style}`}>{children}</button>
    )
}

export default Button;