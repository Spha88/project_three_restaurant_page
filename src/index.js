import LoadPage from './LoadPage';
import Nav from './Nav';
import { documentReady } from './utilities';

documentReady(() => {
    Nav(document, ['home', 'meals', 'blog', 'contact us']);
    LoadPage();
})