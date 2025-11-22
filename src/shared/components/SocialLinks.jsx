import { use } from "react";
import { ThemesContext } from "../../context/Themes";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SocialLinks = () => {
    const { theme } = use(ThemesContext);

    return (
        <nav className="mt-5">
            <ul className='flex gap-7
                          [&>li>svg]:fill-current'>

                <motion.li
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.7, delay: 2, type: "spring", mass: 1.0 }}>
                    <svg className={`${theme.colors.icons}`} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24">
                        <path d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeWidth="0.1" />
                    </svg>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.7, delay: 2.5, type: "spring", mass: 1.0 }}>
                    <svg className={`${theme.colors.icons}`} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd" strokeWidth="0.1" stroke="#2d2c2c" />
                    </svg>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.7, delay: 3, type: "spring", mass: 1.0 }}>
                    <svg className={`${theme.colors.icons}`} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" strokeWidth="0.1" stroke="#2d2c2c" />
                    </svg>
                </motion.li>


                <motion.li
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.7, delay: 3.5, type: "spring", mass: 1.0 }}>
                    <svg className={`${theme.colors.icons}`} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 16 16">
                        <path d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" strokeWidth="0.1" stroke="#2d2c2c" />
                    </svg>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 150 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.7, delay: 4, type: "spring", mass: 1.0 }}>
                    <svg className={`${theme.colors.icons}`} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24">
                        <g strokeWidth="0.1" stroke="#2d2c2c">
                            <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                            <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
                        </g>
                    </svg>
                </motion.li>

            </ul>
        </nav>
    )
}

export default SocialLinks;