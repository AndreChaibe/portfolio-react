import './assets/styles/global.css';
import { Particles } from './ui/animations/index.jsx';
import Router from './routes/routes.jsx';
import { ThemesContext } from './context/Themes.jsx';
import { use } from 'react';

function App() {

  const { theme } = use(ThemesContext);
  
  return (
    <Particles>
      <div className={`bg-modal-black h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed ${theme.colors.text}`}>
        <Router />
      </div>
    </Particles>
  )
}

export default App;