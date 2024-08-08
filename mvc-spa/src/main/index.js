import MainController from "./MainController";
import MainView from "./MainView";
import MainModel from "./MainModel";

export const main = () => {
    new MainController(new MainView(), new MainModel());
};
