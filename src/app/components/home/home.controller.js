export default class Controller {
    constructor($scope, $location) {

        this.text = 'chuck was here';
        this.url = $location.absUrl();
    }

    static get controllerName() {
        return 'app.default.home';
    }

}
