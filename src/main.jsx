import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemesProvider } from "./context/Themes.jsx";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemesProvider>
  </StrictMode>,
)
