import Meals from "./Meals";
import LandingContent from './LandingContent';
import Blog from './Blog';
import Contact from "./ContactUs";

export default function Router(page, dom) {
    let container = dom.getElementById('content').lastElementChild;
    console.log(page);
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