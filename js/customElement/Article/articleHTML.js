const articleHTML = (toggleContent) => {
  return `
  <form class="toggle-form">
    <input>
    <button type="submit">토글 내용 변경</button>
  </form>
  <button class="toggle">토글</button>
  <div class="toggle-area" style="display:none;">
    <p class="content-area">${toggleContent}</p>
  </div>  
  `;
};

export default articleHTML;
