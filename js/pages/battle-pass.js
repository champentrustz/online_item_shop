const showBattlePass = () =>{

    $('#main-content').append(`
<div class="w-full h-full overflow-hidden flex flex-col gap-4">
 <div class="w-full h-6 shrink-0 flex items-center text-xs text-gray-400 gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

   รายการไอเทม
</div>

<div class=" h-full w-full grid grid-cols-4 gap-4 overflow-auto content-start" style="min-width: 0;" id="battle-pass-content"></div>
</div>`);


    if(items.length !== 0){
        items && items.map((item)=>{

            $('#battle-pass-content').append(renderItemList(item))
        })
    }


}