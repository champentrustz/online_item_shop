const doDonate = async() =>{
    const res = await fetch("http://103.91.190.10:30120/axm_donate/query?token=id&event=qrcode&amount=500");
    return await res.json();
}