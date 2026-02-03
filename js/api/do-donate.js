const doDonate = async(amount) =>{

    if(myToken === null) return

    amount = parseInt(amount)

    if(amount <= 0) return

    const res = await fetch(`${apiUrl}/query?token=${myToken}&event=qrcode&amount=${amount}`);
    const data = await res.json();
    return data.response
}