const Footer = pageContent => {
    const template = `
            <div>
                <a href="http://www.netslate.co.za">Website by Spha</a><br />
                <a href="https://www.theodinproject.com/courses/javascript/lessons/restaurant-page">Inspired by The Odin
                    Project <br /> <img src="./assets/img/odin_logo.svg" alt="The odin project logo"></a>
            </div>
        `
    const footer = document.createElement('FOOTER');
    footer.classList.add('web-footer');
    footer.insertAdjacentHTML('beforeend', template);

    pageContent.insertAdjacentElement('afterend', footer);
}

export default Footer;