import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ListComponent},
    { path: 'create', component: CreatorComponent},
    {
        path: 'edit/:id',
        component: EditComponent,
    },
];
