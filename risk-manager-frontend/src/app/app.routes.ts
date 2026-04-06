import { Routes } from '@angular/router';
import { RiesgosList } from './features/riesgos/pages/riesgos-list/riesgos-list';
import { CategoriasList } from './features/categorias/pages/categorias-list/categorias-list';

export const routes: Routes = [
    {path: '', redirectTo: '/riesgos', pathMatch: 'full'},
    {path: 'riesgos', component: RiesgosList },
    {path: 'categorias', component: CategoriasList}
];
