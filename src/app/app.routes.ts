import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Header } from './components/header/header';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full',
    // },
    //     {
    //         path: 'login',
    //         component: Login
    //     },

    //     {
    //     path: '',
    //     children: [
    //       {
    //         path: '',
    //         component: Home
    //     },
    //     {
    //         path: 'about',
    //         component: About
    //     },
    //     {
    //         path: 'services',
    //         component: Services
    //     },
    //     {
    //         path: 'contact',
    //         component: Contact
    //     },
    //     ],
    //   },

    {
        path: '',
        component: Home
    },

    {
        path: 'about',
        component: About
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        component: Login
    },

];
