const purchaseItem = async(id, amount) =>{

    if(myToken === null) return

    if(id === undefined) return

    if(amount === undefined) return


    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=shop:buy&key=${id}&count=${amount}`);
    const data = await res.json();
    return data.response.status
}