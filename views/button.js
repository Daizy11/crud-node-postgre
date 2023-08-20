const button = document.getElementById("btnSubmit");
const judul = document.getElementById("judul");
const penerbit = document.getElementById("penerbit");
const genre = document.getElementById("genre");
const harga = document.getElementById("harga");
const form = document.getElementById("form");
const row1 = document.getElementById("row1");
const btnDel1 = document.getElementById("btn-delete1");
const btnEdit1 = document.getElementById('btn-edit1')

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  let x = document.getElementById("no").value;
   x++;
  document.getElementById("no").value = x;
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  // if (x == 1) {
  //   document.getElementById(`td${i}-${j}`).textContent = 1;
  //   document.getElementById(`td${i}-${j}`).textContent = judul.value;
  //   document.getElementById(`td${i}-${j}`).textContent = penerbit.value;
  //   document.getElementById(`td${i}-${j}`).textContent = genre.value;
  //   tdHarga.textContent =parseInt(harga.value);
    
  //   if(isNaN(tdHarga)) {
  //     document.getElementById("demo").textContent = "Harga terdeteksi string"
  //   }
  //   btnDel1.removeAttribute("hidden");
  //   btnEdit1.removeAttribute("hidden");
   
  // }

  console.log(jsonData);
  await fetch("http://127.0.0.1:3010/api/v1/buku", {
    method: "POST", //perintah
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  
});
// button.addEventListener('click', async(e) => {
//   e.preventDefault() // Prevent form submission to avoid page reload
//   fetch("http://127.0.0.1:3010/api/v1/buku", {
//   method: "POST", //perintah
//   crossorigin: true,
//   mode: "no-cors",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body:JSON.stringify( {
//     judul: "req.body.judul",
//     penerbit: "req.body.penerbit",
//     harga: 5000,
//     genre: "req.body.genreBuku",
//   },)
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// });
// e.preventDefault(); // Prevent form submission to avoid page reload
// try{
//   const response = await fetch("http://127.0.0.1:3010/api/v1/buku", {
//     method: "POST",
//     crossorigin: true,
//     mode: "no-cors",
//   })
//   const result = await response.json()
//   console.log(result)
// }
// catch(err){
//   console.error(err)
// }
