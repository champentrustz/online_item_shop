const showUnAuthorized = () => {
    const element = document.getElementById('main')
    if(!element) return
    element.innerHTML = `<div class="min-w-full min-h-screen bg-black flex flex-col gap-2 justify-center items-center">
    <div class="text-lg text-gray-300">UNAUTHORIZED</div>
</div>`
}