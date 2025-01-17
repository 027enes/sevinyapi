addEventListener('DOMContentLoaded', () => {


    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        if (this.value.length > 1) {
            searchResults.classList.remove('hidden');
            requestAnimationFrame(() => {
                searchResults.classList.remove('scale-y-0', 'opacity-0');
            });
        } else {
            searchResults.classList.add('scale-y-0', 'opacity-0');
            setTimeout(() => {
                searchResults.classList.add('hidden');
            }, 300);
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.classList.add('scale-y-0', 'opacity-0');
            setTimeout(() => {
                searchResults.classList.add('hidden');
            }, 300);
        }
    });

    const catalogTrigger = document.getElementById('catalogTrigger');
    const catalogDropdown = document.getElementById('catalogDropdown');

    catalogTrigger.addEventListener('click', function() {
        if (catalogDropdown.classList.contains('hidden')) {
            catalogDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                catalogDropdown.classList.remove('scale-y-0', 'opacity-0');
            });
        } else {
            catalogDropdown.classList.add('scale-y-0', 'opacity-0');
            setTimeout(() => {
                catalogDropdown.classList.add('hidden');
            }, 300);
        }
    });

    document.addEventListener('click', function(event) {
        if (!catalogTrigger.contains(event.target) && !catalogDropdown.contains(event.target)) {
            catalogDropdown.classList.add('scale-y-0', 'opacity-0');
            setTimeout(() => {
                catalogDropdown.classList.add('hidden');
            }, 300);
        }
    });

    const hamburger = document.querySelector('.hamburger input');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    let scrollPosition = 0;

    document.getElementById('hamburger').addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            menuOverlay.style.display = 'none';
            document.body.style.position = '';
            document.body.style.overflow = '';
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        } else {
            scrollPosition = window.pageYOffset;
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            menuOverlay.style.display = 'block';
            document.body.style.position = 'fixed';
            document.body.style.overflow = 'hidden';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        }
    });

    menuOverlay.addEventListener('click', function() {
        hamburger.checked = false;
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        menuOverlay.style.display = 'none';
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
    });

    hamburger.addEventListener('change', function() {
        if (this.checked) {
            scrollPosition = window.pageYOffset;
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            menuOverlay.style.display = 'block';
            document.body.style.position = 'fixed';
            document.body.style.overflow = 'hidden';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        } else {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            menuOverlay.style.display = 'none';
            document.body.style.position = '';
            document.body.style.overflow = '';
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }
    });



    
});
