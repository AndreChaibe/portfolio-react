import { use } from "react";
import { ThemesContext } from "../../../context/Themes.jsx";
import { ShinyText, CircularText } from "../../../ui/animations";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import profilePhoto from "../../../assets/imgs/about/photo-web-developer.webp";

const ProfileCard = () => {

  const { theme } = use(ThemesContext)

  return (

    <motion.div
      className={`${theme.background} rounded-b-3xl border-5 ${theme.colors.containerBorder}
                   max-[690px]:w-[70%] max-[575px]:w-[55%] max-[413px]:w-[50%]`}
      initial={{ opacity: 0.1, left: -150 }}
      whileInView={{ opacity: 1, left: 0 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
    >

      <ShinyText gradientColors={theme.colors.titleGradient}>
        <h1 className={`text-5xl font-title text-center mb-4 border-b-4 ${theme.colors.containerBorder} p-4`}>Sobre mim</h1>
      </ShinyText>

      <div className="flex justify-center items-center">
        <CircularText
          text="---------------------------------"
          onHover="speedUp"
          spinDuration={20}>
          <img className="w-[10rem] m-auto rounded-[50%]" src={profilePhoto} alt="" />
        </CircularText >
      </div>

      <p className={`max-w-[40rem] pt-5 px-10 pb-10`}>
        Sou Desenvolvedor Front-end Júnior com mais de 1 ano de experiência prática criando interfaces eficientes e escaláveis utilizando HTML, CSS, JavaScript, além de trabalhar com bibliotecas e frameworks modernos como React e Tailwind CSS. Busco sempre unir performance, design e usabilidade em cada projeto.
        <br /><br />
        Nos projetos em que atuei, destaquei-me por entregar soluções que unem funcionalidade e estética criativa, sempre priorizando uma experiência do usuário fluida e intuitiva. Meu foco principal é transformar ideias em interfaces responsivas, eficientes e escaláveis, aliando performance, design e usabilidade em cada projeto.</p>

    </motion.div>
  )
}

export default ProfileCard;