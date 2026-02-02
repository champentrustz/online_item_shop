const purchaseItem = async() =>{
    const res = await fetch("http://103.91.190.10:30120/axm_donate/query?token=id&event=shop:buy&key=keyitem&count=1");
    return await res.json();
}