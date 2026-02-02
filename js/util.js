const keys = {
    ESC: 27,
    F11: 122
}

const renderItemList = (item) =>{


    const onePerDayData = todayItems.find(limit => limit === item.onePerDayKey)
    const onePerWeekData = weekItems.find(limit => limit === item.onePerWeekKey)


    let allowShowLimit = item.onePerDayKey !== undefined || item.onePerWeekKey !== undefined
    const foundInLimit = onePerDayData !== undefined || onePerWeekData !== undefined
    let disabledBtn = false


    let textLimit = ''

    if(allowShowLimit){
        if(foundInLimit){
            textLimit = '1/1'
            disabledBtn = true
        }else{
            textLimit = '0/1'
        }
    }

    return `  <button onclick='showPurchaseBar(${JSON.stringify(item)}); playClickingSound()'  class="w-full 
   h-40 2xl:h-48 flex flex-col  justify-center gap-2  bg-gradient-to-b from-gray-700/20 to-gray-800/20 items-center btn-item overflow-hidden p-1.5 relative"
  ${disabledBtn && 'disabled'}>
 
<!--<div class="w-full h-full absolute inset-0 m-auto g-gold"></div>-->

    <div class="w-full p-0.5 text-2xs text-gray-300 absolute top-0 left-0 right-0 m-auto flex justify-end items-center px-1 z-10">
    ${textLimit}

</div>
       
      
       <div class="h-full w-full p-px flex justify-center items-center overflow-hidden relative">
       
        <div class="h-full aspect-square flex justify-center items-center shrink-0 z-10  "
        >
         <img class="aspect-square h-4/6 img-item" src="img/wallet.png"/>
</div>

   
       
</div>
       
       ${item.name === gashaName || selectedMenu === 'menu-weekly' ? ` <div class="w-full flex justify-center items-center h-8 shrink-0 absolute left-0 right-0 text-2xs text-red-400"
  style="bottom: 45px">
        ${item.name === gashaName || selectedMenu === 'menu-weekly' ? `หมด 16/01/2026 06:00` : ``}
</div>` : ``}
       
      

       
       <div class="h-12 shrink-0 w-full text-gray-300 flex  justify-center items-center  flex-col  z-10">

 <div class="flex justify-center items-center text-gray-300 overflow-hidden text-xs">${item.label} ${item.day !== undefined ? `[${item.day}] วัน` : ''}</div>
 
     <div class="text-amber-200 strong-font text-base" style="font-style: italic">${numberWithCommas(item.price)} ฿</div>

</div>


    
    
 
       
</button>`
}

const playTerzoSound = () =>{
    // fetch("https://glorious_sound/play", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sound: 'terzo-sound',
    //     })
    // });
}

const playAppearSound = () =>{
    // fetch("https://glorious_sound/play", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sound: 'open-gacha',
    //     })
    // });
}

const playP1zoSound = () =>{
    // fetch("https://glorious_sound/play", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sound: 'p1-sound',
    //     })
    // });
}

const playChangeRaritySound = () =>{
    // fetch("https://glorious_sound/play", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sound: 'change-rarity',
    //     })
    // });
}

const playClickingSound = () =>{
    // fetch("https://glorious_sound/play", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sound: 'choose',
    //     })
    // });
}

const splitName = (name) => {
    return name.split("");
}

const disableBtn = (state) =>{
    const list = document.querySelectorAll('.btn-submit');
    for(let i = 0; i < list.length; i++){
        list[i].disabled = state;
    }
}


const getDonateValue = (score) => {

    if (score < 200) return { rank: 'unranked', max: 200 };
    else if (score >= 200 && score < 400) return { rank: 'iron_1', max: 400 };
    else if (score >= 400 && score < 600) return { rank: 'iron_2', max: 600 };
    else if (score >= 600 && score < 1000) return { rank: 'iron_3', max: 1000 };

    else if (score >= 1000 && score < 1400) return { rank: 'bronze_1', max: 1400 };
    else if (score >= 1400 && score < 1800) return { rank: 'bronze_2', max: 1800 };
    else if (score >= 1800 && score < 2600) return { rank: 'bronze_3', max: 2600 };
    else if (score >= 2600 && score < 3400) return { rank: 'silver_1', max: 3400 };

    else if (score >= 3400 && score < 4200) return { rank: 'silver_2', max: 4200 };
    else if (score >= 4200 && score < 5800) return { rank: 'silver_3', max: 5800 };
    else if (score >= 5800 && score < 7400) return { rank: 'gold_1', max: 7400 };
    else if (score >= 7400 && score < 9000) return { rank: 'gold_2', max: 9000 };

    else if (score >= 9000 && score < 12200) return { rank: 'gold_3', max: 12200 };
    else if (score >= 12200 && score < 15400) return { rank: 'platinum_1', max: 15400 };
    else if (score >= 15400 && score < 18600) return { rank: 'platinum_2', max: 18600 };
    else if (score >= 18600 && score < 25000) return { rank: 'platinum_3', max: 25000 };

    else if (score >= 25000 && score < 31400) return { rank: 'diamond_1', max: 31400 };
    else if (score >= 31400 && score < 37800) return { rank: 'diamond_2', max: 37800 };
    else if (score >= 37800 && score < 50600) return { rank: 'diamond_3', max: 50600 };
    else if (score >= 50600 && score < 63400) return { rank: 'immortal_1', max: 63400 };

    else if (score >= 63400 && score < 76200) return { rank: 'immortal_2', max: 76200 };
    else if (score >= 76200 && score < 101800) return { rank: 'immortal_3', max: 101800 };
    else if (score >= 101800) return { rank: 'glorious', max: 9999999 };



}

const modifyTimer = (time) => {
    time = time / 1000
    let minutes = Math.floor(time / 60);
    minutes < 10 ? minutes = '0'+minutes : minutes;
    let seconds = time - minutes * 60;
    seconds = Math.floor(seconds)
    seconds < 10 ? seconds = '0'+seconds : seconds;

    if(minutes < 1){
        return(`${minutes}:${seconds}`)
    }else{
        return(`${minutes}:${seconds}`)
    }

}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function getParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

const closeWindow = () =>{
    if(canCloseUi){
        $.get("https://glorious_itemmall/closeMallWindow");
    }
}



$(document).on('keydown', (e) => {
    if (e.which === keys.ESC || e.which === keys.F11) {
        closeWindow()
    }
});
