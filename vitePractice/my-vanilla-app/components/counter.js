import styles from "./counter.module.css";
// 정적 에셋을 import 하는 경우, 이에 대한 Public URL이 반환된다
// 그래서 img src 이렇게 사용 가능!
import javascriptLogo from '../javascript.svg';
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="${styles.logo}" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="${styles.logo} ${styles.vanilla}" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class=${styles.card}>
      <button id="counter" type="button"></button>
    </div>
    <p class=${styles.readTheDocs}
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
