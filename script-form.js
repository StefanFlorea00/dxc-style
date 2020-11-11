const formCompleted = localStorage.getItem("formComplete");
console.log("FORM:" + formCompleted);

function _DELETE_LOCALSTORAGE() {
  localStorage.clear();
}

//DB

const key = "5faad2ec863959728838520e";
const endpoint = "https://newdxc-e2c4.restdb.io/rest/contactdata";

_GET();

function _GET() {
  fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then(showData)
    .catch(function (error) {
      console.log("Request failed", error);
    });
}

function _POST(data) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      _GET(data);
    });
}

function showData(list) {
  console.log(list);
}

// FORM

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.elements.terms.value == "on") {
    form.elements.terms.value = true;
  }

  const formData = {
    first_name: form.elements.first_name.value,
    last_name: form.elements.last_name.value,
    tel: form.elements.tel.value,
    email: form.elements.email.value,
    company: form.elements.company.value,
    job: form.elements.job.value,
    country: form.elements.country.value,
    extra_info: form.elements.extra_info.value,
    terms: form.elements.terms.value,
  };

  console.log(form.elements.terms.value);
  console.log(formData);
  _POST(formData);

  document.querySelectorAll(".modal input").forEach((el) => (el.value = ""));
  document.querySelector(".modal input[type=submit]").value = "Submit";
  closeModal();

  localStorage.setItem("formComplete", "true");
});

// MODAL

const modalDiv = document.querySelector("#form-modal");

const modalClose = document.querySelector("#modal-close");
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", closeModalWindow);

const contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", openModal);

function closeModal() {
  modalDiv.classList.add("hidden");
}
function closeModalWindow(e) {
  if (e.target == modalDiv) {
    modalDiv.classList.add("hidden");
  }
}

function openModal() {
  modalDiv.classList.remove("hidden");
  console.log("aha");
}
