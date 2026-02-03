const refillDetail = [
    // {
    //     index: 1,
    //     price: 10,
    //     points: 10,
    // },
    {
        index: 1,
        price: 150,
        points: 150,
    },
    {
        index: 2,
        price: 300,
        points: 310,
    },
    {
        index: 3,
        price: 500,
        points: 520,
    },
    {
        index: 4,
        price: 1000,
        points: 1050,
    },
    {
        index: 5,
        price: 1500,
        points: 1600,
    },
    {
        index: 6,
        price: 3000,
        points: 3250,
    },
    {
        index: 7,
        price: 5000,
        points: 5500,
    },
    {
        index: 8,
        price: 10000,
        points: 11200,
    }
]

const bonusPoints = [
    {
        price: 300,
        bonus: 10,
    },
    {
        price: 500,
        bonus: 20,
    },
    {
        price: 1000,
        bonus: 50,
    },
    {
        price: 1500,
        bonus: 100,
    },
    {
        price: 3000,
        bonus: 250,
    },
    {
        price: 5000,
        bonus: 500,
    },
    {
        price: 10000,
        bonus: 1200,
    }
]

let refillData = {
    url: null,
    data: {}
}

let timeCoolDown = 1000 * 60 * 5;
let failedCoolDown = 1000 * 60;

let timeInterval

let statusRefill = null

let intervalScan


const calculatePoints = (amount) => {
    amount = parseInt(amount);
    const sortedBonusPoints = [...bonusPoints].sort((a, b) => a.price - b.price);

    let bonus = 0;

    for (const point of sortedBonusPoints) {
        if (amount >= point.price) {
            bonus = point.bonus;
        } else {
            break;
        }
    }

    const totalPoints = amount + bonus; // Ensure numerical calculation
    return {
        totalPoints: totalPoints, // Correct value as a number
        bonus: bonus,
    };
};

const resetFailed = () => {
    failedCoolDown = 1000 * 60
}

const resetData = () => {
    refillData = {
        url: null,
        data: {}
    }
    timeCoolDown = 1000 * 60 * 5
}

const fetchRefill = async (amount) => {
    return await $.post("https://glorious_itemmall/refill", JSON.stringify({
        amount: amount
    }))

}

// const setIntervalCheckScan = () => {
//     clearInterval(intervalScan)
//     intervalScan = setInterval(async () => {
//         statusRefill = await $.get("https://glorious_itemmall/confirm_refill");
//         if (statusRefill === true) {
//             confirmRefill();
//         }
//     }, 1000 * 5)
// }


const successRefill = async () => {

    cancelDonate()
    clearInterval(timeInterval);

    const element = document.getElementById('main-content')

    if(!element) return;

    myPoints = await getMyPoints()
    showMyPoints();

    $('#main-content').html(`
<div class="w-full h-full flex flex-col gap-2 justify-center items-center">
    <p class="strong-font text-4xl text-green-400" style="font-style: italic">SUCCESSFUL</p>
    <p class="text-gray-300 text-xs">โดเนทสำเร็จ</p></div> 
`);


    timeInterval = setTimeout(() => {
        resetData();
        if(selectedMenu === 'menu-refill') showRefill();
    }, 5000)
}


const setCheckScan = () => {

    clearInterval(timeInterval)

    timeInterval = setInterval(async() => {
        const resDonateData = await getDonateData()



        if(resDonateData.refId && resDonateData.status) {
            successRefill()
        }

    }, 1000 * 5)
}

const setFailedDelay = (duration) => {
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        if (failedCoolDown <= 0) {
            clearInterval(timeInterval);
            statusRefill = true
            resetFailed();
            if(selectedMenu === 'menu-refill') showRefill();

        }
        const element = document.querySelector('#timer')
        if (element) element.innerHTML = `${modifyTimer(failedCoolDown)}`
        failedCoolDown = failedCoolDown - 1000

    }, 1000)
}

const cancelRefill = () =>{
    clearInterval(timeInterval);
    cancelDonate()
    showLoadingPage()
    setTimeout(() => {
        resetData();
        showRefill();
    },2000)

}

const showScanPage = () => {


    if (refillData.url === '' || refillData.url === null) {
        console.log('error refill');
        return;
    }


    $('#main-content').html(`
<div class="w-full h-full flex flex-col justify-center items-center gap-2">
    
     <div class="h-full flex justify-center items-center overflow-hidden">
      <img class="object-cover h-full" src="${refillData.url}"  />
</div>

 <button onclick="cancelRefill()" class="px-2 shrink-0 h-10 bg-red-400 bg-opacity-10 
       hover:bg-opacity-20 text-xs text-red-400 flex justify-center items-center border border-red-400/30">ยกเลิกการเติมเงิน</button>
       
           <div class="text-red-400 flex h-10 shrink-0 w-full items-center justify-center shrink-0 text-xs">* ระบบจะทำการเติมพ้อยท์อัตโนมัติหลังจากสแกน (อย่าปิดหน้าต่าง) หากพบปัญหากรุณาติดต่อที่ดิสคอร์ด</div>


</div>

`);

    setCheckScan();
    // setIntervalCheckScan()

}

const selectRefillPoints = async (index) => {

    // console.log('statusRefill => ',statusRefill)
    //
    // if (!statusRefill) return;


    const price = document.getElementById('input-price').value

    if(price === '' || price < 10 || price >= 1000000) return

    showLoadingPage();

    // const data = refillDetail.find(data => data.index === index);

    const getPointsData = calculatePoints(price)


    const res = await doDonate(price);



    // const urlTest = 'https://cdn.discordapp.com/attachments/1294567556610396170/1329754801130704927/89373561_891187224673298_1180981969060626432_n.jpg?ex=678b7e2a&is=678a2caa&hm=8659847a01dd77b2a9aa782a5701624699c095a87b06ca3dc5ec13915bba7483&'



    refillData = {
        url: res.url,
        data: {
            price: price,
            points: getPointsData.totalPoints,
            bonus: getPointsData.bonus,
        }
    }

    showScanPage();
}

const showRefillList = () => {

    const element = document.getElementById('refill-content')

    const listBonusPoints = () =>{
        let temp = ''
        bonusPoints.map(points =>{

            temp += `<div class="w-full h-8 shrink-0 flex items-center text-xs text-gray-300">
        <div class="w-4/6 h-full flex  items-center">ขั้นต่ำ ${points.price} บาท</div>
         <div class="h-full aspect-square flex justify-center items-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 aspect-square text-amber-200">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

</div>
        <div class="w-2/6 h-full flex  items-center gap-2">โบนัส <span class="text-green-400">${points.bonus}</span></div>
</div>`
        })
        return temp
    }

    element.innerHTML = `<div class="w-full h-32 border-t border-b border-white/10 shrink-0 flex justify-center items-center flex-col gap-2">
            <div class="text-amber-200 text-xs">จำนวนพ้อยท์ที่ได้รับ 1 บาท = 1 พ้อยท์</div>
            <input id="input-price" class="w-60 h-7 bg-gray-500 bg-opacity-50 px-2 text-xs text-gray-300" type="number" placeholder="ใส่จำนวนเงิน ขั้นต่ำ 10 บาท" />
            <button onclick="selectRefillPoints()" class="w-28 h-7 bg-amber-200 bg-opacity-10 border border-amber-200/30 
            flex justify-center hover:bg-opacity-20 items-center text-xs text-amber-200">ยืนยัน</button>
</div>
    <div class="w-full h-full flex overflow-hidden flex-col items-center">
        <div class="w-full h-9 shrink-0 flex justify-center items-center text-xs text-gray-300">อัตราโบนัสพ้อยท์</div>
        <div class="w-60 overflow-hidden flex flex-col bg-black bg-opacity-50 p-2">
        ${listBonusPoints()}
</div>
</div>
`

//     refillDetail.map(data => {
//
//         const bonus = data.points - data.price
//
//         $('#refill-content').append(`<button onclick="selectRefillPoints(${data.index})" class="relative hover:bg-opacity-30 bg-black bg-opacity-20  h-32 shrink-0 w-full flex flex-col justify-center items-center gap-2 relative p-2">
//
//  <div class="absolute inset-0 m-auto bg-gray-500 bg-opacity-20"></div>
//
//  <div class="w-full h-full absolute inset-0 m-auto g-gold"></div>
//
//       <div class="w-full h-px absolute top-0 left-0 right-0 m-auto bg-white bg-opacity-50"></div>
//  <div class="w-full h-px absolute bottom-0 left-0 right-0 m-auto bg-white bg-opacity-50"></div>
//   <div class="w-px h-full absolute bottom-0 left-0 top-0 m-auto bg-white bg-opacity-50"></div>
//    <div class="w-px h-full absolute bottom-0 right-0 top-0 m-auto bg-white bg-opacity-50"></div>
//
//
//
// <div class="w-full h-1/6 flex justify-center items-center gap-2 text-xs text-gray-300 z-10"><span class="text-green-400">+ ${numberWithCommas(bonus)}</span> โบนัส</div>
//
// <div class="w-full h-4/6 flex justify-center items-center gap-2 relative z-10">
//
//     <img class="w-3/6 object-cover absolute inset-0 m-auto" style="opacity: 0.3" src="img/circle-3.png" />
//
//     <p class="text-2xl text-amber-300 z-10 strong-font" style="font-style: italic">${numberWithCommas(data.points)}</p>
//
// </div>
//
// <div class="w-full h-1/6 flex justify-center items-center text-xs text-gray-400 z-10">${numberWithCommas(data.price)} บาท</div>
//
//
// </button>`);
//
//     })

}

const getMyDonate = async() =>{
    const res = await fetch('https://glorious_itemmall/get_my_donate')
    return await res.json()
}

const showRefill = async() => {

    const element = document.getElementById('main-content')

    if(!element) return;

    clearInterval(timeInterval);

    showLoadingPage();

    const resDonateData = await getDonateData()

    if(resDonateData.refId){
        const resDonate = await doDonate(1)
        refillData.url = resDonate.url
    }else{
        refillData.url = null
    }

    statusRefill = resDonateData.status

    // failedCoolDown = res.delay

    // console.log('statusRefill => ',statusRefill,' failedCoolDown => ',failedCoolDown,' refillData.url => ',refillData.url)


    // const myDonateData = await getMyDonate()
    //
    // const myScore = myDonateData.totalPointsUsed
    // const donateValue = getDonateValue(myScore)
    // const donateText = donateValue.rank.replace('_', ' ').toUpperCase();
    //
    // const percent = ((myScore * 100) / donateValue.max).toFixed(2);

    $('#main-content').html(`




<div class="w-full h-6 shrink-0 flex gap-2 items-center ">
    <div class="h-full flex gap-2 items-center text-xs text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

   เลือกพ้อยท์เติมเงิน
</div>



<div class="grow justify-end h-full flex gap-2 items-center ">
<div class="h-full w-auto flex items-center gap-2 justify-start">
    <img class="h-5/6 aspect-square" src="img/wallet.png" />
    <p class="text-xs text-red-400">ไม่สามารถโดเนทผ่าน True Wallet ได้ กรุณาโดเนทผ่าน Discord</p>
</div>


 
</div>
   
</div>




<div class="w-full h-full overflow-hidden flex flex-col" id="refill-content">
</div>
`);

    // if (!statusRefill) {
    //     setFailedDelay();
    // }

    if (refillData.url === null) {
        showRefillList();
    } else {
        showScanPage();
    }

}