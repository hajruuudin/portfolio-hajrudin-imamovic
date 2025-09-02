import { Routes } from '@angular/router';
import { App } from './app';
import { Homepage } from './pages/homepage/homepage';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Other } from './pages/other/other';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: Homepage
    },
    {
        path: 'experience',
        component: Experience
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
