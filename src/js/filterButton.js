
    function filterDog() {
        var dog = document.querySelectorAll('#fotos #lulu');
        dog.forEach(lulu => {
            lulu.style.display = 'none';
        })
    }