import { darkModeState } from 'atom';
import SimpleGrow from 'components/Contato';
import Menu2 from 'components/Menu/menu2';
import Habilidades from 'pages/Habilidades';
import Sobre from 'pages/Sobre';
import { Suspense } from 'react';
import ReactGA from 'react-ga4';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Projects from './pages/Projects/index';

export default function AppRouter() {

  ReactGA.initialize('G-0BLM9FZ7BP');
  ReactGA.send({ hitType: 'pageview', page: '/my-path', title: 'Custom Title' });

  const [toggleDarkMode, setToggleDarkMode] = useRecoilState(darkModeState);


  return (

    <main className='container'>
      <Menu2 />
      <SimpleGrow toggleDarkMode={toggleDarkMode} />
      <Router>
        <Suspense fallback={<p>Carregando</p>} >
          <Routes>
            <Route path='' element={<Sobre />} />
            <Route path='About%20me' element={<Sobre />} />
            <Route path='Projects' element={<Projects />} />
            <Route path='Skills' element={<Habilidades />} />
          </Routes>

        </Suspense>
      </Router>

    </main >
  );
}
