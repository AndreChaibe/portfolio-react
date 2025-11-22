import './assets/styles/global.css';
import { ThemesContext } from "./context/Themes.jsx";
import { use } from 'react';
import { Particles } from './ui/animations/index.jsx';
import Router from './routes/routes.jsx';

function App() {
  const { theme } = use(ThemesContext);

  return (
    <Particles>
      <div className={`${theme.background} h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed`}>
        <Router />
      </div>
    </Particles>
  )
}

export default App;