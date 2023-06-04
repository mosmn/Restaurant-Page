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

const navBar = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const navItems = document.createElement('ul');
    navItems.classList.add('navItems');

    const menu = document.createElement('li');
    menu.classList.add('menu');
    menu.textContent = 'Menu';

    const contact = document.createElement('li');
    contact.classList.add('contact');
    contact.textContent = 'Contact';

    navItems.appendChild(menu);
    navItems.appendChild(contact);

    navBar.appendChild(navItems);

    return navBar;
}


const header = () => {
    const header = document.createElement('div');
    header.classList.add('header-bar');

    header.appendChild(logoImg());
    header.appendChild(navBar());
    return header;
}

content.appendChild(header());

const name = () => {
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = 'Opulent Cuisine';

    const subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Immerse yourself in an atmosphere of opulence and elegance as you savor our exquisite creations.';

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('nameContainer');

    nameContainer.appendChild(name);
    nameContainer.appendChild(subtitle);

    return nameContainer;
}

const img1Pic = () => {
    const img1Pic = document.createElement('img');
    img1Pic.src = img1;
    img1Pic.classList.add('img1');

    return img1Pic;
}

const img2Pic = () => {

    const img2Pic = document.createElement('img');
    img2Pic.src = img2;
    img2Pic.classList.add('img2');

    return img2Pic;
}

content.appendChild(name());
content.appendChild(img1Pic());
content.appendChild(img2Pic());
    
const about = () => {
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutText = document.createElement('p');
    aboutText.classList.add('aboutText');
    aboutText.textContent = 'Opulent Cuisine is a fine dining restaurant located in the heart of the city. We offer a wide variety of dishes, ranging from traditional to modern cuisine. Our chefs are experts in their field and will make sure that you have an unforgettable experience. Come visit us today!';

    about.appendChild(aboutText);

    return about;
}

content.appendChild(about());

const footer = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.classList.add('footerText');
    footerText.textContent = '© 2021 Opulent Cuisine';

    footer.appendChild(footerText);

    return footer;
}

content.appendChild(footer());


