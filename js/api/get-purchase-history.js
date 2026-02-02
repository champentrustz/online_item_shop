const getPurchaseHistory = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=shop:getPurchaseHistory`);
    const data = await res.json();
    return data.response
}