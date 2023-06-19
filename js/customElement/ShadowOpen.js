class ShadowOpen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          color: blue;
        }
      </style>
      <button>ShadowOpenBtn</button>
    `;
  }
}

customElements.define("shadow-open", ShadowOpen);
