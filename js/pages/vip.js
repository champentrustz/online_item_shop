const vipConfig = [
    {
        name: 'basic',
        en_label: 'VIP',
        th_label: 'วีไอพี',
        item: 'glorious_rp_vip',
        details: [
            'กรอบแชท',
            'เอฟเฟกต์ฆ่า',
            'สกินอาวุธ',
            'เปลี่ยนรูปแบบโทรศัพท์',
            'เพิ่มจำนวนสูงสุดไอเทมงานขาวในกระเป๋า',
            'เพิ่มจำนวนสูงสุดอาหารเลี้ยงสัตว์',
            'โพรเซสเร็วขึ้น +100%',
            'ได้รับเหรียญออนไลน์ +50%',
            'ได้รับเหรียญ AFK +50%',
            'ได้รับเลเวลแบทเทิลพาส +50%',
            'คราฟเร็วขึ้น +100%',
            'คราฟโดยใช้วัตถุดิบจากในตู้',
        ]
    },
    // {
    //     name: 'standard',
    //     en_label: 'VIP Standard',
    //     th_label: 'มาตรฐาน',
    //     item: 'vip_standard',
    //     details: [
    //         'ยศ Discord VIP Standard',
    //         'วาร์ปหาเพื่อน',
    //         'ปรับเวลา',
    //         'ปรับสภาพอากาศ',
    //         'กรอบทวิตเตอร์',
    //         'กรอบฆ่า',
    //         'เอฟเฟคฆ่า',
    //         'สกินอาวุธ',
    //         'เบิกจักรยาน',
    //         'ตั้งข้อความบนหัว',
    //         'อัพโหลดพรีเซ็ตตัวละคร',
    //         'ได้รับเหรียญออนไลน์ +50%'
    //     ]
    // },
    // {
    //     name: 'premium',
    //     en_label: 'VIP Premium',
    //     th_label: 'พรีเมี่ยม',
    //     item: 'vip_premium',
    //     details: [
    //         'ยศ Discord VIP Premium',
    //         'วาร์ปหาเพื่อน',
    //         'ปรับเวลา',
    //         'ปรับสภาพอากาศ',
    //         'กรอบทวิตเตอร์',
    //         'กรอบฆ่า',
    //         'เอฟเฟคฆ่า',
    //         'สกินอาวุธ',
    //         'เบิกจักรยาน',
    //         'ตั้งข้อความบนหัว',
    //         'อัพโหลดพรีเซ็ตตัวละคร',
    //         'ได้รับเหรียญออนไลน์ +50%',
    //         'ได้รับ EXP ตัวละคร +50%',
    //         'แบทเทิลพาส EXP +50%',
    //     ]
    // },
]

const animateItems = () =>{
    anime({
        targets: '.btn-item',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 200,
        delay: anime.stagger(30),
        easing: 'easeInOutQuad'
    });


}

const animatePackage = () =>{
    anime({
        targets: '.package-list',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 200,
        delay: anime.stagger(70),
        easing: 'easeInOutQuad'
    });


}

const animateVipPanel = () =>{
    anime({
        targets: '.vip-package-panel',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 200,
        delay: anime.stagger(100),
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.text-vip',
        opacity: [0, 1],
        duration: 200,
        delay: anime.stagger(120),
        easing: 'easeInOutQuad'
    });

}

function convertMsToDays(ms) {
    const oneDayMs = 24 * 60 * 60 * 1000; // จำนวนมิลลิวินาทีใน 1 วัน
    const days = Math.floor(ms / oneDayMs); // ใช้ Math.floor เพื่อปัดลง
    return days; // คืนค่าจำนวนวัน (อาจเป็น 0 หากน้อยกว่า 1 วัน)
}

const processPurchaseVip = async(id) =>{

    closeConfirmPopup()

    const listBtn = document.querySelectorAll('.btn-purchase-vip');
    for (let i = 0; i < listBtn.length; i++) {
        listBtn[i].disabled = true;
    }

    const btnElement = document.getElementById(`btn-purchase-vip-${id}`)

    btnElement.innerHTML = `<svg aria-hidden="true" class="w-3.5 h-3.5 text-gray-500 animate-spin fill-amber-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
<span class="text-xs">กำลังซื้อ...</span>`

    const res = await purchaseItem(id, 1)


    closePopupVip()


    if(res.status){
        showPurchaseSuccess()
        showMyPoints()
    }



}


const listVipPanel  = (vipItems, vipTimes) =>{
    let temp = ''


    vipItems.map((item) => {


        const vipDetail = vipConfig.find((config) => config.item === item.item)


        const listVipDetails = () =>{
            let temp = ''
            vipDetail.details.map(detail => {
                temp += `<div class="w-full shrink-0 flex items-center text-xs text-gray-300">- ${detail}</div>`
            })
            return temp
        }


        const expiration = Math.floor((item.items[0].expirationTime / 24) / 60)


        temp += `  
  <div class="flex flex-col gap-2 justify-center items-center">
   <div class="vip-package-panel w-60 2xl:w-72 h-[470px] 2xl:h-[530px] bg-gray-500 bg-opacity-30 backdrop-blur-sm gap-2 border border-white/10 flex flex-col items-center py-3 px-2 relative"
    >
  
  <div class="w-full flex flex-col justify-center items-center">
    <p class="text-xs text-gray-400 shrink-0 z-10">${item.label}</p>
    
        <p class="text-lg strong-font text-gray-300 shrink-0 z-10" style="font-style: italic">${vipDetail.en_label}</p>
        
      
               
               <p class="text-amber-300 strong-font text-2xl shrink-0 z-10" style="font-style: italic">${numberWithCommas(item.price)}฿</p>
               
               <p class="text-xs text-gray-300 shrink-0 z-10"><span class="text-green-400">${expiration}</span> วัน</p>
</div>
  
  
               
             
             
              
              <div class="w-full h-full flex flex-col gap-2 overflow-hidden z-10">
              
              <div class="w-full h-full flex flex-col bg-black bg-opacity-40 p-2 overflow-auto ">
                    ${listVipDetails()}
</div>
              
               <button onclick="showPopupConfirm(processPurchaseVip, ${item.id})" id="btn-purchase-vip-${item.id}" class="btn-purchase-vip w-full h-8 flex justify-center items-center text-xs gap-2 shrink-0 hover:bg-opacity-30 border border-white/10 bg-amber-300 bg-opacity-20  text-amber-300">ซื้อแพคเกจ</button>
</div>
              
             
            
</div>
   
  
</div>
 
`
    })

    return temp
}

const closePopupVip = () =>{
    const element = document.getElementById('popup-wrap')
    if(element) element.remove()
}

const showPopupVip = async() => {

    closePopupVip()

    const vipItems = itemAll[menuKey['menu-vip']]



    // const res2 = await fetch('https://glorious_itemmall/get_item_time')
    // const vipTime = await res2.json()


    const main = document.getElementById('main');

    let divNode = document.createElement("div");

    divNode.id = 'popup-wrap';
    divNode.classList.add('min-h-screen', 'min-w-full', 'absolute', 'inset-0', 'm-auto', 'flex', 'justify-center', 'items-center', 'bg-black', 'bg-opacity-90')
    divNode.style.zIndex = '999';

    // const findTime = vipTime.find(vipTime => vipTime.name === 'glorious_rp_vip')
    // let remainingDay = null
    //
    // if(findTime !== undefined){
    //     remainingDay = convertMsToDays(findTime.duration)
    // }

    divNode.innerHTML = `

        <div  class="min-h-screen min-w-full flex justify-center items-center relative">
       
            <div class=" h-full flex flex-col justify-center items-center gap-10 relative">
            
                <div class="w-6 h-6 absolute top-0 right-0 m-auto flex justify-center items-center">
                       <button onclick="closePopupVip()" class="w-6 h-6 flex justify-center items-center text-gray-400 hover:text-gray-300">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

</button>
</div>
                
                
                    <div class="flex flex-col flex justify-center items-center" style="line-height: 1.6rem">
                       <p class="text-3xl text-amber-300 strong-font" style="font-style: italic">VIP PACKAGE</p>
                    
                    <p class="text-xs text-gray-300">แพคเกจ VIP</p>
                    <p class="text-xs text-red-400">VIP เปิดใช้งานทันทีเมื่อซื้อ</p>
</div>
                 
                
                <div class="w-full  flex justify-center items-center gap-3">
                
                ${listVipPanel(vipItems)}
            
</div>



</div>
          


   
    </div>
      

    `

    main.append(divNode)
    animateVipPanel()

}