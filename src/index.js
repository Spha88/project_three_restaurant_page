import PageLoad from './PageLoad';

var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        console.log(document.readyState);
        clearInterval(readyStateCheckInterval);
        PageLoad('content')
    }
}, 10);

console.log(document.readyState);

