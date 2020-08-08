import Router from './Router';

function Nav(navItemList) {
    let container = document.getElementById('content');
    // Create nav
    let nav = document.createElement('nav');
    nav.classList.add('nav');

    // Create logo div
    let logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Eatilicious';
    logo.addEventListener('click', e => Router('home'))
    nav.appendChild(logo); // add logo to nav

    // Create menu items
    let list = document.createElement('ul');
    list.classList.add('nav-items');
    nav.appendChild(list); // add list to nav

    // create li's from the nav items array and add them to ul
    if (navItemList) {
        navItemList.forEach((item, index) => {
            let li = document.createElement('li');
            let textNode = document.createTextNode(item);

            // add active class to the first item - which is home
            index == 0 && li.classList.add('active');

            li.classList.add('nav-item');
            li.appendChild(textNode);

            li.addEventListener('click', e => Router(item, event));
            list.appendChild(li);
        });
    }

    container.appendChild(nav);

    // this is just a background at the top of the page covering the entire
    // screen before scrolling
    let contentBackground = document.createElement('div');
    contentBackground.classList.add('content-background');

    let gradientOverlay = document.createElement('div');
    contentBackground.appendChild(gradientOverlay);

    container.appendChild(contentBackground);

    // the different page content will be displayed in this element
    let contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'page-content')
    container.appendChild(contentContainer);
}

export default Nav;