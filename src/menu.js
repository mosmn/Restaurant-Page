import './style.css';

const emptyContent = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
}

const menuPage = () => {
    emptyContent();
    const content = document.createElement('div');
    content.classList.add('content', 'menu');
    document.body.appendChild(content);

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');

    const menuItem1Title = document.createElement('h2');
    menuItem1Title.classList.add('menu-item-title');
    menuItem1Title.textContent = 'Appetizers';

    const menuItem1List = document.createElement('ul');
    menuItem1List.classList.add('menu-item-list');

    const menuItem1Item1 = document.createElement('li');
    menuItem1Item1.classList.add('menu-item-list-item');
    menuItem1Item1.textContent = 'Caviar';

    const menuItem1Item2 = document.createElement('li');
    menuItem1Item2.classList.add('menu-item-list-item');
    menuItem1Item2.textContent = 'Escargot';

    const menuItem1Item3 = document.createElement('li');
    menuItem1Item3.classList.add('menu-item-list-item');
    menuItem1Item3.textContent = 'Foie Gras';

    const menuItem1Item4 = document.createElement('li');
    menuItem1Item4.classList.add('menu-item-list-item');
    menuItem1Item4.textContent = 'Pate';

    const menuItem1Item5 = document.createElement('li');
    menuItem1Item5.classList.add('menu-item-list-item');
    menuItem1Item5.textContent = 'Salmon Tartare';

    const menuItem1Item6 = document.createElement('li');
    menuItem1Item6.classList.add('menu-item-list-item');
    menuItem1Item6.textContent = 'Shrimp Cocktail';

    const menuItem1Item7 = document.createElement('li');
    menuItem1Item7.classList.add('menu-item-list-item');
    menuItem1Item7.textContent = 'Tuna Tartare';

    const menuItem1Item8 = document.createElement('li');
    menuItem1Item8.classList.add('menu-item-list-item');
    menuItem1Item8.textContent = 'Oysters';

    const menuItem1Item9 = document.createElement('li');
    menuItem1Item9.classList.add('menu-item-list-item');
    menuItem1Item9.textContent = 'Crab Cakes';

    const menuItem1Item10 = document.createElement('li');
    menuItem1Item10.classList.add('menu-item-list-item');
    menuItem1Item10.textContent = 'Fried Calamari';

    const menuItem1Item11 = document.createElement('li');
    menuItem1Item11.classList.add('menu-item-list-item');
    menuItem1Item11.textContent = 'Fried Mozzarella';

    const menuItem1Item12 = document.createElement('li');
    menuItem1Item12.classList.add('menu-item-list-item');
    menuItem1Item12.textContent = 'Fried Zucchini';
    
    const menuItem1Item13 = document.createElement('li');
    menuItem1Item13.classList.add('menu-item-list-item');
    menuItem1Item13.textContent = 'Garlic Bread';

    const menuItem1Item14 = document.createElement('li');
    menuItem1Item14.classList.add('menu-item-list-item');
    menuItem1Item14.textContent = 'Garlic Bread with Cheese';
}

export default menuPage;