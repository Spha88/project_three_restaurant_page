import Meals from "./Meals";
import LandingContent from './LandingContent';
import Blog from './Blog';

export default function Router(page, dom) {
    let container = dom.getElementById('content').lastElementChild;
    switch (page) {
        case 'home':
            container.innerHTML = LandingContent;
            return;
        case 'meals':
            container.innerHTML = Meals;
            return;
        case 'blog':
            container.innerHTML = Blog;
        default:
            return console.lo('Go to home page');
    }
}