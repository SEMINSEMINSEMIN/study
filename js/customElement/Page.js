import "./MyList.js";
import "./Article.js";
import "./ShadowOpen.js";
import "./ShadowClose.js";

class Page {
  constructor(renderTarget) {
    this.renderTarget = renderTarget;
  }

  render() {
    this.renderTarget.innerHTML = `
      <ul is="my-list"></ul>
      <toggle-article role="article" content="Hello World"></toggle-article>
      <shadow-open></shadow-open>
      <shadow-close></shadow-close>
    `;

    const $shadowOpen = document.querySelector("shadow-open");
    console.log($shadowOpen.shadowRoot.childNodes);

    const $shadowClose = document.querySelector("shadow-close");
    console.log($shadowClose.shadowRoot); // null
  }
}

export default Page;
