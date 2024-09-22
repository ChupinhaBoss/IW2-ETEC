function redirecionar() {
    setTimeout(function() {
        window.location.href = "Formulario.html";
    }, 5000); // 5000 milissegundos = 5 segundos
    var segundos = document.getElementById("segundos")
    for(var i = 5; i <= 0; i--) {
        segundos = i.value;
    }
}

// Chama a função ao carregar a página
window.onload = redirecionar;