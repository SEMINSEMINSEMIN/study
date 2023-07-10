import styles from "./navigation.module.css";
import { debounce } from "lodash";

document.querySelector('#app').innerHTML += `
    <div class="${styles.card}">
        This is navigation bar
    </div>
`;

debounce(() => console.log("dkdkdk"), 100)();