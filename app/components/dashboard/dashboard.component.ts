import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }      from '../../services/auth.service';

import { Hero } from '../../entity/hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(
        private auth: Auth,
        private router: Router,
    ) { }
}