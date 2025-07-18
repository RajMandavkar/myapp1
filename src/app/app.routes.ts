import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'about',
        component:About
    },
    {
        path:'services',
        component:Services
    },
    {
        path:'contact',
        component:Contact
    },
];
