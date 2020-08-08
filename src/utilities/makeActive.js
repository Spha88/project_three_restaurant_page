// This highlights the active item in the nav menu

function makeActive(event, dom) {
    if (event) {
        let activeNavItem = event.target;
        let allNavItems = activeNavItem.parentElement.children;
        // Remove the active class on all nav items
        for (let i = 0; i < allNavItems.length; i++) {
            allNavItems[i].classList.remove('active');
        }
        // Add active class on current/clicked nav item;
        activeNavItem.classList.add('active');
    } else {
        //THIS CODE HANDLES CLICK TO THE LOGO;
        //select all nav items
        let navItems = dom.querySelectorAll('.nav-item');

        // Remove the active class on all nav items
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }

        // add .active to the first item which should be home
        navItems[0].classList.add('active');
    }
}

export default makeActive;