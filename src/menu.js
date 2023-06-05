import './style.css';
import {header, footer} from './index.js';

const menuPage = () => {
    const content = document.querySelector('.content');

    content.appendChild(header());
    const menu = document.createElement('div');
    menu.classList.add('menuContainer');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item', 'chicken');

    const menuItem1Title = document.createElement('h2');
    menuItem1Title.classList.add('menu-item-title');
    menuItem1Title.textContent = 'Chicken';

    const menuItem1Desc = document.createElement('p');
    menuItem1Desc.classList.add('menu-item-desc');
    menuItem1Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem1Price = document.createElement('p');
    menuItem1Price.classList.add('menu-item-price');
    menuItem1Price.textContent = '$100';

    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Desc);
    menuItem1.appendChild(menuItem1Price);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item', 'beef');

    const menuItem2Title = document.createElement('h2');
    menuItem2Title.classList.add('menu-item-title');
    menuItem2Title.textContent = 'Beef';

    const menuItem2Desc = document.createElement('p');
    menuItem2Desc.classList.add('menu-item-desc');
    menuItem2Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem2Price = document.createElement('p');
    menuItem2Price.classList.add('menu-item-price');
    menuItem2Price.textContent = '$150';

    menuItem2.appendChild(menuItem2Title);
    menuItem2.appendChild(menuItem2Desc);
    menuItem2.appendChild(menuItem2Price);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item', 'pork');

    const menuItem3Title = document.createElement('h2');
    menuItem3Title.classList.add('menu-item-title');
    menuItem3Title.textContent = 'Pork';

    const menuItem3Desc = document.createElement('p');
    menuItem3Desc.classList.add('menu-item-desc');
    menuItem3Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem3Price = document.createElement('p');
    menuItem3Price.classList.add('menu-item-price');
    menuItem3Price.textContent = '$120';

    menuItem3.appendChild(menuItem3Title);
    menuItem3.appendChild(menuItem3Desc);
    menuItem3.appendChild(menuItem3Price);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item', 'fish');

    const menuItem4Title = document.createElement('h2');
    menuItem4Title.classList.add('menu-item-title');
    menuItem4Title.textContent = 'Fish';

    const menuItem4Desc = document.createElement('p');
    menuItem4Desc.classList.add('menu-item-desc');
    menuItem4Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem4Price = document.createElement('p');
    menuItem4Price.classList.add('menu-item-price');
    menuItem4Price.textContent = '$120';

    menuItem4.appendChild(menuItem4Title);
    menuItem4.appendChild(menuItem4Desc);
    menuItem4.appendChild(menuItem4Price);

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item', 'vegetarian');

    const menuItem5Title = document.createElement('h2');
    menuItem5Title.classList.add('menu-item-title');
    menuItem5Title.textContent = 'Vegetarian';

    const menuItem5Desc = document.createElement('p');
    menuItem5Desc.classList.add('menu-item-desc');
    menuItem5Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem5Price = document.createElement('p');
    menuItem5Price.classList.add('menu-item-price');
    menuItem5Price.textContent = '$100';

    menuItem5.appendChild(menuItem5Title);
    menuItem5.appendChild(menuItem5Desc);
    menuItem5.appendChild(menuItem5Price);

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item', 'vegan');

    const menuItem6Title = document.createElement('h2');
    menuItem6Title.classList.add('menu-item-title');
    menuItem6Title.textContent = 'Vegan';

    const menuItem6Desc = document.createElement('p');
    menuItem6Desc.classList.add('menu-item-desc');
    menuItem6Desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const menuItem6Price = document.createElement('p');
    menuItem6Price.classList.add('menu-item-price');
    menuItem6Price.textContent = '$100';

    menuItem6.appendChild(menuItem6Title);
    menuItem6.appendChild(menuItem6Desc);
    menuItem6.appendChild(menuItem6Price);

    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuItem6);

    menu.appendChild(menuTitle);
    menu.appendChild(menuItems);

    content.appendChild(menu);
    content.appendChild(footer());
}

export default menuPage;