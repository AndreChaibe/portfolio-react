import { motion } from "motion/react";
import { SocialLinks } from "../../../shared/components/index.js";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import type { FormEvent } from "react";
import type { Theme } from "../../../context/Themes.js";

interface FormProps {
    stateStyle: Theme;
}

type SubmitStatus = "success" | "error" | null;

const Form = ({ stateStyle }: FormProps) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

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
                ttype: "spring" as const,  
                stiffness: 100,
                damping: 12,
                duration: 0.6
            }
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const SERVICE_ID = 'service_460xr6q';
        const TEMPLATE_ID = 'template_2l1zwjg';
        const PUBLIC_KEY = 'xATQBIN9ZlBdJ1sUD';

        if (!formRef.current) {
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current?.reset();

                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error);
                setSubmitStatus('error');
                setIsSubmitting(false);
                
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
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
                name="user_name"
                placeholder="Digite seu nome"
                className={`${stateStyle.colors.containerBorder}`}
                required
            />

            <motion.label variants={itemVariants} htmlFor="email">Email</motion.label>
            <motion.input
                variants={itemVariants}
                type="email"
                id="email"
                name="user_email"
                placeholder="Insira seu endereço de e-mail"
                className={`${stateStyle.colors.containerBorder}`}
                required
            />

            <motion.label variants={itemVariants} htmlFor="subject">Assunto</motion.label>
            <motion.input
                variants={itemVariants}
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto da mensagem"
                className={`${stateStyle.colors.containerBorder}`}
                required
            />

            <motion.label variants={itemVariants} htmlFor="message">Mensagem</motion.label>
            <motion.textarea
                variants={itemVariants}
                name="message"
                id="message"
                className={`${stateStyle.colors.containerBorder} resize-none h-30`}
                placeholder="Digite sua mensagem..."
                required
            />

            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center mb-2 font-semibold"
                >
                    ✓ Mensagem enviada com sucesso!
                </motion.div>
            )}

            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center mb-2 font-semibold"
                >
                    Erro ao enviar. Tente novamente.
                </motion.div>
            )}

            <motion.div
                variants={itemVariants}
                className={`flex justify-center gap-3 text-white py-3 mt-5 cursor-pointer rounded-[5px]
                    [&>button]:cursor-pointer 
                    ${isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'}`}
            >
                <Send className={isSubmitting ? 'animate-pulse' : ''} />
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
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
