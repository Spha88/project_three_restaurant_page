import Meals from "./Meals";
import LandingContent from './LandingContent';
import Blog from './Blog';
import Contact from "./ContactUs";

function makeActive(activeNavItem) {
    let allNavItems = activeNavItem.parentElement.children;
    // Remove the active class on all nav items
    for (let i = 0; i < allNavItems.length; i++) {
        allNavItems[i].classList.remove('active');
    }
    // Add active class on current/clicked nav item;
    activeNavItem.classList.add('active');
}

export default function Router(page, dom, event) {
    let container = dom.getElementById('content').lastElementChild;

    makeActive(event.target);

    switch (page) {
        case 'home':
            container.innerHTML = LandingContent;
            return;
        case 'meals':
            container.innerHTML = Meals;
            return;
        case 'blog':
            container.innerHTML = Blog;
            return;
        case 'contact us':
            container.innerHTML = Contact;
            return;
        default:
            return console.lo('Go to home page');
    }
}