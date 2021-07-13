export class LoginMessage {

    private unconfirmedEmail = false;
    private invalidCredentials = false;
    private unexpectedError = false;
    private messageReturned: string;

    constructor() {}

    public getUnconfirmedEmail(): boolean {
        return this.unconfirmedEmail;
    }

    public setUnconfirmedEmail(unconfirmedEmail: boolean) {
        this.unconfirmedEmail = unconfirmedEmail;
    }

    public getinvalidCredentials(): boolean {
        return this.invalidCredentials;
    }

    public getUnexpectedError() {
        return this.unexpectedError;
    }

    public getMessageReturned() {
        return this.messageReturned;
    }

    public setInvalidCredentials(invalidCredentials: boolean) {
        this.invalidCredentials = invalidCredentials;
    }

    public setUnexpectedError(unexpectedError: boolean) {
        this.unexpectedError = unexpectedError;
    }

    public setMessageReturned(messageReturned: string) {
        this.messageReturned = messageReturned;
    }

    public resetAllStatus() {
        this.unconfirmedEmail = false;
        this.invalidCredentials = false;
        this.unexpectedError = false;
        this.messageReturned = '';
    }
}
