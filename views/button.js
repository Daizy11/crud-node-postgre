const btnSubmit = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const inputPembayaran = document.getElementById("demo-2");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  let idVal = document.getElementById("id").value;

  const inputPicker = $("#demo-2").inputpicker({
    data: [
      {
        value: document.getElementById("id").value,
        text: document.getElementById("demo-2").value,
        description: "This is the description of the text 1.",
      },
      {
        value: document.getElementById("id").value,
        text: document.getElementById("demo-2").value,
        description: "This is the description of the text 1.",
      },
    ],
    fields: [
      { name: "value", text: "Id" },
      { name: "text", text: "Metode" },
    ],
    headShow: true,
    fieldText: "text",
    fieldValue: "value",
    filterOpen: true,
  });

  idVal++;
  document.getElementById("id").value = idVal;

  if (idVal > 1) {
    for (let i = 2; i <= idVal; i++) {
      const newItem = {
        value: i,
        text: document.getElementById("demo-2").value,
        description: `This is the description of the text ${i}.`,
      };
      inputPicker.push(newItem);
     
    }
  }
  else{
    console.error('Error adding data');
  }

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log(jsonData);

  await fetch("http://127.0.0.1:3000/api/metodeBayar", {
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
