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
      <ul>
        <slot name="list1"></slot>
        <slot name="list2"></slot>
      </ul>
    `;
  }
}

customElements.define("shadow-open", ShadowOpen);
