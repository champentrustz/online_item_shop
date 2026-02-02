const showLoadingPage = () =>{

    const content = document.querySelector('#main-content');

    content.innerHTML = `<div class="w-full h-full flex justify-center items-center flex-col gap-4">
    <div class="loader"></div>
    <p class="text-gray-400 text-xs">กำลังโหลด...</p>
</div>`

}

const showLoading = (id) =>{

    const content = document.getElementById(`${id}`)

    content.innerHTML = `<div class="bg-neutral-950 min-w-full min-h-screen flex justify-center items-center flex-col gap-4">
    <div class="loader"></div>
    <p class="text-gray-400 text-xs">กำลังโหลด...</p>
</div>`

}

const showGachaLoading = () =>{
    const element = document.querySelector('#reward-wrap');
    element.innerHTML = `
    <div class="loader"></div>
    `
}