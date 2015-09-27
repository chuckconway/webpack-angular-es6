export default class Controller {
    constructor($location, RoutingService) {
        this.text = 'chuck was here';
        this.url = $location.absUrl();
    }

    static get controllerName() {
        return 'app.default.home';
    }

}
