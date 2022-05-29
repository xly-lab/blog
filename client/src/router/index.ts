import { RouteConfig } from 'react-router-config';
import Layout from '../layout';
import Article from '../modules/Article';
import Home from '../modules/Home';
import About from '../modules/About';
import Dynamic from '../modules/Dynamic';
import Search from '../modules/Search';
import Tag from '../modules/Tag';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    render: Layout,
    exact: true,
  },
  {
    path: '/article',
    component: Article,
    render: Layout,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    render: Layout,
    exact: true,
  },
  {
    path: '/dynamic',
    component: Dynamic,
    render: Layout,
    exact: true,
  },
  {
    path: '/search',
    component: Search,
    render: Layout,
    exact: true,
  },
  {
    path: '/tag',
    component: Tag,
    render: Layout,
    exact: true,
  },
];

export default routes;
