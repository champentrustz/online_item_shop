const getItemAllTest = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=GlobalState&key=itemmall_list_server`);
    const data = await res.json();
    return data.response.data
}