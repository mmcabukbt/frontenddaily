const copy_btns = document.querySelectorAll(".component--cdn-detail .items li button");

copy_btns.forEach(btn => btn.addEventListener('click', e => {
   navigator.clipboard.writeText(btn.previousElementSibling.textContent).then(
      () => {
         btn.classList.add('copied');
      },
      () => { //for errrrorr
      }
   )
}))
copy_btns.forEach(btn => btn.addEventListener('mouseleave', e => {
   btn.classList.remove('copied');
}))
// info popup için
// copy_btns.forEach(btn => btn.addEventListener('click', e => {
//    const info_comp = document.getElementsByClassName("info")[0];
//    navigator.clipboard.writeText(btn.previousElementSibling.textContent).then(
//       () => {
//          info_comp.classList.add('copied');
//          setTimeout(() => {
//             info_comp.classList.remove('copied');
//          }, 3000);
//       },
//       () => { //for errrrorr
//       }
//    )
// }))