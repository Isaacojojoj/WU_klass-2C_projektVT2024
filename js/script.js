const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')


function toggleMenu() {

    document.getElementById('link_list').classList.toggle('links_visible')
    document.getElementById('burger').classList.toggle('burger_in_x_form')
}

document.getElementById('burger').addEventListener('click',toggleMenu)



// hamburgermeny
function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

