import Router from './Router';

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

            li.addEventListener('click', () => Router(item, dom));
            list.appendChild(li);
        });
    }

    container.appendChild(nav);

    // this is just a background at the top of the page covering the entire
    // screen before scrolling
    let contentBackground = dom.createElement('div');
    contentBackground.classList.add('content-background');
    let gradientOverlay = dom.createElement('div');
    contentBackground.appendChild(gradientOverlay);
    container.appendChild(contentBackground);

    // this different page content will be displayed in this element
    let contentContainer = dom.createElement('div');
    contentContainer.setAttribute('id', 'page-content')
    container.appendChild(contentContainer);
}

export default Nav;