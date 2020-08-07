function documentReady(code) {
    let checkReadyState = setInterval(() => {
        if (document.readyState == 'complete') {
            clearInterval(checkReadyState);
            code();
        }
    }, 10);
}


export { documentReady };