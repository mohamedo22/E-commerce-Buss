window.addEventListener('scroll', function() {
    if (window.scrollY > 5) {
        let header = document.querySelector('header');
        header.style.top = "-4rem";
        
        let detailsContainers = document.getElementsByClassName('details');
        for (let detailsContainer of detailsContainers) {
            detailsContainer.style.top = "2rem";
        }
    } else {
        let header = document.querySelector('header');
        header.style.top = "";
        
        let detailsContainers = document.getElementsByClassName('details');
        for (let detailsContainer of detailsContainers) {
            detailsContainer.style.top = "";
        }
    }
});
