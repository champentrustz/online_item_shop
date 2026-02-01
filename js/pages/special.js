





const animateBanner = () =>{
    animateBackground()
}

const specialCar = [
    {
        name: 'terzo',
        label: 'terzo',
        brand: 'lamborghini',
        logo: 'w-3/6 object-cover',
        car: 'h-3/6 object-cover',
        position: 'left'
    },
    {
        name: 'p1',
        label: 'p1 gtr',
        brand: 'mclaren',
        car: 'h-28 object-cover',
        logo: 'w-5/6 object-cover',
        position: 'right'
    },

]


// let animating = false
//
// const hoverItemCard = (item) =>{
//
//     if(animating) return
//
//     animating = true
//
//     anime({
//         targets: `#triangle-${item}`,
//         scale: [1,1.2],
//         // opacity: [0, 1],
//         duration: 2000,
//         complete: () =>{
//             animating = false
//         }
//     })
// }
//
// const leaveItemCard = (item) =>{
//
//     anime({
//         targets: `#triangle-${item}`,
//         scale: [1.2,1],
//         // opacity: [0, 1],
//         duration: 1000,
//     })
// }

const randomGacha = async(amount) =>{
    if(amount > 0 && amount !== ''){

        disableBtn(true)
        showGachaLoading()
        animateHideRandomWrap()
        canCloseUi = false;
        const res = await fetch("https://glorious_itemmall/random_gacha", {
            method: 'POST',
            body: JSON.stringify({
                amount : amount
            })
        });

        return await res.json()
    }
}

const rarityBg = {
    0: 'white',
    1: 'blue',
    2: 'pink',
    3: 'gold'
}

const rarityShadow = {
    0: 'rgba(255,255,255,0.3)',
    1: 'rgba(59, 130, 246,0.3)',
    2: 'rgba(217, 70, 239,0.3)',
    3: 'rgba(251, 191, 36,0.3)',
}

// const rarityShadowItem = {
//     0: 'rgba(255,255,255,1)',
//     1: 'rgba(59, 130, 246,1)',
//     2: 'rgba(217, 70, 239,1)',
//     3: 'rgba(251, 191, 36,1)',
// }

const customNotifyGacha = () =>{
    gachaRewardList.map(reward => {
        fetch("https://glorious_itemmall/set_custom_notify", {
            method: 'POST',
            body: JSON.stringify({
                name: reward.name,
                amount : reward.amount,
            })
        });
    })
}

const closeRandomContent = async() =>{
    const wrap = document.querySelector('#random-content')
    if(wrap) wrap.remove()

     mySpecialPoints = await getMySpecialPoints()

    animateShowRandomWrap()
    disableBtn(false)
    animateCarName()
    animateTriangle()
    updateMySpecialPoints()
    getMaxAmountRandom()
    canCloseUi = true;
}

const loopPrintRewardList = () =>{
    const wrap = document.querySelector('#reward-wrap')

    const mapData = gachaRewardList.sort(  (a, b) => b.rarity - a.rarity)

    let tempReward = ''

    mapData.map(reward => {
        tempReward += `
        <div class="h-40 rounded-lg reward-item flex flex-col gap-4 p-2 overflow-hidden border border-white/10" style="opacity: 0;
       ">
      
        <img class="w-full h-full absolute inset-0 m-auto" style="opacity: 0.9" src="img/${rarityBg[reward.rarity]}-door.png" />
        
         
         
         <div class="p-2 w-full aspect-square rounded-lg border border-white/10 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10 relative">
         
         
         
         <div class="w-full h-full rounded-lg border border-white/10 flex justify-center items-center z-10 relative overflow-hidden">
         
         <p class="absolute top-0 left-0 right-0 m-auto text-center text-green-500 strong-font whitespace-nowrap" >x ${reward.amount}</p>
         
      
         
          <img class="w-3/6 aspect-square z-10" src="nui://glorious_inventory/html/img/items/${reward.name}.png" onerror="this.src='nui://glorious_inventory/html/img/items/no-image.png'"/>
</div>
         
         <img id="triangle-${reward.name}" class=" w-8 h-8 absolute left-0 right-0 m-auto z-10" style="bottom: -10px" src="img/rare-${reward.rarity}.png">
         
</div>
         
         <p class="text-xs text-gray-300 whitespace-nowrap text-center z-10">${reward.label}</p>
        
</div>
        `
    })

    wrap.innerHTML = `
        <div class="w-full h-full grid grid-cols-7 content-start gap-4" style="overflow-y: auto; overflow-x: hidden " >
        ${tempReward}
</div>
        <button onclick="closeRandomContent()" class="w-28 h-12 hover:text-red-500 flex justify-center items-center space-font text-xs text-gray-300 relative">CLOSE
          <img class="h-full w-full absolute inset-0 m-auto" src="img/cyber-btn-border.png" /></button>
    `

    animateRewardItem()
}

const openDoorShowReward = (highestRarity) =>{
    animateDoorReward(highestRarity)
}



const showRandomReward = async(amount) =>{
    const element = document.querySelector('#random-content')
    element.innerHTML = `<div id="reward-wrap" class="w-full h-full bg-black bg-black bg-opacity-90 backdrop-blur-sm flex flex-col gap-10 justify-center items-center p-10"></div>`

    const fetchData = await randomGacha(amount)

    if(!fetchData.status){
        closeRandomContent()
        fetch("https://glorious_itemmall/allow_notify");
        return
    }

    gachaRewardList = fetchData.items


    const wrap = document.querySelector('#reward-wrap')
    const highestRarity = Math.max(...gachaRewardList.map(o => o.rarity))
    const selectShowReward = gachaRewardList.filter(reward => reward.rarity === highestRarity)



    wrap.innerHTML = `
        <button id="reward-card-initial" onclick="openDoorShowReward(${highestRarity})" class="w-40 h-52  relative flex justify-center items-center rounded-lg" style="opacity: 0;
}">

<img class="lightning-gif h-full object-cover absolute inset-0 m-auto z-20" style="scale: 1.4; opacity: 0" src="img/lightning-2.gif" />
         <img class="lightning-gif h-full object-cover absolute inset-0 m-auto z-20" style="rotate: 180deg; scale: 1.4; opacity: 0" src="img/lightning-2.gif" />
         
        <div class="w-full h-full flex justify-center items-center rounded-lg overflow-hidden relative">
         <img class="w-3/5 aspect-square z-10" style="opacity: 0.3" src="nui://glorious_inventory/html/img/items/${selectShowReward[0].name}.png" onerror="this.src='nui://glorious_inventory/html/img/items/no-image.png'"/>
            <img id="reward-door-left" class=" w-full h-full absolute inset-0 m-auto z-10" src="img/${rarityBg[0]}-door-left.png" />
            <img id="reward-door-right" class=" w-full h-full absolute inset-0 m-auto z-10" src="img/${rarityBg[0]}-door-right.png" />
</div>

        
      
 
           
</button>
        
        <p id="open-text" class="space-font text-xs text-white" style="opacity: 0">CLICK TO OPEN</p>

    `

    animateRewardCardInitial(highestRarity > 1)

}

const randomReward = (amount) =>{

    if(mySpecialPoints < amount){return}

    const wrap = document.querySelector('#content-wrap')
    wrap.innerHTML += `
    <div id="random-content" class="w-full h-full absolute inset-0 m-auto" style="z-index: 400"></div>
    `
    showRandomReward(amount)
}

const showRareItemList = () =>{
    const element = document.querySelector('#rare-item-list');
    let temp = ''

    specialCar.map((car, index) => {

        let nameElement = ''
        let name2Element = ''
        splitName(car.label).map((e, index) => {
            nameElement += `<div class="car-name" style="opacity: 0">${e === ' ' ? '<div>&nbsp;</div>' : e}</div>`
        })

        splitName(car.brand).map((e, index) => {
            name2Element += `<div class="car-name-2" style="opacity: 0">${e === ' ' ? '<div>&nbsp;</div>' : e}</div>`
        })

        temp += `
        <div class="w-3/6 h-4/6 flex relative">
         <div class="w-full h-full shrink-0 flex relative bg-neutral-950 rounded-lg shadow-md shadow-black border border-white/10">
         <img class="car-img ${car.car} absolute z-20" src="img/${car.name}-car.png" style="bottom : -30px; ${car.position === 'left' ? 'left: -50px' : ''} ${car.position === 'right' ? 'right: -50px' : ''} ; opacity: 0" />
        <div class="rounded-lg h-full w-full shrink-0 bg-black bg-opacity-50 relative overflow-hidden flex">
        
        ${car.position === 'right' ? `<div class="w-8 shrink-0 flex justify-center items-center h-full overflow-hidden">
        <div class="car-name-2 w-full h-full flex justify-center items-center text-gray-300 space-font" style="writing-mode: vertical-rl;
text-orientation: mixed; transform: rotate(180deg); font-size: 10px; z-index: 100; opacity: 0">${name2Element}</div>
</div>` : ``}
        
        <div class="w-full h-full z-10 relative flex flex-col justify-center relative p-2">
        
        <div class="w-28 shrink-0 h-5/6 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10 rounded-lg overflow-hidden absolute ${car.position === 'left' ? 'right-0' : 'left-0'} top-0 bottom-0 m-auto shadow-md shadow-black border border-white/10">
        <img class="red-door-left w-full object-cover absolute left-0 top-0 bottom-0 m-auto z-0" src="img/red-door-left.png" />
        <img class="red-door-right w-full object-cover absolute right-0 top-0 bottom-0 m-auto z-0" src="img/red-door-right.png" />
     
       <img class="${car.logo}" src="img/${car.brand}-logo.png" />
</div>
        
       <div class=" space-font text-2xl text-gray-300 ${car.position === 'left' ? 'justify-start' : 'justify-end'} px-4  flex">
        ${nameElement}
        </div>
        
<!--        <div class="w-14 h-full absolute left-0 overflow-hidden flex items-end justify-start">-->
<!--        <div class="trapezoid"></div>-->
<!--</div>-->
        
        
</div>

${car.position === 'left' ? `<div class="w-8 shrink-0 flex justify-center items-center h-full overflow-hidden">
        <div class="car-name-2 w-full h-full flex justify-center items-center text-gray-300 space-font" style="writing-mode: vertical-rl;
text-orientation: mixed; transform: rotate(180deg); font-size: 10px; z-index: 100; opacity: 0">${name2Element}</div>
</div>` : ``}

        
      
         <img class="banner-car w-full object-cover absolute z-0 inset-0 m-auto" style="opacity: 0.02" src="img/${car.name}-bg.png" />
         
</div>
        
</div>

</div>
       
        `
    })


    element.innerHTML = temp

    animateBanner()
}

const showItemList = () =>{
    const element = document.querySelector('#item-list');
    let temp = ''
    const filter = specialGasha.rewards.filter(gasha => gasha.rarity !== 3).sort((a, b) => b.rarity - a.rarity);
    filter.map(gasha => {
        temp += `
        <div class="rounded-lg h-40 shrink-0 bg-neutral-900 rounded-lg shadow-md overflow-hidden shadow-black border border-white/10 relative flex flex-col gap-4 p-2">
        <img class="w-full h-full absolute inset-0 m-auto" style="opacity: 0.7" src="img/${rarityBg[gasha.rarity]}-door.png" />
        
         
         
         <div class="p-2 w-full aspect-square rounded-lg border border-white/10 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10 relative">
         
         
         
         <div class="w-full h-full rounded-lg border border-white/10 flex justify-center items-center z-10 relative overflow-hidden">
         
         <p class="absolute top-0 left-0 right-0 m-auto text-center text-green-500 strong-font whitespace-nowrap" >x ${gasha.amount}</p>
         
        
         
          <img class="w-3/6 aspect-square z-10" src="nui://glorious_inventory/html/img/items/${gasha.name}.png" onerror="this.src='nui://glorious_inventory/html/img/items/no-image.png'"/>
</div>
         
         <img id="triangle-${gasha.name}" class=" w-8 h-8 absolute left-0 right-0 m-auto z-10" style="bottom: -10px" src="img/rare-${gasha.rarity}.png">
         
</div>
         
         <p class="text-xs text-gray-300 whitespace-nowrap text-center z-10">${gasha.label}</p>
        
</div>
        `
    })

    element.innerHTML = temp
}

const getMySpecialPoints = async() =>{
    const res = await fetch("https://glorious_itemmall/get_special_points");
    return await res.json();
}

const updateMySpecialPoints = () =>{
    const wrap = document.querySelector('#my-special-points')
    if(!wrap) return
    wrap.innerHTML = `POINTS: ${mySpecialPoints}`
}

const getMaxAmountRandom = () =>{

    const wrap = document.querySelector('#second-random-btn-wrap')


    if(mySpecialPoints < 10){
        wrap.innerHTML = `
         <button onclick="randomReward(10)" class="btn-submit w-28 h-10 hover:text-amber-300 flex justify-center items-center text-sm text-gray-300 relative" disabled>
        สุ่ม 10 ครั้ง
        <img class="h-full w-full absolute inset-0 m-auto" src="img/cyber-btn-border.png" />
        `
    }
    else if(mySpecialPoints >= 10 && mySpecialPoints < 100){
        wrap.innerHTML = `
         <button onclick="randomReward(10)" class="btn-submit w-28 h-10 hover:text-amber-300 flex justify-center items-center text-sm text-gray-300 relative">
        สุ่ม 10 ครั้ง
        <img class="h-full w-full absolute inset-0 m-auto" src="img/cyber-btn-border.png" />
        `
    }else if(mySpecialPoints >= 100){
        wrap.innerHTML = `
         <button onclick="randomReward(100)" class="btn-submit w-28 h-10 hover:text-amber-300 flex justify-center items-center text-sm text-gray-300 relative">
        สุ่ม 100 ครั้ง
        <img class="h-full w-full absolute inset-0 m-auto" src="img/cyber-btn-border.png" />
        `
    }
}


const showSpecialPage = async() =>{

    disableBtn(true)

    const element = document.querySelector('#main-content');
    element.classList.remove('p-10')
    element.classList.add('p-4')

    mySpecialPoints = await getMySpecialPoints()

    // element.innerHTML = `
    // <div class="w-full h-full flex justify-center items-center text-xl text-green-500 space-font">POINTS: ${mySpecialPoints}</div>
    // `


    element.innerHTML = `
    <div  class="w-full h-full flex gap-4 relative overflow-hidden">



    <div id="content-wrap" class="w-full h-full flex flex-col rounded-lg overflow-hidden bg-neutral-950 gap-2 relative">



    <div id="random-wrap" class="w-full h-16 bg-black bg-opacity-90  absolute bottom-0 flex flex-col gap-1 justify-center items-center" style="z-index: 500; opacity: 0">

<div class="w-full flex justify-center items-center gap-4">
     <button onclick="randomReward(1)" class="btn-submit w-28 h-10 hover:text-amber-300 flex justify-center items-center text-sm text-gray-300 relative">
        สุ่ม 1 ครั้ง
        <img class="h-full w-full absolute inset-0 m-auto" src="img/cyber-btn-border.png" />

</button>
        <div id="second-random-btn-wrap" class=""></div>

</button>
</div>

</div>


    <div  class="w-full h-3/6 relative overflow-hidden ">

        <div class=" w-full h-20 absolute bottom-0 flex flex-col gap-2 justify-center items-center" >
          <img class="gasha-banner w-full h-20 absolute inset-0 m-auto z-0" style="opacity: 0.2" src="img/special-banner.png"/>
          <img class="w-12 h-12 absolute inset-0 m-auto z-10 neon-triangle" style="opacity: 0" src="img/neon-triangle.png" />
          <img class="h-full object-cover absolute inset-0 m-auto z-10" style="opacity: 0.5" src="img/border-hud.png" />

          <p id="special-gasha-text" class="text-gray-400 space-font text-lg z-10">SPECIAL GASHAPON</p>

          <div id="my-special-points" class="space-font opacity-0 text-lg  absolute inset-0 m-auto w-full h-full flex justify-center items-center" style="z-index: 100; color: #00ffe6;
    opacity: 0;
  letter-spacing: 0.02em;
  text-shadow: 0 0 0.1em #fff;">POINTS: ${mySpecialPoints}</div>
</div>


        <div id='rare-item-list' class="w-full h-full flex gap-4 p-2"></div>

</div>
    <div  class="w-full h-3/6 relative overflow-hidden">

    <div id="item-list" class="w-full h-full px-2 overflow-auto grid grid-cols-7 gap-4" style="opacity: 0.1"></div>
</div>
</div>

</div>
    `
    animateShowSpecialText()
    showItemList()
    showRareItemList()
    updateMySpecialPoints()
    getMaxAmountRandom()
}