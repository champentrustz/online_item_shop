const gashaName = 'bp_6_gashapon'

const processPurchaseGasha = () =>{

    const selectedItem = items.find(item => item.name === gashaName);
    const element = document.getElementById('input-amount')
    const amount = element.value

    if(amount === '' || amount === null || amount === undefined) return

    purchaseData = {
        item : selectedItem,
        amount : parseInt(amount)
    }


    showPopupConfirm(confirmPurchase);
    playClickingSound()
}

const renderGasha = (item,index) => {

    const oneAccountData = allTimeItems.find(limit => limit === item.onePerAccount)
    const alreadyBuy = oneAccountData !== undefined


    const listItem = () =>{
        let temp = ''
        item.items.map(itemList => {
            temp += `<div class="h-8 shrink-0 flex gap-2 w-full px-1">
     <img class="aspect-square h-full shrink-0" src="nui://glorious_inventory/html/img/items/${itemList.name}.png"/>
     <div class="w-full h-full flex items-center text-xs text-gray-300 whitespace-nowrap overflow-hidden">${itemList.label}</div>
     <div class="h-full aspect-square flex justify-end items-center text-base text-gray-300 shrink-0 strong-font" style="font-style: italic">x${itemList.count}</div>
</div>`
        })
        return temp
    }

    return `   <div  class=" 
  h-full w-full flex bg-black  package-list bg-neutral-950 
  flex-col gap-2 border border-white/30 items-center btn-item overflow-hidden relative"
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
        
         <img class="aspect-square w-36 img-item shrink-0" src="nui://glorious_inventory/html/img/items/${item.name}.png"/>
         
        
        <div class="w-full flex flex-col justify-center items-center">
         <div class="text-amber-300 shrink-0 strong-font text-3xl" style="font-style: italic">${numberWithCommas(item.price)}$</div>
     
     <div class="text-xs text-red-400">จำกัดการซื้อแพ็คละ 1 ครั้ง เท่านั้น</div>
     <p class="text-xs text-red-400">VIP เปิดใช้งานทันทีเมื่อซื้อ</p>
</div>
 
    
     
     
     <div class="w-4/5 h-full flex flex-col gap-1 overflow-hidden ">
        ${listItem()}
</div>
     
     <button onclick='processPurchasePackage(${JSON.stringify(item)})' class="w-full h-8 shrink-0 gap-2 flex justify-center items-center
      bg-amber-300 bg-opacity-15 hover:bg-opacity-20 border border-amber-300/30 relative"
       
       ${alreadyBuy && 'disabled'}>
       <div class="w-full h-full absolute inset-0 m-auto "></div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-amber-300">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>

       <div class="text-amber-300 text-xs">ซื้อแพ็คเกจ</div>
       
</button>
     
</div>
</div>
 

       
    
       
       
</div>`
}

// let beforeMenu = null

const showGasha = () => {

    let shouldAnimate = true

    // if(beforeMenu === 'menu-package') shouldAnimate = false


    $('#main-content').append(`
<div class="w-full h-full overflow-hidden flex flex-col gap-2 relative">

   
    
    <div class="w-full h-full overflow-hidden relative">
        <div class="h-9 2xl:h-10 bg-black bg-opacity-80 w-2/6  whitespace-nowrap absolute left-0 right-0 flex justify-center items-center m-auto text-sm text-gray-300 "
         style="bottom: 70px">
            <div class="w-full h-full absolute inset-0 m-auto bg-red-500 bg-opacity-30 border border-red-500/40"></div>
            <div class="z-10">สิ้นสุดการขาย 30/09/2025</div>
</div>
         <img class=" h-full w-full" src="img/banner/banner.webp" />
</div>
    
    <div class="w-full shrink-0 flex flex-col justify-center items-center gap-2">
   
     <div class="w-full h-8 2xl:h-10 shrink-0 flex gap-2 justify-center items-center">
        <div class="text-xs  text-gray-300">ลูกละ 10 บาท</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 aspect-square text-green-400">
  <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

      <input id="input-amount" class="w-40 h-full bg-gray-500 bg-opacity-50 border border-white/10 px-2 text-xs text-gray-300 shrink-0" placeholder="จำนวนการซื้อ" type="number" / >
        <button id="button-confirm-purchase" onclick="processPurchaseGasha(); playClickingSound()" 
        class="px-3 h-full shrink-0 hover:bg-opacity-15  bg-amber-200 bg-opacity-10 border border-amber-200/30 flex justify-center items-center  gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
<span class="text-xs text-amber-200">ยืนยันการซื้อ</span>
</button>
     </div>
       
</div>

<!--<div class=" h-full w-full grid grid-cols-3 gap-2" id="items-content"></div>-->
</div>

`);


    if (items.length !== 0) {


        items && items.map((item, index) => {

            $('#items-content').append(renderPackageItem(item, index + 1))
        })
    }

    if(shouldAnimate)  animatePackage()


}