import { use } from "react";
import { ThemesContext, type ThemesContextValue } from "../../context/Themes.js";
import { ShinyText } from "../../ui/animations/index.jsx";
import Form from "./components/Form.js";

const Contact = () => {
  const { theme } = use(ThemesContext) as ThemesContextValue;

  return (
    <main className="flex justify-center items-center w-[50em] mb-10">
      <div className={`${theme.background} rounded-2xl border-6 border-[#9908C39E] overflow-y-auto overflow-x-hidden scrollbar-custom h-[31.8rem] hyphens-auto
                       [@media(min-height:910px)]:h-[45rem]
                      [@media(max-height:740px)]:h-[30rem]
                       max-[690px]:fixed
                       max-[690px]:top-35`}>

        <ShinyText gradientColors={theme.colors.titleGradient}>
          <h1 className={`text-5xl w-[100%] font-title text-center px-0 py-4 border-b-4 ${theme.colors.containerBorder}`}>Contato</h1>
        </ShinyText>

        <div>
          <p className="max-w-[38rem] min-w-[21rem] text-justify px-8 py-3 
            opacity-0 
            [animation:fadeSlideIn_0.7s_ease-out_forwards]
            [animation-delay:0.2s]">
            Obrigado por conhecer meu trabalho! Se interessar, estou à disposição. Preencha o formulário ou me contate no <a className="text-purple-400" href="https://www.linkedin.com/in/andre-chaibe/" target="_blank">Linkedin</a>.
          </p>
        </div>

       <Form stateStyle={theme} />
      </div>
    </main>
  );
};

export default Contact;
