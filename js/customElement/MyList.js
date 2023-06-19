// Customized built-in elements
// Shadow DOM not available
/*
We can create only one shadow root per element.
The elem must be either a custom element, 
or one of: “article”, “aside”, “blockquote”, “body”, “div”, “footer”, “h1…h6”, “header”, “main” “nav”, “p”, “section”, or “span”. Other elements, like <img>, can’t host shadow tree.
*/

class MyList extends HTMLUListElement {
  constructor() {
    super();

    this.innerHTML = `
      <li><button>버튼</button></li>
      <li><a href="www.naver.com">네이버로 이동</a></li>
    `;

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  connectedCallback() {
    console.log("connectedCallback method");
    this.bindEvents();
  }

  bindEvents() {
    this.$btn = this.querySelector("button");
    this.$btn.addEventListener("click", this.handleBtnClick);
  }

  disconnectedCallback() {
    this.$btn.removeEventListener("click", this.handleBtnClick);
  }

  handleBtnClick() {
    this.insertAdjacentHTML("beforeend", "<li>Appended</li>");
  }
}

customElements.define("my-list", MyList, { extends: "ul" });
