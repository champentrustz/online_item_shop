const lockQuantity = [
    'glorious_vip'
]

const confirmPurchase = async () => {

    const price = purchaseData.item.price * purchaseData.amount;
    closeConfirmPopup()
    playClickingSound()
    $('#purchase-bar').hide("slide", {direction: "right"}, 400);

    if (myPoints >= price) {
        changeStateButtonPurchase(true);

        showPurchase = !showPurchase;


        const res = await purchaseItem(purchaseData.item.id, purchaseData.amount)


        if (res.status) {
            const res = await getPurchaseHistory();
            todayItems = res.todayItems
            allTimeItems = res.allTimeItems
            weekItems = res.weekItems
            showMyPoints();
            showPurchaseSuccess()
        }else{
            showPurchaseFail()
        }

    } else {
        selectMenu('menu-refill');
        // return false;
    }


}

const showItemDetail = () => {

    $('#items-detail').html('');
    purchaseData.item.items && purchaseData.item.items.map((item) => {
        $('#items-detail').append(`<div class=" w-full h-10 shrink-0 flex justify-start items-center gap-2 bg-black bg-opacity-50 p-1 overflow-hidden">
<div class="h-full aspect-square flex justify-center items-center shrink-0 relative">
<img class="h-5/6 object-cover" src="/api/proxy?path=img/${item.item}.png&type=image"/>
  
</div>


<div class="w-full h-full flex justify-start items-center text-xs overflow-hidden whitespace-nowrap text-gray-300">${item.label}</div>

  <div class="w-10 shrink-0 h-full flex justify-center items-center text-xs text-amber-300">
    x ${item.count}
</div>

</div>
`)
    })
}

const manageAmount = (state) => {
    if (state === 'increase') {

        purchaseData.amount += 1
    }

    if (state === 'decrease') {

        if (purchaseData.amount <= 1) {
            return
        }

        purchaseData.amount -= 1
    }

    updatePurchaseDetail();
}

const manageInput = (element) => {

    purchaseData.amount = element.value;
    updatePurchaseDetail();

}

const updatePurchaseDetail = () => {

    $('#purchase-price').html(`ราคารวม : ${purchaseData.item.price * purchaseData.amount}`)
    $('#quantity').val(`${purchaseData.amount}`)

}

const purchaseComponent = () => {


    if (showPurchase) {

        // let disableQuantity = false;
        //
        // for (let i = 0; i < lockQuantity.length; i++) {
        //
        //
        //     if (purchaseData.item.name === lockQuantity[i]) {
        //
        //         disableQuantity = true;
        //
        //         break;
        //
        //     }
        //
        // }



        let disableQuantity = purchaseData.item.onePerAccount !== undefined || purchaseData.item.onePerDayKey !== undefined  || purchaseData.item.onePerWeekKey !== undefined




        $('#main-purchase').html(`<div class="h-full w-full flex flex-col justify-between gap-2 overflow-hidden">



<div class="w-full h-10 shrink-0 flex justify-center items-center">
    <div class="text-gray-300 text-sm ">${purchaseData.item.label}</div>
    </div>
    
    <div class="flex justify-center items-center w-full h-auto">
    
     <div class="h-24 aspect-square shrink-0 p-px overflow-hidden relative" style="background: linear-gradient(135deg, transparent 9px, rgba(252, 211, 77,0.3) 0)">
       
        <div class="absolute top-0 left-0">
        <div class="t-tl"></div>
</div>
       
        <div class="h-full aspect-square flex justify-center items-center shrink-0 z-10  "
        style="background: linear-gradient(135deg, transparent 9px, rgba(20, 20, 20,1) 0)">
       <img class=" w-4/6 object-cover" src="/api/proxy?path=img/${purchaseData.item.item}.png&type=image"/>
</div>
       
</div>


    
</div>

    

<div class="flex items-center w-full h-4/6 flex-col gap-2 px-2 overflow-hidden">
    <div class="w-full h-full flex flex-col items-center overflow-auto gap-1" id="items-detail">
    
</div>


 
    <div class="w-full h-40 flex flex-col justify-center items-center gap-3 relative">
    
  

    <div class="w-full h-auto flex justify-center items-center gap-2">
   
    <span id="purchase-price" class=" text-gray-300 text-xs">ราคารวม : ${purchaseData.item.price * purchaseData.amount}</span>
</div>

<div class="w-full h-auto flex justify-center items-center gap-2">
    <button onclick="manageAmount('decrease')" class="w-6 h-6 btn-decrease  bg-gray-500 bg-opacity-50 text-gray-400 hover:text-gray-300 p-1" ${disableQuantity && 'disabled'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
  <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>

</button>
        
        <input oninput="manageInput(this)" id="quantity" class="h-6 w-16 px-2 flex text-xs justify-center items-center bg-gray-500 bg-opacity-50 text-gray-300" 
        type="number" value="${purchaseData.amount}"  ${disableQuantity && 'disabled'} />
        
        <button onclick="manageAmount('increase')" class="w-6 h-6 btn-increase bg-gray-500 bg-opacity-50 text-gray-400 p-1 hover:text-gray-300" ${disableQuantity && 'disabled'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</button>
</div>
    
    </div>
    
    
</div>
</div>
    <div class="h-14 shrink-0 w-full flex justify-center items-end p-2">
        <button id="button-confirm-purchase" onclick="showPopupConfirm(confirmPurchase); playClickingSound()" class="w-full h-full hover:bg-opacity-50  bg-amber-300 bg-opacity-40 flex justify-center items-center  gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5  w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
<span class="text-xs text-gray-800">ยืนยันการซื้อ</span>
</button>
</div>`)
        $('#purchase-bar').show("slide", {direction: "right"}, 400);
        showItemDetail();


    } else {
        $('#purchase-bar').hide("slide", {direction: "right"}, 400);
    }
}

const showPurchaseBar = (item) => {

    const selectedItem = item

    purchaseData = {
        item: selectedItem,
        amount: 1
    }

    showPurchase = !showPurchase;

    purchaseComponent(selectedItem);

}