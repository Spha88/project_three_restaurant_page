import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function LoadPage() {
    let container = document.getElementById('page-content');
    Home(container);
    Footer(container);

}

export default LoadPage;