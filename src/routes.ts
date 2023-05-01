import Main from './pages/Main/Main';
import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';

export interface RouteSchema {
  key: string;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

export const ROUTES: RouteSchema[] = [
  {
    key: 'main',
    path: '/',
    component: Main,
  },
  {
    key: 'about',
    path: '/about',
    component: About,
  },
  {
    key: 'form',
    path: '/form',
    component: FormPage,
  },
];
