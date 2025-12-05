import { NavigationHeader, ButtonToggleThema } from "../shared/components";

const Header = () => {
    return (
        <header className="flex justify-between mx-7 translate-y-6 relative z-2">
            <ButtonToggleThema />
            <NavigationHeader />
        </header>
    )
}

export default Header;