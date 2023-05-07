// o'zgaruvchi va konstantalarni e'lon qilmiz

const keyword = document.getElementById("key");
const search = document.getElementById("search");
let URL = "https://restcountries.com/v3.1/name/";

// API'dan datani fetch qilish uchun funksiya

const getData = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

//  button'ga murojaat qilish uchun addEventListener'dan foydalanmiz - Document object model

search.addEventListener("click", async function () {
  const data = await getData(URL + keyword.value);
  console.log(data);
  document.getElementById("result").innerHTML = `
    <div class="text-center my-3">
      <img src="${data[0].flags.svg}" class="text-center w-25 border border-dark">
    </div>
    <h4 class="text-center">${data[0].name.official}</h4>
    <p class="text-center">${data[0].subregion}</p>
    <p class="text-center">Capital: ${data[0].capital}</p>
    <p class="text-center">Capital: ${data[0].population}</p>
    <p class="text-center">Time zone: ${data[0].timezones}</p>

  
  `;
});
