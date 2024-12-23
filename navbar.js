// let parentId = 1;
// let menus = {};
// let menuElements = {};

// async function addMenu() {
//     const menuName = prompt("Enter new unique menu name:");
//     if (menuName) {
//         if (!isNameUnique(menuName, 'menu')) {
//             alert("Menu name already exists. Please try a different name.");
//             return addMenu();
//         }

    
//         const newButton = document.createElement('button');
//         newButton.textContent = menuName;

//         const submenu = document.createElement('div');
//         submenu.classList.add('submenu');
//         newButton.appendChild(submenu);
//         document.querySelector('.navbar').appendChild(newButton);

//         menus[menuName] = { type: 'parent', id: `menu-${parentId}`, children: [] };
//         menuElements[menuName] = newButton;

//         newButton.onmouseover = () => submenu.style.display = 'block';
//         newButton.onmouseout = () => submenu.style.display = 'none';

//         let numSubMenus = parseInt(prompt(`How many sub-menu items do you want to add to ${menuName}?`), 10);
//         for (let i = 0; i < numSubMenus; i++) {
//             addSubMenuItem(submenu, menuName);
//         }

//         parentId++;

        
//         try {
//             const response = await fetch('/departments', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ name: menuName })
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 alert(`Error creating menu in backend: ${errorData.error}`);
//             } else {
//                 const result = await response.json();
//                 alert(`Menu "${result.name}" created in backend with ID: ${result.id}`);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while creating the menu in the backend.');
//         }

//         logMenus();
//     }
// }

// function addSubMenuItem(submenu, menuName) {
//     const subMenuItemName = prompt(`Enter a unique sub-menu item for ${menuName}:`);
//     if (subMenuItemName) {
//         if (!isNameUnique(subMenuItemName, 'submenu')) {
//             alert("Sub-menu item name already exists. Please try a different name.");
//             return addSubMenuItem(submenu, menuName);
//         }

//         const subMenuItem = createSubMenuItem(subMenuItemName, menuName);
//         if (subMenuItem) {
//             submenu.appendChild(subMenuItem);
//             logMenus();
//         }
//     }
// }

// function createSubMenuItem(subMenuItemName, menuName) {
//     const subMenuItem = document.createElement('button');
//     subMenuItem.textContent = subMenuItemName;

//     if (!menus[menuName]) {
//         alert(`Parent menu ${menuName} does not exist.`);
//         return null;
//     }

//     menus[subMenuItemName] = { type: 'submenu', parentId: menuName, children: [] };
//     menus[menuName].children.push(subMenuItemName);

//     subMenuItem.onclick = function() {
//         alert(`You clicked on ${menuName} > ${subMenuItemName}`);
//     };

//     const childSubmenu = document.createElement('div');
//     childSubmenu.classList.add('child-submenu');

//     subMenuItem.onmousedown = function(event) {
//         if (event.button === 1) {
//             event.preventDefault();
//             const shouldAddChild = confirm(`Do you want to create a child menu for ${subMenuItemName}?`);
//             if (shouldAddChild) {
//                 addChildMenu(subMenuItemName, childSubmenu);
//             }
//         }
//     };

//     subMenuItem.onclick = function() {
//         childSubmenu.style.display = childSubmenu.style.display === 'block' ? 'none' : 'block';
//     };

//     subMenuItem.appendChild(childSubmenu);
//     return subMenuItem;
// }

// function addChildMenu(subMenuItemName, childSubmenu) {
//     const childMenuName = prompt(`Enter a unique child menu item for ${subMenuItemName}:`);
//     if (childMenuName) {
//         if (!isNameUnique(childMenuName, 'child')) {
//             alert("Child menu item name already exists. Please try a different name.");
//             return addChildMenu(subMenuItemName, childSubmenu);
//         }

//         const childMenuItem = document.createElement('button');
//         childMenuItem.textContent = childMenuName;

//         menus[childMenuName] = { type: 'child', parentId: subMenuItemName };
//         menus[subMenuItemName].children.push(childMenuName);

//         childMenuItem.onclick = function() {
//             alert(`You clicked on ${subMenuItemName} > ${childMenuName}`);
//         };

//         childSubmenu.appendChild(childMenuItem);
//         logMenus();
//     }
// }

// function isNameUnique(name, type) {
//     return !Object.keys(menus).includes(name);
// }

// function deleteMenu() {
//     const nameToDelete = prompt("Enter the name of the menu, submenu, or child menu to delete:");
//     if (nameToDelete) {
//         if (menus[nameToDelete]) {
//             const { type, parentId } = menus[nameToDelete];
//             if (type === 'parent') {
//                 delete menus[nameToDelete];
//                 if (menuElements[nameToDelete]) {
//                     menuElements[nameToDelete].remove();
//                     delete menuElements[nameToDelete];
//                 }
//                 Object.keys(menus).forEach(menu => {
//                     if (menus[menu].type === 'submenu' && menus[menu].parentId === nameToDelete) {
//                         delete menus[menu];
//                     }
//                 });
//             } else if (type === 'submenu') {
//                 const parentMenu = menus[parentId];
//                 parentMenu.children = parentMenu.children.filter(child => child !== nameToDelete);
//                 if (menuElements[nameToDelete]) {
//                     menuElements[nameToDelete].remove();
//                     delete menuElements[nameToDelete];
//                 }
//                 delete menus[nameToDelete];
//             } else if (type === 'child') {
//                 const parentSubmenu = Object.keys(menus).find(key => menus[key].children && menus[key].children.includes(nameToDelete));
//                 if (parentSubmenu) {
//                     menus[parentSubmenu].children = menus[parentSubmenu].children.filter(child => child !== nameToDelete);
//                 }
//                 delete menus[nameToDelete];
//             }
//             alert(`${nameToDelete} has been deleted.`);
//         } else {
//             alert(`No menu found with the name ${nameToDelete}.`);
//         }
//         logMenus();
//     }
// }

// function logMenus() {
//     console.clear();
//     console.log("Current Menus Structure:");
//     for (const [name, menu] of Object.entries(menus)) {
//         console.log(`- ${name} (${menu.type})`);
//         if (menu.type === 'parent' && menu.children.length > 0) {
//             console.log(`  Submenus: ${menu.children.join(', ')}`);
//         } else if (menu.type === 'submenu') {
//             const parentName = menus[menu.parentId]?.type === 'parent' ? menu.parentId : 'None';
//             console.log(`  Parent: ${parentName}`);
//             if (menu.children.length > 0) {
//                 console.log(`  Child Menus: ${menu.children.join(', ')}`);
//             }
//         } else if (menu.type === 'child') {
//             const parentSubmenuName = Object.keys(menus).find(key => menus[key].children && menus[key].children.includes(name));
//             console.log(`  Parent Submenu: ${parentSubmenuName || 'None'}`);
//         }
//     }
// }











