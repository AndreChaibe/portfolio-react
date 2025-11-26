import { use } from "react";
import { ThemesContext } from "../../context/Themes";
import { ShinyText } from "../../ui/animations";
import { Send } from "lucide-react";
import { SocialLinks } from "../../shared/components";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Contact = () => {
  const { theme } = use(ThemesContext);

  return (
    <main className="flex justify-center w-[50em] mb-33  overflow-y-auto overflow-x-hidden scrollbar-custom h-[42.8rem]">
      <div className={`${theme.colors.containerBg} rounded-2xl border-6 border-[#9908C39E]`}>
        <ShinyText>
          <h1 className={`text-5xl w-[100%] font-title text-center px-0 py-3.5 border-4 rounded-[10px] ${theme.colors.containerBorder}`}>Contato</h1>
        </ShinyText>

        <div>
          <p className="text-white max-w-[38rem] min-w-[21rem] text-justify px-8 py-3">Obrigado por conhecer meu trabalho! Se interessar, estou à disposição. Preencha o formulário ou me contate no LinkedIn.</p>
        </div>

        <form action="" className="flex flex-col text-white px-8 pb-7 mt-1
                                   [&>input,&>textarea]:mb-4 [&>input,&>textarea,&>button]:rounded-[5px] [&>input,&>textarea]:p-2 [&>input,&>textarea]:border-2 [&>input,&>textarea]:w-[100%]"
        >

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" className={`${theme.colors.containerBorder}`} />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Insira seu endereço de e-mail" className={`${theme.colors.containerBorder}`} />

          <label htmlFor="subject">Assunto</label>
          <input type="text" id="subject" placeholder="Assunto da mensagem" className={`${theme.colors.containerBorder}`} />

          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="" className={`${theme.colors.containerBorder} resize-none h-30`} placeholder="Escreva sua mensagem" ></textarea>

          <div className="flex justify-center gap-3 bg-purple-500 py-3 mt-5 cursor-pointer rounded-[5px]">
            <Send />
            <button type="submit">Enviar</button>
          </div>

          <motion.div
            initial={{ opacity: 0.1, left: -150 }}
            whileInView={{ opacity: 1, left: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
            className={`flex justify-center items-center mt-4 py-3 ${theme.colors.containerBg} rounded-2xl`}>
            <SocialLinks />
          </motion.div>

        </form>
      </div>
    </main>
  );
};

export default Contact;