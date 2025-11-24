import { use } from "react";
import { ThemesContext } from "../../context/Themes";
import { ShinyText } from "../../ui/animations";

const Home = () => {

    const { theme } = use(ThemesContext);

    return (
        <main className="flex justify-center items-center w-[50em] mb-50">
            <div className={`${theme.colors.containerBg} rounded-2xl border-6 border-[#9908C39E]`}>
                <ShinyText>
                    <h1 className={`text-5xl w-[100%] font-title text-center px-0 py-6 border-4 rounded-[10px] ${theme.colors.containerBorder}`}>Contanto</h1>
                </ShinyText>

                <form action="" className="flex flex-col text-white px-14 pb-10 mt-4 overflow-y-auto overflow-x-hidden scrollbar-custom
                [&>input,&>textarea]:mb-6 [&>input,&>textarea,&>button]:rounded-[5px] [&>input,&>textarea]:p-1 [&>input,&>textarea]:border-2 [&>input,&>textarea]:w-100">

                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome" className={`${theme.colors.containerBorder}`} />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" className={`${theme.colors.containerBorder}`} />

                    <label htmlFor="subject">Assunto</label>
                    <input type="text" id="subject" placeholder="Assunto" className={`${theme.colors.containerBorder}`} />

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="" className={`${theme.colors.containerBorder} resize-none h-30`} placeholder="Sua mensagem"></textarea>

                    <button type="submit" className="bg-purple-500 py-3 cursor-pointer">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Home;