const menuKey = {
    // 'menu-gasha': 'itemsMiscellaneous',
    // 'menu-new': 'itemFeature',
    'menu-package': 'itemsPackage',
    'menu-daily': 'itemsDaily',
    'menu-weapon-skin': 'itemsWeaponSkin',
    'menu-items': 'itemsMiscellaneous',
    'menu-vip': 'itemVip'

}

const showContent = () => {

    $('#main-content').html('');

    $('#wrap-content').html(`
<div class="w-full h-full relative flex flex-col gap-2 overflow-hidden" id="main-content">
</div>
`)



    if (selectedMenu === 'menu-refill') {

        changeMenuState(false);
        showRefill();

    }else if (selectedMenu === 'menu-special') {


        changeMenuState(false);
        showSpecialPage();

    }
    else if (selectedMenu === 'menu-package') {
        changeMenuState(false);
        items = itemAll[menuKey[selectedMenu]]
        showPackage()
    }
    else {
        changeMenuState(false);
        items = itemAll[menuKey[selectedMenu]]

        showItems();
    }


    // if (selectedMenu === 'menu-vip') {
    //
    //     showPopupVip();
    //
    // }
}


const selectMenu = (selected) => {


    selectedMenu = selected;

    changeMenuState(true);

    showMenuBar();

    showContent();

    const categoryDetail = menu.find(menuArg => menuArg.id === selectedMenu)


    let textTitle = ''

    if(categoryDetail === undefined){
        textTitle = selectedMenu === 'menu-refill' ? 'DONATE' : 'VIP'
    }else{
        textTitle = categoryDetail.en_label
    }

    // document.getElementById('category-title').innerText = textTitle;

    // setTimeout(() => {
    //     beforeMenu = selectedMenu
    // },50)




}


const showMenuBar = () => {

    $('#menu-bar').html('');

    const element = document.getElementById('menu-bar');
    let temp = ''


    menu.map((menuArg, index) => {


        temp +=`
     <button id="${menuArg.id}" onclick="selectMenu('${menuArg.id}'); playClickingSound()"
             class="btn-submit h-full px-3  flex items-center justify-between text-xs 
${selectedMenu === menuArg.id ? 'text-amber-200 bg-amber-200 bg-opacity-10 border border-amber-200/30' : 'text-gray-400 bg-black bg-opacity-50 border border-white/10'}
             
             
             
             ">
       
        <div class="">${menuArg.th_label}</div>
     </button>
            `
    })

    element.innerHTML =  temp

}





