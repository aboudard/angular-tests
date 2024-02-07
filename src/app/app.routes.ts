import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
    {
        path: 'products', component: ProductsComponent
    },
    {
        path: 'roles', component: RolesComponent
    }
];
