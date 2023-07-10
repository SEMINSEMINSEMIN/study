import styles from "./navigation.module.css";
import { debounce } from "lodash";

document.querySelector('#app').innerHTML += `
    <nav class="${styles.card}">
        <a href="./nested/">Navigate to nested Page</a>
    </nav>
`;

debounce(() => console.log("dkdkdk"), 100)();