import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreuiModule } from '@fake-store/storeui';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        StoreuiModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
        NgbModule
    ]
})
export class AppModule {}
