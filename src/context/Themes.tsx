import { useState, createContext, use, type ReactNode, type Dispatch, type SetStateAction } from 'react';

interface ThemeColors {
  text: string;
  highlightText: string;
  navBg: string;
  icons: string;
  iconsBg: string;
  title: string;
  titleGradient: string;
  buttonBg: string;
  containerBorder: string;
  cardGradient: string;
  cadGradientExpansion: string;
  techCardBg: string;
  cardBgHover: string;
}

interface Theme {
  background: string;
  colors: ThemeColors;
}

interface Themes {
  white: Theme;
  black: Theme;
}

type ThemeName = keyof Themes;

interface ThemesContextValue {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

interface ThemesProviderProps {
  children: ReactNode;
}

function loadThemeFromStorage(): Theme {
  const savedThemeJSON = localStorage.getItem("currentTheme");

  if (savedThemeJSON) {
    try {
      return JSON.parse(savedThemeJSON) as Theme;
    } catch (error) {
      console.error("Erro ao carregar tema do localStorage:", error);
      return themes.black;
    }
  }
  
  return themes.black;
}

const themes: Themes = {
  white: {
    background: "bg-modal-white",
    colors: {
      text: "text-black",
      highlightText: "text-purple-700",
      navBg: "bg-[#f6e5ff]",
      icons: "text-[#8128CB]",
      iconsBg: "bg-[#F6F4F8DE]",
      title: "text-[#990BE1]",
      titleGradient: "#935AAF, #702893, #935AAF",
      buttonBg: "bg-[#7108A8]",
      containerBorder: "border-[#E700FF]",
      cardGradient: "#fff",
      cadGradientExpansion: "30%",
      techCardBg: "bg-white",
      cardBgHover: "bg-[#F6F6F6]",
    },
  },
  black: {
    background: "bg-modal-black",
    colors: {
      text: "text-white",
      highlightText: "text-purple-300",
      navBg: "bg-[#26162f]",
      icons: "text-[#a021c8]",
      iconsBg: "bg-black/20",
      title: "text-[#c084fc]",
      titleGradient: "#E4C4F4, #965CB1, #E4C4F4",
      buttonBg: "bg-[#9E0BA5]",
      containerBorder: "border-purple-500",
      cardGradient: "#240B34",
      cadGradientExpansion: "42%",
      techCardBg: "bg-[#413152]",
      cardBgHover: "bg-[#121212B0]",
    },
  },
} as const;

const ThemesContext = createContext<ThemesContextValue | undefined>(undefined);

const ThemesProvider = ({ children }: ThemesProviderProps) => {
  const [theme, setTheme] = useState<Theme>(loadThemeFromStorage);

  return (
    <ThemesContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};

const useThemes = (): ThemesContextValue => {
  const context = use(ThemesContext);
  
  if (!context) {
    throw new Error("useThemes deve ser usado dentro de um ThemesProvider");
  }
  
  return context;
};

export { themes, ThemesContext, ThemesProvider, useThemes };
export type { Theme, ThemeColors, ThemeName, Themes, ThemesContextValue };