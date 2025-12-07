import { NavigationHeader, ButtonToggleThema } from "../shared/components";

const Header = () => {
    return (
        <>
            {/* Desktop: header normal */}
            <header className="flex justify-between mx-7 translate-y-6 relative z-2
                                max-[690px]:mx-3">
                <ButtonToggleThema />
                <div className="max-[690px]:hidden">
                    <NavigationHeader />
                </div>
            </header>

            {/* Mobile: nav fixo no rodapé (fora do header) */}
            <div className="hidden max-[690px]:flex">
                <NavigationHeader />
            </div>
        </>
    )
}

export default Header