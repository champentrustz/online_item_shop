const getMyPoints = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=user:getAmount`);
    const data = await res.json();
    console.log(data);
    return data.response.amount
}