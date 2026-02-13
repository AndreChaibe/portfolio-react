import './assets/styles/global.css';
import { Particles } from './ui/animations/index.jsx';
import Router from './routes/routes.js';
import { useThemes } from './context/Themes.js';
import type { JSX } from 'react';

function App(): JSX.Element {
  const { theme } = useThemes();
  
  return (
    <Particles>
      <div className={`bg-modal-black h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed ${theme.colors.text}`}>
        <Router />
      </div>
    </Particles>
  );
}

export default App;