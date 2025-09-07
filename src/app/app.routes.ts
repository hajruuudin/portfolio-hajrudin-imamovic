import { Routes } from '@angular/router';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Other } from './sections/other/other';

export const routes: Routes = [
    {
        path: '', redirectTo: '/about', pathMatch: 'full'
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'other',
        component: Other
    }
];
