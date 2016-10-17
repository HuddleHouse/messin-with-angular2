import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }      from '../../services/auth.service';

import { Hero } from '../../entity/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'nav.component.html',
    styleUrls: [ 'nav.component.css' ]
})

export class NavComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private auth: Auth,
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}