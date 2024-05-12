const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const windChill = document.querySelector('#windChill');

const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Akanimo Ephraim Ebong | Calabar, Nigeria`;
modifiedDate.innerHTML = `Last Modification: ${today}`;
