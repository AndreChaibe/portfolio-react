// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { SocialLinks } from "../../../shared/components";
import { Send } from "lucide-react";

const Form = ({ stateStyle }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6
            }
        }
    };

    return (
        <motion.form
            action=""
            className="flex flex-col px-8 pb-3 mt-1
                 [&>input,&>textarea]:mb-4 [&>input,&>textarea,&>button]:rounded-[5px] 
                 [&>input,&>textarea]:p-2 [&>input,&>textarea]:border-2 [&>input,&>textarea]:w-[100%]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.label variants={itemVariants} htmlFor="name">Nome</motion.label>
            <motion.input
                variants={itemVariants}
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className={`${stateStyle.colors.containerBorder}`}
            />

            <motion.label variants={itemVariants} htmlFor="email">Email</motion.label>
            <motion.input
                variants={itemVariants}
                type="text"
                id="email"
                placeholder="Insira seu endereço de e-mail"
                className={`${stateStyle.colors.containerBorder}`}
            />

            <motion.label variants={itemVariants} htmlFor="subject">Assunto</motion.label>
            <motion.input
                variants={itemVariants}
                type="text"
                id="subject"
                placeholder="Assunto da mensagem"
                className={`${stateStyle.colors.containerBorder}`}
            />

            <motion.label variants={itemVariants} htmlFor="message">Mensagem</motion.label>
            <motion.textarea
                variants={itemVariants}
                name="message"
                id=""
                className={`${stateStyle.colors.containerBorder} resize-none h-30`}
            />

            <motion.div
                variants={itemVariants}
                className="flex justify-center gap-3 text-white bg-purple-500 py-3 mt-5 cursor-pointer rounded-[5px]
            [&>button]:cursor-pointer"
            >
                <Send />
                <button type="submit">Enviar</button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0.1, left: -150 }}
                whileInView={{ opacity: 1, left: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
                className="flex justify-center items-center mt-4 py-3 rounded-2xl"
            >
                <SocialLinks />
            </motion.div>

        </motion.form>
    )
}

export default Form;