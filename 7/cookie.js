const delayCookie = (id, minutes) => {
   document.getElementById(id).classList.remove('show');
   setTimeout(() => {
      showCookieBanner(id)
   }, minutes * 1000);
}
const setCookie = (name, value, days) => {
   var date = new Date(Date.now());
   date.setDate(date.getDate() + days);
   document.cookie = name + '=' + value + '; expires=' + date.toUTCString();
   document.getElementById(name).classList.remove('show');
}
// setCookie('dene1', '54k5j4kj54', 4)
// setCookie('dene2', '43434343243kj54', 7)
// setCookie('dene3', '010101001010010', 1)

const getCookie = (name) => {
   return document.cookie
      .split('; ')
      .find(cks => cks.startsWith(name + '='))
      ?.split('=')[1];
   // console.log(cookies);
   // return cookies[1];
}

const showCookieBanner = (id) => {
   if (!getCookie(id)) {
      document.getElementById(id).classList.add('show');
   }
   console.log('çalıştı')
}

showCookieBanner('cookie1');