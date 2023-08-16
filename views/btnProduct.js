const btnSubmit = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const inputPembayaran = document.getElementById("demo-2");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  let idVal = document.getElementById("id").value;
  // formData.delete("inputpicker-1");
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  console.log(jsonData); //1

  idVal++;
  document.getElementById("id").value = idVal;

  await fetch("http://127.0.0.1:3000/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
