export default function createContact() {
    const content = document.getElementById('content');
    content.innerHTML = renderContact();
}

function renderContact() {
    return `
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Get in touch with us for reservations or any inquiries.</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email">

                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>`
}