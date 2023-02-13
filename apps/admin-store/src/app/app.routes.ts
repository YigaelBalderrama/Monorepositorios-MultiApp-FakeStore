import { Route } from '@angular/router';
import { ListOfProductsComponent, LoginFormComponent } from '@fake-store/storeui';
import { AuthAdminGuardGuard } from './guards/auth-admin-guard.guard';

export const appRoutes: Route[] = [
    { path: '', component: LoginFormComponent },
    { path: 'Login', component: LoginFormComponent },
    { path: 'home', component: ListOfProductsComponent, canActivate:[AuthAdminGuardGuard] },
];
