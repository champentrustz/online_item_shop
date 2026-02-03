const getDonateData = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=status`);
    const data = await res.json();
    return data.response
}