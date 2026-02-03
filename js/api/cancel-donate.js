const cancelDonate = () =>{

    if(myToken === null) return

    fetch(`${apiUrl}/query?token=${myToken}&event=qrcancel`);

}