import Home from './components/Home/Home';

function LoadPage() {
    let container = document.getElementById('page-content');
    Home(container);
    // container.insertAdjacentHTML('beforeend', LandingContent);
}

export default LoadPage;