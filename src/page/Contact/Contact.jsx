import { use } from "react";
import { ThemesContext } from "../../context/Themes";
import { ShinyText } from "../../ui/animations";
import Form from "./components/form";

const Contact = () => {
  const { theme } = use(ThemesContext);

  return (
    <main className="flex justify-center items-center w-[50em] mb-10">
      <div className={`${theme.background} rounded-2xl border-6 border-[#9908C39E] overflow-y-auto overflow-x-hidden scrollbar-custom h-[31.8rem]`}>

        <ShinyText gradientColors={theme.colors.titleGradient}>
          <h1 className={`text-5xl w-[100%] font-title text-center px-0 py-4 border-b-4 ${theme.colors.containerBorder}`}>Contato</h1>
        </ShinyText>

        <div>
          <p className="max-w-[38rem] min-w-[21rem] text-justify px-8 py-3">Obrigado por conhecer meu trabalho! Se interessar, estou à disposição. Preencha o formulário ou me contate no LinkedIn.</p>
        </div>

       <Form stateStyle={theme} />
      </div>
    </main>
  );
};

export default Contact;