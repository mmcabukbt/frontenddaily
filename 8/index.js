const hexlets = 'ABCDEF0123456789';
let colorPaletteNames = "";
const generateColor = () => {
   let color = '#';
   for (let i = 0; i <= 5; i++) {
      color += hexlets[Math.floor(Math.random() * hexlets.length)];
   }
   return color;
}

const generateColorPalette = () => {
   let ul_color_palette = document.getElementById("color-palette");
   ul_color_palette.innerHTML = '';
   colorPaletteNames = "";

   for (let i = 1; i <= 5; i++) {
      let color = generateColor();
      colorPaletteNames += color + "; "

      let t_li = document.createElement('li');
      t_li.addEventListener('click', (e) => {
         navigator.clipboard.writeText(color)
            .then(notification("&#x2713; Color <b>" + color + "</b> copied to your clipboard"));
         document.body.style.setProperty("background-color", color);
      })

      let t_spc = document.createElement('span');
      t_spc.className = "color";
      t_spc.style = "--color: " + color;

      let t_spt = document.createElement('span');
      t_spt.className = "text";
      t_spt.innerText = color;

      t_li.appendChild(t_spc);
      t_li.appendChild(t_spt);

      ul_color_palette.appendChild(t_li);
   }
}

const notification = (message) => {
   let div = document.createElement('div');
   div.className = "alert";
   div.innerHTML = message;
   document.body.appendChild(div);
   setTimeout(() => {
      div.classList.add('active');
   }, 1);

   setTimeout(() => {
      div.classList.remove('active');
   }, 2000);

   setTimeout(() => {
      document.body.removeChild(div);
   }, 3000);
}

window.addEventListener('keypress', (e) => {
   e.code === "Space" && generateColorPalette();
   e.code === "KeyC" && navigator.clipboard.writeText(colorPaletteNames)
      .then(notification("&#x2713; All Colors: <b>" + colorPaletteNames + "</b> copied to your clipboard"));

})
generateColorPalette();