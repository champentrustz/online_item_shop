const starterPackOrder = [
    'starter_pack_1',
    'starter_pack_2',
    'starter_pack_3'
]


const getNextStarterPackToShow = (starterPackOrder, alreadyBought) => {
    return starterPackOrder.find(pack => !alreadyBought.includes(pack))
}

const processPurchasePackage = (item) =>{
    purchaseData = {
        item : item,
        amount : 1
    }

    showPopupConfirm(confirmPurchase);
    playClickingSound()
}

const renderPackageItem = (item,index) => {

    const oneAccountData = allTimeItems.find(limit => limit === item.onePerAccount)
    const alreadyBuy = oneAccountData !== undefined


    const listItem = () =>{
        let temp = ''
        item.items.map(itemList => {
            temp += `<div class="h-8 shrink-0 flex gap-2 w-full px-1">
     <img class="aspect-square h-full shrink-0" src="http://103.91.190.200:3322/img/${item.name}.png"/>
     <div class="w-full h-full flex items-center text-xs text-gray-300 whitespace-nowrap overflow-hidden">${itemList.label}</div>
     <div class="h-full aspect-square flex justify-end items-center text-base text-gray-300 shrink-0 strong-font" style="font-style: italic">x${itemList.count}</div>
</div>`
        })
        return temp
    }

    return `   <div  class=" 
  h-full w-full flex bg-black  package-list bg-neutral-950 
  flex-col gap-2  items-center btn-item overflow-hidden relative"
>
  
 ${alreadyBuy ? `<div class="w-full h-full backdrop-blur-sm flex justify-center items-center absolute inset-0 
m-auto text-4xl glorious-font text-green-400" style="z-index: 999;">
    <div style="rotate: -45deg">SOLD OUT</div>
</div>` : ``}
 
 <div class="w-full h-full flex flex-col justify-center items-center gap-2 ${alreadyBuy ? 'grayscale' : 'grayscale-0'} p-2 overflow-hidden">
 <div class="w-full h-full absolute inset-0 m-auto g-gold-t"></div>

<img class="w-full h-full object-cover absolute inset-0 m-auto" style="opacity: 0.2;" src="img/bg_package.webp" />
       
       <div class="w-full h-full flex justify-center  items-center flex-col gap-2 overflow-hidden z-10">
        <div class="flex text-sm shrink-0 justify-center items-center text-white overflow-hidden">${item.label} ${item.day !== undefined ? `[${item.day}] วัน` : ''}</div>
        
         <img class="aspect-square w-28 img-item shrink-0" src="http://103.91.190.200:3322/img/${item.name}.png"/>
         
        
        <div class="w-full flex flex-col justify-center items-center">
         <div class="text-amber-300 shrink-0 strong-font text-3xl" style="font-style: italic">${numberWithCommas(item.price)}฿</div>
     
     <div class="text-xs text-red-400">จำกัดการซื้อแพ็คละ 1 ครั้ง เท่านั้น</div>
     <p class="text-xs text-red-400">VIP เปิดใช้งานทันทีเมื่อซื้อ</p>
</div>
 
    
     
     
     <div class="w-4/5 h-full flex flex-col gap-1 overflow-hidden ">
        ${listItem()}
</div>
     
     <button onclick='processPurchasePackage(${JSON.stringify(item)})' class="w-full h-8 shrink-0 gap-2 flex justify-center items-center
      bg-amber-200 bg-opacity-10 hover:bg-opacity-15 border border-amber-200/30 relative"
       
       ${alreadyBuy && 'disabled'}>
       <div class="w-full h-full absolute inset-0 m-auto "></div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-amber-200">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>

       <div class="text-amber-200 text-xs">ซื้อแพ็คเกจ</div>
       
</button>
     
</div>
</div>
 

       
    
       
       
</div>`
}

// let beforeMenu = null

const showPackage = () => {

    let shouldAnimate = true

    // if(beforeMenu === 'menu-package') shouldAnimate = false


    $('#main-content').append(`
<div class="w-full h-full overflow-hidden flex justify-center items-center flex-col gap-4 overflow-hidden">

    <div class="w-4/6 h-4/5 overflow-hidden">
    <div class=" h-full w-full grid grid-cols-3 gap-1" id="items-content"></div>
</div>



</div>

`);


    if (items.length !== 0) {


        items && items.map((item, index) => {

            $('#items-content').append(renderPackageItem(item, index + 1))
        })
    }

    if(shouldAnimate)  animatePackage()


}