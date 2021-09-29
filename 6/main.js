function copy(id) {
   document.getElementById(id).select();
   // document.execCommand('copy'); //depreceted 
   navigator.clipboard.writeText(document.getElementById(id).value).then(
      () => {
         // console.log("başarıyla kopyalandı");
         document.getElementById('popup-copy').classList.add('success');
         document.getElementById('popup-copy').innerText = '✓ Successfully copied! ';
         setTimeout(() => {
            document.getElementById('popup-copy').classList.remove('success');
         }, 2000);
      },
      () => {
         // console.error("HATAAAA!")
         document.getElementById('popup-copy').classList.add('error');
         document.getElementById('popup-copy').innerText = '✕ Could not copy! ';
         setTimeout(() => {
            document.getElementById('popup-copy').classList.remove('error');
         }, 2000);
      }
   );
}
// function error(id) {
//    document.getElementById('popup-copy').classList.add('error');
//    document.getElementById('popup-copy').innerText = '✕ Could not copy! ';
//    setTimeout(() => {
//       document.getElementById('popup-copy').classList.remove('error');
//    }, 2000);

// }