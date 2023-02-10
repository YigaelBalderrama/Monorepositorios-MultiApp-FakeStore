import { Route } from '@angular/router';
import { ListOfProductsComponent, LoginFormComponent } from '@fake-store/storeui';

export const appRoutes: Route[] = [
    { path: '', component: LoginFormComponent },
    { path: 'Login', component: LoginFormComponent },
    { path: 'home', component: ListOfProductsComponent },
];
