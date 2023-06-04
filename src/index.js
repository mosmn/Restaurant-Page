import './style.css';
import img1 from './img1.png';
import img2 from './img2.png';
import logo from './logo.png';


const content = document.createElement('div');
content.classList.add('content', 'home');
document.body.appendChild(content);

// const navBar = document.createElement('div');
// navBar.classList.add('navBar');

// const navItems = document.createElement('ul');
// navItems.classList.add('navItems');

// const logo = document.createElement('img');
// logo.src = './images/logo.png';
// logo.classList.add('logo');

// const menu = document.createElement('li');
// menu.classList.add('menu');
// menu.textContent = 'Menu';

// const contact = document.createElement('li');
// contact.classList.add('contact');
// contact.textContent = 'Contact';

// const home = document.createElement('li');
// home.classList.add('home');
// home.textContent = 'Home';

// const main = document.createElement('div');
// main.classList.add('main');

// const title = document.createElement('h1');
// title.classList.add('title');
// title.textContent = 'Opulent Cuisine';

// const subtitle = document.createElement('h2');
// subtitle.classList.add('subtitle');
// subtitle.textContent = 'The best food in town';

// const image = document.createElement('img');
// image.src = './images/food.jpg';
// image.classList.add('image');

// const footer = document.createElement('div');
// footer.classList.add('footer');

// const footerText = document.createElement('p');
// footerText.classList.add('footerText');
// footerText.textContent = '© 2021 Opulent Cuisine';

const logoImg = () => {
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.classList.add('logo');

    return logoImg;
}

const header = () => {
    const header = document.createElement('div');
    header.classList.add('header-bar');

    header.appendChild(logoImg());
    return header;
}

content.appendChild(header());
    



