const getPlayerName = async() =>{
    if(myToken === null) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=playerName`);
    return await res.json();

}