const menu = [

    {
        id: 'menu-package',
        en_label: 'PACKAGE',
        th_label: 'แพ็คเริ่มต้น'
    },
    {
        id: 'menu-items',
        en_label: 'ITEMS',
        th_label: 'ไอเทมต่างๆ'
    }, {
        id: 'menu-daily',
        en_label: 'DAILY',
        th_label: 'แพ็ครายวัน'
    },

    {

        id: 'menu-weapon-skin',
        en_label: 'WEAPON SKIN',
        th_label: 'สกินอาวุธ',
    }
]

let specialGasha = {}

let itemAll = {}
let items = null;
let canCloseUi = true
let selectedMenu = menu[0].id;
let showPurchase = false;
let myPoints = 0;
let timer = null;
let gachaRewardList = []
let allowOpenInitial = false
let mySpecialPoints = 0
let todayItems = []
let allTimeItems = []
let weekItems = []

let purchaseData = {
    item: null,
    amount: 1
}


const db = firebase.firestore();

// const getItemLimit = async () => {
//     const res = await fetch('https://glorious_itemmall/get_item_limit')
//     return await res.json()
// }

const showLayout = () => {
    $('#main').html(`
                <div id="main-wrap" class="relative flex flex-col gap-2 bg-size p-3 bg-black bg-opacity-80 overflow-hidden  ">
                
                 <div class="w-full h-full absolute inset-0 m-auto flex justify-center items-center z-10">
<div class="w-full h-full g-gold-t">
</div>
</div>

                  <div class="grid-texture w-full h-full absolute inset-0 m-auto">
  </div>
                
                <div class="w-full h-10 2xl:h-12 flex justify-between items-center shrink-0 overflow-hidden z-10">
                
                <div class=" w-auto h-full relative flex items-center gap-6">
         
<!--            <p id="category-title" class="text-2xl text-gray-300 glorious-font whitespace-nowrap px-2">-->
<!--            SHOP-->
<!--</p>-->
            
         
         <div class="flex relative h-8 2xl:h-10 items-center overflow-hidden">
<!--           <div class="h-full w-px bg-white bg-opacity-20 relative">-->
<!--    <div class="h-1 w-full absolute bg-white bg-opacity-30 top-0"></div>-->
<!--    <div class="h-1 w-full absolute bg-white bg-opacity-30 bottom-0"></div>-->
<!--</div>-->

            <div id="menu-bar" class="h-full flex items-center gap-1"></div>
            
<!--             <div class="h-full w-px bg-white bg-opacity-20 relative">-->
<!--    <div class="h-1 w-full absolute bg-white bg-opacity-30 top-0"></div>-->
<!--    <div class="h-1 w-full absolute bg-white bg-opacity-30 bottom-0"></div>-->
<!--</div>-->
</div>
         
       
</div>
                <div class="w-2/6 h-8 2xl:h-10 flex items-center justify-end gap-1 " id="second-menu-bar"></div>
            </div>
            
<!--        <div class="absolute relative w-full h-px bg-white/10 before:absolute before:left-0 before:bottom-0 before:w-1 before:h-px before:bg-white/20 after:absolute after:right-0 after:bottom-0 after:w-1 after:h-px after:bg-white/20"></div>-->

            <div class="w-full h-full flex flex-col overflow-hidden z-10" id="wrap-content">
                
            </div>
            
</div>
            `)

    $('#main-wrap').append(`
    <div class="absolute top-0 right-0 w-full z-20 h-full flex" id="purchase-bar" style="display: none">
    <div id="blackdrop-purchase" onclick="showPurchaseBar()" class="w-full h-full "></div>
    <div id="main-purchase" class="w-3/12 shrink-0 bg-gray-500 bg-opacity-50 backdrop-blur h-full flex flex-col justify-between">
</div>
</div>
    `)

    // showMenuBar();
    selectMenu(selectedMenu);
    showMyPoints();
}


window.addEventListener("message", async function (event) {

    const action = event.data.action;
    const data = event.data.data
    const gashaData = event.data.specialGasha

    if (action === 'display') {

        const res = await getPurchaseHistory();

        console.log('purchase history => ',res)

        todayItems = res.todayItems || []
        allTimeItems = res.allTimeItems || []
        weekItems = res.weekItems || []


        specialGasha = {
            item: gashaData.item,
            rewards: [...gashaData.rewards]
        }


        const backdrop = document.querySelector('#backdrop');
        backdrop.style.display = '';

        showLayout();


    }

    if (action === 'open_donate') {

        const backdrop = document.querySelector('#backdrop');
        backdrop.style.display = '';
        selectedMenu = 'menu-refill';
        showLayout();
    }

    if (action === 'donate_success') {
        successRefill()
    }

    if (action === 'update_points') {

        showMyPoints();
        changeStateButtonPurchase(false);
    }

    if (action === 'hide') {
        clearTimeout(timer);
        showPurchase = false;
        document.getElementById('main').innerHTML = ''
        clearInterval(intervalScan)
        const backdrop = document.querySelector('#backdrop');
        backdrop.style.display = 'none';
        items = []
    }
})

document.addEventListener("DOMContentLoaded", async(event) => {

    itemAll = await getItemAll()

    const token = getParam('token')

    // console.log(token)

    showLayout();
});

//if IE4+
document.onselectstart = new Function("return false")
//if NS6
if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}
