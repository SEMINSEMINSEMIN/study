const createTemplate = (string) => {
  const $temp = document.createElement("template");
  $temp.innerHTML = string;
  return $temp.content.cloneNode(true);
};

export default createTemplate;
