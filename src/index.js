import LoadPage from './LoadPage';
import Nav from './Nav';
import documentReady from './utilities/documentReadyCheck';

documentReady(() => {
    Nav(['home', 'meals', 'blog', 'contact us']);
    LoadPage();
})