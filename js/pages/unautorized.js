const showUnAuthorized = () => {
    const element = document.getElementById('main')
    if(!element) return
    element.innerHTML = `<div class="w-full h-full bg-black flex flex-col gap-2 justify-center items-center">
    <div class="text-lg text-gray-300">UNAUTHORIZED</div>
</div>`
}