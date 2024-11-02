function mascara_telefone() {
    var tel = document.getElementById("phonenumber").value
    console.log(tel)
    tel = tel.slice(0, 15)
    console.log(tel)
    document.getElementById("phonenumber").value = tel

    var tel_for = document.getElementById("phonenumber").value
    if (tel_for[0] != "(") {
        if (tel_for[0] != undefined) {
            document.getElementById("phonenumber").value = "(" + tel_for[0];
        }
    }


    if (tel_for[3] != ")") {
        if (tel_for[3] != undefined) {
            document.getElementById("phonenumber").value = tel_for.slice(0, 3) + ")" + " " + tel_for[3]
        }
    }

    if (tel_for[9] != "-") {
        if (tel_for[9] != undefined) {
            document.getElementById("phonenumber").value = tel_for.slice(0, 9) + "-" + tel_for[9]
        }
    }
}

const toggleModeButton = document.getElementById("toggleModeButton");
const body = document.body;


function toggleTheme() {
    console.log("Botão pressionado!");
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
    else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

toggleModeButton.addEventListener("click", toggleTheme);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


