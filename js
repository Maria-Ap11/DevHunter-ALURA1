document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contentBoxes = document.querySelectorAll('.content-box');

    // Function to filter content boxes
    const filterContent = (category) => {
        contentBoxes.forEach(box => {
            if (category === 'Todos' || box.dataset.category === category) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    };

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent;
            filterContent(category);
        });
    });

    // Add event listener to search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        contentBoxes.forEach(box => {
            const text = box.textContent.toLowerCase();
            if (text.includes(query)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

//a ia ajudou reescrevendo meu js (sinto muito, perdi o VSC e tive que usar o JSFiddler so pra n perder a chance de postar o projeto) fiquei com medo do js ser obrigatorio, caso não for, por favor não considere ele!
ceus, isso n é de Deus nn
