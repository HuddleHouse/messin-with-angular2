interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'NlfhbcLV7TdYq5CZSJQYft0J0BRTcH26',
    callbackURL: 'http://localhost:3000/',
    domain: 'blankslate.auth0.com',
};
