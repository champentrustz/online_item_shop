const showNewItem = () =>{



    $('#main-content').append(`
  
    
    <div class="w-full h-full relative flex flex-col gap-4 overflow-hidden">
    
<!--     <div class="w-full h-5/6 flex justify-center items-center relative overflow-hidden bg-gray-500 bg-opacity-20 p-4">-->
<!--     -->
<!--     <div class="w-full h-px absolute top-0 left-0 right-0 m-auto bg-white bg-opacity-50"></div>-->
<!-- <div class="w-full h-px absolute bottom-0 left-0 right-0 m-auto bg-white bg-opacity-50"></div>-->
<!--  <div class="w-px h-full absolute bottom-0 left-0 top-0 m-auto bg-white bg-opacity-50"></div>-->
<!--   <div class="w-px h-full absolute bottom-0 right-0 top-0 m-auto bg-white bg-opacity-50"></div>-->
<!-- -->
<!-- -->
<!--     -->
<!--    <img class=" w-full h-full object-cover z-0" src="img/banner/banner.webp" alt=""/>-->
<!--    -->
<!--</div>-->

    <div class="w-full h-full flex items-end overflow-hidden">
     <img class=" w-full object-cover z-0" src="img/banner/banner.webp" alt=""/>
</div>
 

   <div class="w-full h-6 shrink-0 flex items-center text-xs text-gray-400 gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

   รายการไอเทม
</div>

        <div id="feature-content" class="grid grid-cols-4  h-20 shrink-0 w-full  gap-2 z-10 content-start"></div>
        
</div>

   
`)


    items && items.map((item)=>{

        $('#feature-content').append(renderItemList(item))
    })

}