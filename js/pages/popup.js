let isPopupShowing = false;

const closeConfirmPopup = () =>{
    isPopupShowing = false
    const element = document.getElementById('popup-confirm-wrap')
    if(element) element.remove()

}

const showPurchaseSuccess = () =>{
    canCloseUi = false
    isPopupShowing = true

    const element = document.getElementById('popup-confirm-wrap');
    if (element) element.remove()

    const wrap = document.getElementById('main');
    let divNode = document.createElement("div");

    divNode.id = 'popup-confirm-wrap';
    divNode.classList.add('min-h-screen', 'min-w-full', 'absolute', 'inset-0', 'm-auto', 'flex', 'justify-center', 'items-center', 'bg-black', 'bg-opacity-90')
    divNode.style.zIndex = '999';



    divNode.innerHTML = `
  <div id="popup-confirm" class="relative">
        <div class="w-96 h-72 flex flex-col gap-4 justify-center items-center">
                 <div class="flex flex-col justify-center items-center">
                 
                <p class="text-5xl strong-font text-green-400 shrink-0 purchase-title" style="font-style: italic">SUCCESS</p>
                
        
            <p class="text text-white shrink-0 purchase-detail">ซื้อไอเทมสำเร็จ</p>
            
                
             
</div>
</div>
        
</div>
       
      
      

    `
    wrap.append(divNode)
    animatePurchaseSuccess()
}

const showPopupConfirm = (cbFunc, args) =>{

    isPopupShowing = true

    const element = document.getElementById('popup-confirm-wrap');
    if (element) element.remove()

    const wrap = document.getElementById('main');
    let divNode = document.createElement("div");

    divNode.id = 'popup-confirm-wrap';
    divNode.classList.add('min-h-screen', 'min-w-full', 'absolute', 'inset-0', 'm-auto', 'flex', 'justify-center', 'items-center', 'bg-black', 'bg-opacity-90')
    divNode.style.zIndex = '999';



    divNode.innerHTML = `
  <div id="popup-confirm" class="relative">
   <div class="w-56 flex flex-col gap-2 justify-center items-center relative bg-gray-500 overflow-hidden bg-opacity-30 border border-white/30">
                    
               
                    <div class="w-full h-7 border-b border-white/5 flex justify-center items-center text-xs text-amber-300">ยืนยันการซื้อ</div>
                    
                    <div class="w-full p-2 flex justify-center items-center">
                      <p class="text-xs text-gray-300">คุณต้องการซื้อไอเทมนี้หรือไม่</p>
</div>

            <div class="w-full h-8 p-1 flex justify-end items-center gap-1">
                    <button id="confirm-btn" 
                    class="w-16 h-full bg-amber-300 bg-opacity-20 border border-white/10 flex justify-center items-center text-xs text-amber-300 hover:bg-opacity-30">ยืนยัน</button>
                      <button onclick="closeConfirmPopup(); playClickingSound()" class="w-16 h-full border border-white/10 flex justify-center items-center text-xs text-gray-400 hover:text-gray-300 hover:border-white/20">ยกเลิก</button>
</div>
                      
                    
                    
     
</div>
</div>
       
      
      

    `
    wrap.append(divNode)

    document.getElementById('confirm-btn').addEventListener('click', () => cbFunc(args));
}