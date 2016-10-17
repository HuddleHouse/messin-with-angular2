import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }      from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.css' ]
})

export class FooterComponent {
    constructor(
        private auth: Auth,
        private router: Router,
    ) { }
}