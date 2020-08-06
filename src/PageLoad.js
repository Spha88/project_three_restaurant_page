let homePage = `
<div class="home-page">
    <div class="home-page-content">
        <h1>The best Restaurant in Town</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maxime. Unde nemo incidunt rerum
            accusantium voluptatem eaque. Amet aliquam obcaecati, natus repellendus fugit dolores quos ducimus unde
            tempora explicabo, quasi deserunt illum omnis reiciendis delectus.
        </p>
    </div>
</div>
`

let loading = `
<div class="home-page">
    <div class="home-page-content">
        <h1>Loading ...</h1>
    </div>
</div>
`

function PageLoad(selector) {
    let containerDiv = document.getElementById(selector);

    containerDiv.insertAdjacentHTML('beforeend', loading);

    let readyStateCheckInterval = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            setTimeout(() => {
                containerDiv.innerHTML = '';
                containerDiv.insertAdjacentHTML('beforeend', homePage);
            }, 1000)
        }
    }, 10);
}

export default PageLoad;