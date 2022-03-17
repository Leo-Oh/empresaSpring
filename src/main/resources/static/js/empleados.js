const API_URL = "http://localhost:8080/api";

function saveEmpleado() {
  let id_Emp = document.getElementById("inp_id").value,
  name_Emp = document.getElementById("inp_name").value,
  address_Emp = document.getElementById("inp_address").value,
  telephone_Emp = document.getElementById("inp_telephone").value;

  let data = {
    id: Number(id_Emp),
    nombre: String(name_Emp),
    direccion: String(address_Emp),
    telefono: String(telephone_Emp)
  };
  
  console.log(JSON.stringify(data));

  fetch(`${API_URL}/empleado`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((empleado) => {
      console.log("Empleado", empleado);
    });
}

function updateEmpleado() {
  let id_Emp = document.getElementById("inp_id").value,
  name_Emp = document.getElementById("inp_name").value,
  address_Emp = document.getElementById("inp_address").value,
  telephone_Emp = document.getElementById("inp_telephone").value;

  let data = {
    id: Number(id_Emp),
    nombre: String(name_Emp),
    direccion: String(address_Emp),
    telefono: String(telephone_Emp)
  };

  console.log(JSON.stringify(data));

  fetch(`${API_URL}/empleado`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((empleado) => {
      console.log("Empleado", empleado);
    });
}

function deleteEmpleado() {
  let id_Emp = document.getElementById("inp_id").value;

  fetch(`${API_URL}/empleado/${id_Emp}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((empleado) => {
    console.log("Empleado", empleado);
  });
}

function findEmpleados() {
  fetch(`${API_URL}/empleados`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((empleado) => {
      console.log("Empleado", empleado);

      const $tbody_data = document.querySelector("#tbody_data");
      $tbody_data.innerHTML = "";

      empleado.forEach((element) => {
        const $tr = document.createElement("tr");
        document.getElementById("tbody_data").appendChild($tr);

        const $th_id = document.createElement("th");
        $th_id.textContent = element["id"];
        $tr.appendChild($th_id);

        const $td_name = document.createElement("td");
        $td_name.textContent = element["nombre"];
        $tr.appendChild($td_name);

        const $td_address = document.createElement("td");
        $td_address.textContent = element["direccion"];
        $tr.appendChild($td_address);

        const $td_telephone = document.createElement("td");
        $td_telephone.textContent = element["telefono"];
        $tr.appendChild($td_telephone);

      });
    });
}

function findEmpleadoById() {
  let id_Emp = document.getElementById("inp_id").value;
  

  fetch(`${API_URL}/empleado/${id_Emp}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((empleado) => {
      console.log("Empleado", empleado);

      const $tbody_data = document.querySelector("#tbody_data");
      $tbody_data.innerHTML = "";

      const $tr = document.createElement("tr");
      document.getElementById("tbody_data").appendChild($tr);

      const $th_id = document.createElement("th");
      $th_id.textContent = empleado["id"];
      $tr.appendChild($th_id);

      const $td_name = document.createElement("td");
      $td_name.textContent = empleado["nombre"];
      $tr.appendChild($td_name);

      const $td_address = document.createElement("td");
      $td_address.textContent = empleado["direccion"];
      $tr.appendChild($td_address);

      const $td_telephone = document.createElement("td");
      $td_telephone.textContent = empleado["telefono"];
      $tr.appendChild($td_telephone);
    });
}
