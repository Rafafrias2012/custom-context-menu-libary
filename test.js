// Example usage
var menuItems = [
    { label: 'Option 1', onClick: function () { console.log('Option 1 clicked'); } },
    { label: 'Option 2', onClick: function () { console.log('Option 2 clicked'); } }
];

var contextMenu = cmenu.create(menuItems);

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    cmenu.show(contextMenu, event.pageX, event.pageY);
});
