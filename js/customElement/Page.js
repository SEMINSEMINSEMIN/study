import "./MyList.js";
import "./Article.js";

class Page {
  constructor(renderTarget) {
    this.renderTarget = renderTarget;
  }

  render() {
    this.renderTarget.innerHTML = `
      <ul is="my-list"></ul>
      <toggle-article role="article" content="Hello World"></toggle-article>
    `;
  }
}

export default Page;
