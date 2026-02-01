const changeMenuState = (state) =>{
    menu.map((menu)=>{
        $('#'+menu.id).prop('disabled', state);
    })
}