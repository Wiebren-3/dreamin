document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const checkboxes = document.querySelectorAll('.nav input[type="checkbox"]');
    
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        checkboxes.forEach(function (checkbox) {
            const keywords = checkbox.getAttribute('keywords').toLowerCase();
            const parentDiv = checkbox.closest('div');

            if (keywords.includes(searchTerm)) {
                parentDiv.style.display = 'flex';
            } else {
                parentDiv.style.display = 'none';
            }
        });
    });
});
