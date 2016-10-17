import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import { myConfig }        from '../auth.config';

// Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class Auth {
    // Configure Auth0
    auth0 = new Auth0({
        domain: myConfig.domain,
        clientID: myConfig.clientID,
        callbackOnLocationHash: true,
        callbackURL: myConfig.callbackURL,
    });

    userProfile: Object;

    constructor(private router: Router) {
        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        var result = this.auth0.parseHash(window.location.hash);

        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.auth0.getProfile(result.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
            this.router.navigate(['/home']);
        } else if (result && result.error) {
            alert('error: ' + result.error);
        }
    }

    public signUp(username, password) {
        this.auth0.signup({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function(err) {
            if (err) alert("Opps: " + err.message);
        });
    };

    public login(username, password) {
        this.auth0.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function(err) {
            if (err) alert("Opps: " + err.message);
        });
    };

    public googleLogin() {
        this.auth0.login({
            connection: 'google-oauth2'
        }, function(err) {
            if (err) alert("Opps: " + err.message);
        });
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.router.navigate(['/login']);
    };
}
