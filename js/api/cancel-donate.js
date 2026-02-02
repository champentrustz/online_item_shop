const cancelDonate = async() =>{
    const res = await fetch("http://103.91.190.10:30120/axm_donate/query?token=id&event=qrcancel");
    return await res.json();
}