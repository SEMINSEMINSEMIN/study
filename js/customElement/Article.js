// Autonomous custom elements
// Shadow DOM not applied
// 접근성을 위해 사용시 aria role 이용: Page.js 참고

class Article extends HTMLElement {
  constructor() {
    super();
    this.isContentVisible = false;
    // https://chat.openai.com/
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const toggleContent = this.getAttribute("content");

    this.innerHTML = `
      <form class="toggle-form">
        <input>
        <button type="submit">토글 내용 변경</button>
      </form>
      <button class="toggle">토글</button>
      <div class="toggle-area" style="display:none;">
        <p class="content-area">${toggleContent}</p>
      </div>
    `;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.$toggleForm = this.querySelector(".toggle-form");
      this.$input = this.$toggleForm.querySelector("input");
      this.$toggleBtn = this.querySelector(".toggle");
      this.$toggleArea = this.querySelector(".toggle-area");
      this.$contentArea = this.querySelector(".content-area");
      this.bindEvents();
      this.rendered = true;
    }
  }

  bindEvents() {
    this.$toggleBtn.addEventListener("click", this.handleToggle);
    this.$toggleForm.addEventListener("submit", this.handleSubmit);
  }

  disconnectedCallback() {
    this.$toggleBtn.removeEventListener("click", this.handleToggle);
    this.$toggleForm.removeEventListener("submit", this.handleSubmit);
  }

  handleToggle() {
    if (this.isContentVisible) {
      this.$toggleArea.style.display = "none";
      this.isContentVisible = false;
    } else {
      this.$toggleArea.style.display = "block";
      this.isContentVisible = true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const inpVal = this.$input.value;
    this.setAttribute("content", inpVal);
    this.$input.value = "";
  }

  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "content":
        this.attrContentChanged(newValue);
        break;
      default:
        break;
    }
  }

  attrContentChanged(newValue) {
    if (this.$contentArea) {
      this.$contentArea.textContent = newValue;
    }
  }
}

customElements.define("toggle-article", Article);
