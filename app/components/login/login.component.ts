import { Component } from '@angular/core';
import { Auth }      from '../../services/auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent {
    constructor(private auth: Auth) {};
}