import 'normalize.css';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
import Router from './routes';


ReactDOM.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  document.getElementById('root')
);


