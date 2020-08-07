// let Nav = `<nav class="nav">
//                 <div class="logo">Eatlicious</div>
//                 <ul class="nav-items">
//                     <li class="nav-item">Home</li>
//                     <li class="nav-item">Meals</li>
//                     <li class="nav-item">Contact Us</li>
//                 </ul>
//             </nav>`

function Nav(dom, navItemList) {
    let container = dom.getElementById('content');
    // Create nav
    let nav = dom.createElement('nav');
    nav.classList.add('nav');

    // Create logo div
    let logo = dom.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Eatilicious';
    nav.appendChild(logo); // add logo to nav

    // Create menu items
    let list = dom.createElement('ul');
    list.classList.add('nav-items');
    nav.appendChild(list); // add list to nav

    if (navItemList) {
        navItemList.forEach(item => {
            let li = dom.createElement('li');
            let textNode = dom.createTextNode(item);

            li.classList.add('nav-item');
            li.appendChild(textNode);

            li.addEventListener('click', (li, e) => {
                console.log(li, e);
            })
            list.appendChild(li);
        });
    }

    container.appendChild(nav);
}

export default Nav;