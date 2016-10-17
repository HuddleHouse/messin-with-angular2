import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }      from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'nav.component.html',
    styleUrls: [ 'nav.component.css' ]
})

export class NavComponent {
    constructor(
        private auth: Auth,
        private router: Router,
    ) { }
}