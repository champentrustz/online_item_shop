const cancelDonate = async() =>{

    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=qrcancel`);
    return await res.json();
}