const bindAccordionItem = () => {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
};

// tabs
window.addEventListener('DOMContentLoaded', () => {
    const links = [...document.querySelectorAll('.menu_toglle a')];
    const wrapper = document.querySelector('#swup');
    links.map(link => {
        const target = link.getAttribute('href');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(target)
                .then(body => body.text())
                .then((response) => {
                    wrapper.innerHTML = response;
                })
                .then(() => {bindAccordionItem()});
        })
    })

  


})

