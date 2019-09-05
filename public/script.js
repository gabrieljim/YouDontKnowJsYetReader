window.onload = function() {
    let xhr = new XMLHttpRequest;
    let elements = document.getElementsByClassName("sbutton");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById("sidebar").classList.add("scrolledLeft");
            document.getElementById("hamburger-menu").classList.add("visible");
            let content = document.getElementById("content");
            content.innerHTML = "Fetching chapter..."
            const url = JSON.stringify({
                'url':e.target.href
            })

            xhr.open('POST', 'http://localhost:3000', true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

            xhr.onload = function (){
               if (this.status === 200) {
                   content.innerHTML = this.response;
               } 
            }
            xhr.send(url);
        })
    }
    let menu = document.getElementById("hamburger-menu");
    menu.addEventListener('click', () => {
        menu.classList.remove("visible")
        document.getElementById("sidebar").classList.remove("scrolledLeft")
    });
}