const showMyPoints = async() =>{

    // myPoints = await $.get("https://glorious_itemmall/get_my_points")

    myPoints = getMyPoints()

    $('#second-menu-bar').html(`


<!--<button onclick="selectMenu('menu-refill')" class="w-auto px-2 h-full text-gray-400 hover:text-gray-300 font-12 flex justify-center items-center gap-2">-->
<!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">-->
<!--  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />-->
<!--</svg>-->


<!--<div class="text-sm">ของขวัญ</div>-->
<!--</button>-->

<!--   <button onclick="selectMenu('menu-special')" class="btn-submit w-auto px-2 h-full rounded border border-white/10 text-gray-400 hover:text-gray-300 font-12 flex justify-center items-center gap-2 relative overflow-hidden">-->
<!--   <div class="w-full h-full absolute inset-0 m-auto g-purple z-0"></div>-->
<!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 aspect-square z-10">-->
<!--  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />-->
<!--</svg>-->


<!--<div class="text-sm z-10">สะสมแต้ม</div>-->
<!--</button>-->

<button onclick="showPopupVip(); playClickingSound()" class="btn-submit w-auto 
px-2 h-full bg-lime-300 bg-opacity-10 hover:bg-opacity-15 border border-lime-300/30 text-lime-300  flex justify-center items-center gap-1 text-xs relative">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3/6 aspect-square" style="margin-bottom: 2px">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>


<div class="">ซื้อ VIP</div>
</button>

<button onclick="selectMenu('menu-refill'); playClickingSound()" class="btn-submit w-auto px-2.5 h-full border border-red-400/30 hover:bg-opacity-15  text-rose-400
  flex justify-center items-center gap-1 text-xs bg-rose-400 bg-opacity-10">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-2/5 aspect-square ">
  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
</svg>

<div class="">โดเนท</div>
</button>



 <div class=" h-full w-28 2xl:w-36 flex  justify-center gap-1 items-center bg-amber-200 bg-opacity-10 px-2.5 text-xs relative">
    
     
  
    
  
<p class="text-xs text-gray-300">แต้ม: </p>
    
<span class="text-amber-200">${numberWithCommas(myPoints)} ฿</span>
</div>
    `)
}