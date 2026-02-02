const getPurchaseHistory = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=shop:getPurchaseHistory`);
    return await res.json();
}