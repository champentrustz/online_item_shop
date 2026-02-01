
const testFashion = () =>{
    closeWindow()
    setTimeout(() => {
        fetch('https://glorious_test_fashion/test_fashion')
    },50)
}


const showFashionContent = () =>{

    $('#fashion-content').html('');


    if(items.length !== 0){
        items && items.slice(0).reverse().map((item)=>{

            $('#fashion-content').append(renderItemList(item))

        })
    }


}

const showFashion = () =>{


    $('#main-content').append(`
<div class="w-full h-full overflow-hidden flex flex-col gap-4">
 <div class="w-full h-6 shrink-0 flex justify-between items-center ">
 
    <div class="h-full flex gap-4 items-center">
    <div class="h-full flex gap-2 items-center text-xs text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

   รายการไอเทม
</div>
<!--<button onclick="testFashion()" class="w-24 h-full flex justify-center items-center bg-pink-500 bg-opacity-20 text-xs text-pink-400 hover:bg-opacity-30 gap-1 border border-white/10">-->
<!--	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">-->
<!--  <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />-->
<!--</svg>-->



<!--	ทดลองแฟชั่น</button>-->
</div>
 
    

<div id="search" class="w-36 h-full "></div>
   
</div>



<div class=" h-full w-full grid grid-cols-4 gap-2 overflow-auto content-start relative" style="min-width: 0;" id="fashion-content">
 
</div>
</div>`);

    // showCategory('fashion');
    showFashionContent();
    showSearch();

}