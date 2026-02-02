const purchaseItem = async(id, amount) =>{

    if(myToken === null) return

    if(id === undefined) return

    if(amount === undefined) return

    console.log(id, amount)

    // const res = await fetch(`${apiUrl}/query?token=${myToken}&event=shop:buy&key=${id}&count=${amount}`);
    // return await res.json();
}