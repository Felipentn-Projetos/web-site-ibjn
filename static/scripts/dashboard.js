// Fechar também ao apertar a tecla ESC
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") fecharImagem();
});



document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleBtn = document.getElementById('toggle-btn');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });
});



function expandirImagem(imgElement) {
    const overlay = document.getElementById("image-overlay");
    const expandedImg = document.getElementById("expanded-img");

    // Define a fonte da imagem grande como a mesma da clicada
    expandedImg.src = imgElement.src;

    // Mostra o overlay
    overlay.style.display = "flex";

    // Pequeno delay para o efeito de animação
    setTimeout(() => {
        expandedImg.style.transform = "scale(1)";
    }, 10);
}

function fecharImagem() {

    const overlay = document.getElementById("image-overlay");
    const expandedImg = document.getElementById("expanded-img");

    expandedImg.style.transform = "scale(0.9)";
    overlay.style.display = "none";
}


function toggleLike(element) {
    // Evita que o clique no botão de like também abra a imagem expandida
    event.stopPropagation();

    const countElement = element.querySelector('.like-count');
    let currentCount = parseInt(countElement.innerText);

    if (element.classList.contains('active')) {
        // Descurtir
        element.classList.remove('active');
        countElement.innerText = currentCount - 1;
        element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    } else {
        // Curtir
        element.classList.add('active');
        countElement.innerText = currentCount + 1;
        element.style.backgroundColor = "#ffe4e6"; // Fundo levemente rosado
    }
}

