import LandingContent from './LandingContent';

function LoadPage() {
    let container = document.getElementById('content');
    container.insertAdjacentHTML('beforeend', LandingContent);
}

export default LoadPage;