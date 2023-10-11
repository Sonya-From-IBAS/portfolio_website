function toggleTheme() {
    const themeToggler = document.querySelector('.theme-toggler');
    const togglerBall = document.querySelector('.theme-toggler__ball');
    const social = document.querySelectorAll('.social i');
    const theme = document.querySelector('.theme');
    themeToggler.addEventListener('click', () => {
        console.log('click');
        if (theme.classList.contains('light')) {
            theme.classList.replace('light', 'dark');
            togglerBall.classList.toggle('right');
            social.forEach((i) => i.classList.toggle('color'));
        } else {
            social.forEach((i) => i.classList.toggle('color'));
            theme.classList.replace('dark', 'light');
            togglerBall.classList.toggle('right');
        }
    });
}

async function contact() {
    const btn = document.querySelector('.submit');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        Email.send({
            SecureToken: 'ab073c24-c8e0-4d69-bf2c-72111fc23345',
            To: 'LeonidPakhomov2003@yandex.ru',
            From: 'Anevskyi2018@yandex.ru',
            Subject: 'contact message',
            Body: `email: ${email}; name: ${name}; message: ${message}`,
        }).then(mes => document.querySelector('.form').reset());

    });
}

function main() {
    try {
        toggleTheme();
        contact();
        const sr = ScrollReveal({
            distance: '35px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.portfolio-image', { delay: 210, origin: 'left' });
        sr.reveal('.portfolio-text h1', { delay: 310, origin: 'top' });
        sr.reveal('.portfolio-text h4', { delay: 410, origin: 'right' });
        sr.reveal('.social', { delay: 210, origin: 'bottom' });
        sr.reveal('.button', { delay: 410, origin: 'top' });
        sr.reveal('.row', { delay: 410, origin: 'left' });
    } catch (e) {
        console.log(e);
    }
}
main();
