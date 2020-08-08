const ContactUs = (parent) => {
    const template = `
        <header>
            <h1>Stay In Touch</h1>
            <p>
                For table bookings, booking events and catering please contact us by sending an email in the form below.
            </p>
        </header>
        <div class="form-container">
            <div class="svg">
                <img src="./assets/img/contact.svg" alt="contact us illustration" />
            </div>
            <form>
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Name" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Send Email">
            </form>
        </div>`

    const container = document.createElement('DIV');
    container.classList.add('page-contact')
    container.insertAdjacentHTML('beforeend', template);

    parent.innerHTML = '';
    parent.appendChild(container);
}

export default ContactUs;