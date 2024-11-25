let index = 0;

function moverGaleria(direcao) {
    const galeria = document.querySelector('.galeria-container');
    const imagens = document.querySelectorAll('.galeria-container img');
    const largura = imagens[0].offsetWidth + 16; // Largura da imagem + margem (gap)
    const total = imagens.length;

    // Remove classe "active" de todas as imagens
    imagens.forEach(img => img.classList.remove('active'));

    index += direcao;

    // Garantir que o índice não ultrapasse os limites
    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    // Adicionar classe "active" à imagem atual
    imagens[index].classList.add('active');

    // Mover a galeria
    galeria.style.transform = `translateX(${-index * largura}px)`;
}