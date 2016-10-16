import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { LoginComponent }      from './components/login/login.component';
import { HeroService }          from './services/hero.service';

//Routes imported here
import { AppRoutingModule }     from './routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        LoginComponent
    ],
    providers: [
        HeroService,
        AUTH_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }