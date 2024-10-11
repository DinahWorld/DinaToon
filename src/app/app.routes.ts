import {Routes} from '@angular/router';
import {DinatoonDetailComponent} from "./features/dinatoon-detail/dinatoon-detail.component";
import {HomeComponent} from "./features/home/home.component";

export const routes: Routes = [
    {path: 'dinatoon/:id', component: DinatoonDetailComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];