const accQ = document.querySelectorAll(".acc-header");

accQ.forEach((el) => {
  el.addEventListener("click", function (e) {
    const content = el.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      const icon = e.target.classList.contains("acc-i");
      console.log(icon);
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
