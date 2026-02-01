const searching = () =>{
    const value = $('#input-search').val().toLowerCase();
    $(".btn-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}


const showSearch = () => {
    $('#search').html('');
    $('#search').append(`
         <div class="flex items-center justify-center relative h-full w-full">
         
            <input onkeyup="searching()" id="input-search" class="h-full w-full bg-gray-500 bg-opacity-50 text-gray-400 text-xs px-2" type="text" placeholder="ค้นหา...">
            
       
          
      </div>
    `)

    // $('#input-search').focus();
}