class ShadowClose extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    this.#shadowRoot.innerHTML = `
      <style>
        button {
          margin: 30px auto 10px;;
          display: block;
          color: green;
        }
      </style>
      <button></button>
      <a href="www.yahoo.com">야후로 이동</a>
      <footer>
        <ul>
          <li>리스트 1</li>
          <li>리스트 2</li>
          <li>리스트 3</li>
        </ul>
      </footer>
    `;
  }

  connectedCallback() {
    const $btn = this.#shadowRoot.querySelector("button");
    $btn.textContent = "ShadowCloseBtn";
  }
}

customElements.define("shadow-close", ShadowClose);
