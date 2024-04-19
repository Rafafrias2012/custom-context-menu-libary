// cmenu.js

(function () {
    var cmenu = {};

    // Function to create a context menu
    cmenu.create = function (menuItems) {
        var menu = document.createElement('ul');
        menu.className = 'cmenu';

        menuItems.forEach(function (item) {
            var menuItem = document.createElement('li');
            menuItem.textContent = item.label;
            menuItem.addEventListener('click', function (event) {
                event.preventDefault();
                item.onClick();
                cmenu.hide();
            });
            menu.appendChild(menuItem);
        });

        document.body.appendChild(menu);
        return menu;
    };

    // Function to show the context menu
    cmenu.show = function (menu, x, y) {
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
        menu.style.display = 'block';
    };

    // Function to hide the context menu
    cmenu.hide = function () {
        var menus = document.querySelectorAll('.cmenu');
        menus.forEach(function (menu) {
            menu.style.display = 'none';
        });
    };

    // Attach event listener to the document to hide menu on click outside
    document.addEventListener('click', function () {
        cmenu.hide();
    });

    // Prevent default context menu from appearing
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    // Expose the cmenu object
    window.cmenu = cmenu;
})();
