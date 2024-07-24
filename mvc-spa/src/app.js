(function () {
    class App {
        init = () => {
            const $appRoot = document.getElementById("app-root");
            $appRoot.textContent = "Hello World";
        };
    }

    document.addEventListener("DOMContentLoaded", function () {
        const app = new App();
        app.init();
    });
})();
