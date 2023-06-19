class ShadowClose extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    this.#shadowRoot.innerHTML = `
      <style>
        button {
          color: green;
        }
      </style>
      <button></button>
    `;
  }

  connectedCallback() {
    const $btn = this.#shadowRoot.querySelector("button");
    $btn.textContent = "ShadowCloseBtn";
  }
}

customElements.define("shadow-close", ShadowClose);
