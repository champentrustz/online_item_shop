// let fashionCategories = [{
//     id: 'fashion_head',
//     label: 'HEAD',
//     active: true
// }, {
//     id: 'fashion_face',
//     label: 'FACE',
//     active: true
// }, {
//     id: 'fashion_mouth',
//     label: 'MOUTH',
//     active: true
// }, {
//     id: 'fashion_back',
//     label: 'BACK',
//     active: true
// }, {
//     id: 'fashion_shoulder',
//     label: 'SHOULDER',
//     active: true
// }, {
//     id: 'fashion_hand',
//     label: 'HAND',
//     active: true
// }, {
//     id: 'fashion_leg',
//     label: 'LEG',
//     active: true
// }, {
//     id: 'fashion_arm',
//     label: 'ARM',
//     active: true
// }]
//
// let weaponSkinCategories = [{
//     id: 'knuckle',
//     label: 'KNUCKLE',
//     active: true
// }, {
//     id: 'bottle',
//     label: 'BOTTLE',
//     active: true
// }, {
//     id: 'poolcue',
//     label: 'POOLCUE',
//     active: true
// }, {
//     id: 'machete',
//     label: 'MACHETE',
//     active: true
// }, {
//     id: 'revolver',
//     label: 'REVOLVER',
//     active: true
// }]

// const changeStateCategory = (id, route) => {
//
//
//     if (route === 'fashion') {
//         const index = fashionCategories.findIndex((category) => {
//             return category.id === id
//         });
//
//
//         fashionCategories[index].active = !fashionCategories[index].active;
//
//         showCategory(route);
//         showFashionContent();
//     }
//     if (route === 'weapon-skin') {
//         const index = weaponSkinCategories.findIndex((category) => {
//             return category.id === id
//         });
//
//
//         weaponSkinCategories[index].active = !weaponSkinCategories[index].active;
//
//         showCategory(route);
//         showWeaponSkinContent();
//     }
//
// }

// const showCategory = (route) => {
//
//
//     if (route === 'fashion') {
//         $('#fashion-category').html(``);
//         fashionCategories.map((category) => {
//             $('#fashion-category').append(`
//         <button onclick="changeStateCategory('${category.id}','fashion')" class="font-10 w-28 flex items-center px-3 gap-3 whitespace-nowrap bg-black bg-opacity-50 rounded-full h-8 ${category.active ? 'text-gray-300' : 'text-gray-500'}" id="${category.id}">
//         <div class="w-4 h-4 bg-gray-100 flex justify-center items-center rounded-full">
//           <div class="rounded-full w-2 h-2 ${category.active ? 'bg-sky' : 'bg-red-500'}"></div>
// </div>
//
//         <div>${category.label}</div>
// </button>
//     `)
//         })
//     }
//
//     if(route === 'weapon-skin'){
//         $('#weapon-skin-category').html(``);
//         weaponSkinCategories.map((category)=>{
//             $('#weapon-skin-category').append(`
//         <button onclick="changeStateCategory('${category.id}','weapon-skin')" class="font-10 w-28 flex items-center px-3 gap-3 bg-gray-100 rounded-full h-8 ${category.active ? 'text-gray-300' : 'text-gray-500'}" id="${category.id}">
//         <div class="w-4 h-4 bg-gray-100 flex justify-center items-center rounded-full">
//           <div class="rounded-full w-2 h-2 ${category.active ? 'bg-sky' : 'bg-red-500'}"></div>
// </div>
//         <div>${category.label}</div>
// </button>
//     `)
//         })
//     }
//
// }