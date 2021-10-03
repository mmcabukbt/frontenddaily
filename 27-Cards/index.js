const handleTags = () => {
   const tags = document.getElementById("tags");
   const tagInput = tags.lastElementChild;

   let tagsArray = tags.dataset.defaultTags.split(",") || [];

   const error = (msg) => {
      tags.dataset.message = msg;
      tags.classList.add("error");
      setTimeout(() => {
         tags.classList.remove("error")
      }, 2000);
   }
   const addTag = (intTag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.innerText = intTag;

      const button = document.createElement("button");
      button.innerText = "X"
      button.addEventListener("click", e => {
         span.remove();
         tagsArray = tagsArray.filter(tagA => tagA !== intTag)
      })
      span.appendChild(button);

      tags.insertBefore(span, tags.firstChild);
      tagsArray.push(intTag);
   }

   tagsArray.forEach(tag => addTag(tag));

   tagInput.addEventListener("keyup", e => {
      if (e.key === "Enter") {
         const entTag = e.currentTarget.value.trim();

         if (!entTag) { error("Please enter a valid tag!"); return; }

         // tagsArray.forEach(tagA => { func in func > return 1. func dışına çıkamıyor
         for (tagA in tagsArray) {
            // if (entTag.equals(tagsArray[tagA])) {
            if (entTag.localeCompare(tagsArray[tagA]) === 0) { //yerel dil destekli tam karşılaştırma
               error(`"${entTag}" has already been added!`);
               // alert(`"${entTag}" has already been added!`);
               return;
            }
         }
         addTag(entTag);
         e.currentTarget.value = "";
      }
   })
}

handleTags();