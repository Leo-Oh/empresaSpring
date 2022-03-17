const API_URL = "http://localhost:8080/api";

function saveDepartamento() {
  let id_Dep = document.getElementById("inp_id").value,
  name_Dep = document.getElementById("inp_name").value;

  let data = {
    id: Number(id_Dep),
    nombre: String(name_Dep),
  };
  
  console.log(JSON.stringify(data));

  fetch(`${API_URL}/departamento`, {
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
    .then((departamento) => {
      console.log("Departamento", departamento);
    });
}

function updateDepartamento() {
  let id_Dep = document.getElementById("inp_id").value,
  name_Dep = document.getElementById("inp_name").value;

  let data = {
    id: Number(id_Dep),
    nombre: String(name_Dep),
  };

  console.log(JSON.stringify(data));

  fetch(`${API_URL}/departamento`, {
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
    .then((departamento) => {
      console.log("Departamento", departamento);
    });
}

function deleteDepartamento() {
  let id_Dep = document.getElementById("inp_id").value;

  fetch(`${API_URL}/departamento/${id_Dep}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((departamento) => {
    console.log("Departamento", departamento);
  });
}

function findDepartamentos() {
  fetch(`${API_URL}/departamentos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((departamento) => {
      console.log("Departamento", departamento);

      const $tbody_data = document.querySelector("#tbody_data");
      $tbody_data.innerHTML = "";

      departamento.forEach((element) => {
        const $tr = document.createElement("tr");
        document.getElementById("tbody_data").appendChild($tr);

        const $th_id = document.createElement("th");
        $th_id.textContent = element["id"];
        $tr.appendChild($th_id);

        const $td_name = document.createElement("td");
        $td_name.textContent = element["nombre"];
        $tr.appendChild($td_name);

      });
    });
}

function findDepartamentoById() {
  let id_Dep = document.getElementById("inp_id").value;
  

  fetch(`${API_URL}/departamento/${id_Dep}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    })
    .then((departamento) => {
      console.log("Departamento", departamento);

      const $tbody_data = document.querySelector("#tbody_data");
      $tbody_data.innerHTML = "";

      const $tr = document.createElement("tr");
      document.getElementById("tbody_data").appendChild($tr);

      const $th_id = document.createElement("th");
      $th_id.textContent = departamento["id"];
      $tr.appendChild($th_id);

      const $td_name = document.createElement("td");
      $td_name.textContent = departamento["nombre"];
      $tr.appendChild($td_name);

    });
}
