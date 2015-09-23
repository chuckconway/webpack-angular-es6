export default class Controller {
    constructor($location) {

        this.text = 'This is the user page.';
        this.url = $location.absUrl();
    }

    static get controllerName() {
        return 'app.default.user';
    }

}
