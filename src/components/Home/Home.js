const Home = parent => {
    const template = `
            <h1>We eat green but not grass :)</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maxime. Unde nemo incidunt rerum
                accusantium voluptatem eaque. Amet aliquam obcaecati, natus repellendus fugit dolores quos ducimus unde
                tempora explicabo, quasi deserunt illum omnis reiciendis delectus.
            </p>
            <div class="call-to-action">
                <button>Bookings <i class="material-icons">check_circle</i></button> <button>Find Us <i class="material-icons">near_me</i></button>
            </div>
    `
    const container = document.createElement('DIV');
    container.classList.add('home-page-content');
    container.insertAdjacentHTML('beforeend', template);

    //empty the element and add current page content
    parent.innerHTML = '';
    parent.appendChild(container);
}

export default Home;