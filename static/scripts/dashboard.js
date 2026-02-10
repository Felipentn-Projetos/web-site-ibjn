
// Sidebar Logic
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');

    const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    if (openBtn) openBtn.onclick = toggleSidebar;
    if (closeBtn) closeBtn.onclick = toggleSidebar;
    if (overlay) overlay.onclick = toggleSidebar;
});

// Lightbox Logic
function expandirImagem(imgElement) {
    const overlay = document.getElementById("image-overlay");
    const expandedImg = document.getElementById("expanded-img");
    expandedImg.src = imgElement.src;
    overlay.style.display = "flex";
    setTimeout(() => { expandedImg.style.transform = "scale(1)"; }, 10);
}

function fecharImagem() {
    const overlay = document.getElementById("image-overlay");
    const expandedImg = document.getElementById("expanded-img");
    expandedImg.style.transform = "scale(0.9)";
    overlay.style.display = "none";
}

// Like Logic
function toggleLike(event, element) {
    event.stopPropagation(); // Impede de abrir a imagem ao curtir
    const countElement = element.querySelector('.like-count');
    let currentCount = parseInt(countElement.innerText);

    if (element.classList.contains('active')) {
        element.classList.remove('active');
        countElement.innerText = currentCount - 1;
    } else {
        element.classList.add('active');
        countElement.innerText = currentCount + 1;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") fecharImagem();
});