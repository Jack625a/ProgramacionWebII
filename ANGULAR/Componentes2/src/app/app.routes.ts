import { RouterModule, Routes } from '@angular/router';
import { ScreenProductosComponent } from './screen-productos/screen-productos.component';

export const routes: Routes = [
{
    path:'Productos', component:ScreenProductosComponent
},
{
    path:'Servicios',component:ScreenProductosComponent
}
];
