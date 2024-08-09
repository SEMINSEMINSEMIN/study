import { main } from "./main";

(function () {
    class App {
        init = () => {
            main();
        };
    }

    document.addEventListener("DOMContentLoaded", function () {
        const app = new App();
        app.init();
    });
})();
