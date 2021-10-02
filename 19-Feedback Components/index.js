let components = document.querySelectorAll(".component--feedback");
const list = document.querySelectorAll(".component--feedback .labels li");

console.log(components)

components.forEach(c => c.getElementsByClassName("close-btn")[0]
   .addEventListener("click", e => {
      e.preventDefault();
      c.classList.toggle("hide");
      // c.parentNode.removeChild(c);
   })
)

list.forEach(li => li.addEventListener('click', e => {
   const targetList = e.currentTarget.classList;
   if (targetList.contains("show")) {
      targetList.remove("show");
      e.currentTarget.parentNode.nextElementSibling.classList.remove("show-msg");
      e.currentTarget.querySelector("input").checked = false;
   } else {
      list.forEach(li => li.classList.remove("show"));
      targetList.add("show");
      e.currentTarget.parentNode.nextElementSibling.classList.add("show-msg");
      e.currentTarget.querySelector("input").checked = true;
   }
}))
