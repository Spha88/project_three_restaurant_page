import Meals from "./components/Meals/Meals";
import LandingContent from './LandingContent';
import Blog from './components/Blog/Blog';
import Contact from "./ContactUs";
import makeActive from './utilities/makeActive';



export default function Router(page, dom, event) {
    let container = dom.getElementById('content').lastElementChild;

    makeActive(event, dom);

    switch (page) {
        case 'home':
            container.innerHTML = LandingContent;
            return;
        case 'meals':
            Meals(container, dom);
            return;
        case 'blog':
            Blog(container, dom);
            return;
        case 'contact us':
            container.innerHTML = Contact;
            return;
        default:
            return console.lo('Go to home page');
    }
}