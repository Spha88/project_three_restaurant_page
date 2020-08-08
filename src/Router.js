import Meals from "./components/Meals/Meals";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import makeActive from './utilities/makeActive';



export default function Router(page, event) {
    let container = document.getElementById('content').lastElementChild;

    makeActive(event);

    switch (page) {
        case 'home':
            Home(container)
            return;
        case 'meals':
            Meals(container);
            return;
        case 'blog':
            Blog(container);
            return;
        case 'contact us':
            ContactUs(container);
            return;
        default:
            Home(container)
            return
    }
}