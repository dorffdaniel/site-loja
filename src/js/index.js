let novoCadastro = [];

let scrollContainer = document.querySelector(".galeria")

let backBtn = document.getElementById("backBtn")

let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltay;
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})

let hamburguer = document.querySelector('.hamburguer');
let navList = document.querySelector('.nav-list');
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativo');
    navList.classList.toggle('ativado');
})


function mostrarMapa() {

    $('#modalLocalizacao').modal('show')

    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);


    marker.bindPopup("<b>Londres</b><br>Estamos em londres.").openPopup();
}

mostrarMapa();


function mostrarRegistro() {
    $('#modalRegistro').modal('show');


}

function registrarNovaConta() {

    let nome = $('#nomeCad').val().trim();
    let email = $('#emailCad').val().trim();
    let senha = $('#senhaCad').val().trim();

    if (nome !== '' && email !== '' && senha !== '') {
        if (veri( $('#emailCad').val() )) {

            novoCadastro.push(new Cadastros(nome, email, senha))
            alerta("Registrado", "Registrado com sucesso", "success");
           

        } else {
            alerta("Erro", "Email ja cadastrado", "error");

        }

    } else {
        alerta("Erro", "preencha os campos", "error");
    }

}





















function veri(valor) {
    let flag = true

    novoCadastro.forEach(e => {
        if (e.email == valor) {
            flag = false
        }
    })

    return flag;
}








function alerta(msg, titulo, icon) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: titulo,
        text: msg,
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `
        }
    });
}