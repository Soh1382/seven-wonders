const wonders = document.querySelectorAll(".wonder-container");

wonders.forEach((wonder) => {
  let page = wonder.attributes.name.value;
  wonder.addEventListener("click", () => {
    document.location.href = `./pages/${page}.html`;
  });
});
