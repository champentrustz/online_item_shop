const getMyPoints = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=user:getAmount`);
    return await res.json();
}