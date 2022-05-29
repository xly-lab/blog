import {RouteConfig }from 'react-router-config'
import Layout from '../layout'
import Home from '../modules/Home'

const routes:RouteConfig[] = [
  {
    path:'/',
    component:Home,
    render:Layout
  }
]

export default routes