import { Component } from '@angular/core';
import { Auth }              from './services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [ Auth ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}