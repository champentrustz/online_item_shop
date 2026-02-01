// const cleanupAnime = () =>{
//     anime.remove('#my-special-points')
//     anime.remove('.banner-car')
//     anime.remove('#special-gasha-text')
//     anime.remove('.neon-triangle')
//     anime.remove('#item-list')
//     anime.remove('.gasha-banner')
//     anime.remove('.car-img')
//     anime.remove('.car-name')
//     anime.remove('.car-name-2')
//     anime.remove('.red-door-left')
//     anime.remove('.red-door-right')
// }

const animatePurchaseSuccess = () => {

    const groupedAnimation = anime.timeline({});
    groupedAnimation
        .add({
            targets: '.purchase-title',
            scale: [2, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeInOutQuad',
        }, 0)

        .add({
            targets: '.purchase-detail',
            opacity: [0, 1],
            duration: 300,
            easing: 'easeInQuad',
            complete: () =>{
                setTimeout(() => {
                    canCloseUi = true
                    closeConfirmPopup()
                    selectMenu(selectedMenu);
                },1000)
            }
        }, 300)
}

const animateBackground = () => {

    doLandingAnimate = true

    anime({
        targets: '#my-special-points',
        opacity: [0]
    });

    anime({
        targets: '.banner-car',
        easing: 'easeInQuad',
        opacity: [0.02, 0.6],
        duration: 1000,
        delay: 1000,
        complete: () => {
            animateDoor()
        }
    });
}

const animateShowRandomWrap = () => {
    anime({
        targets: '#random-wrap',
        easing: 'easeInQuad',
        opacity: [0, 1],
        translateY: [300, 0],
        duration: 1000,
    });
}

const animateHideRandomWrap = () => {
    anime({
        targets: '#random-wrap',
        easing: 'easeOutQuad',
        opacity: [1, 0],
        translateY: [0, 300],
        duration: 1000,
    });
}

const animateRewardItem = () => {
    anime({
        targets: '.reward-item',
        opacity: [0, 1],
        scale: [2, 1],
        delay: function (element, index) {
            return index * 150
        },
        complete: () => {
            fetch("https://glorious_itemmall/allow_notify");
        }
    });

    customNotifyGacha()
}

const animateShowSpecialText = () => {



    anime({
        targets: '#special-gasha-text',
        easing: 'easeInQuad',
        opacity: [1]
    });
}

const animateHideSpecialText = () => {
    anime({
        targets: '#special-gasha-text',
        easing: 'easeOutQuad',
        opacity: [1, 0],
        duration: 1000,
        complete: () => {
            disableBtn(false)
            animateShowMyPoints()
        }
    });
}

const animateTriangle = () => {
    anime({
        targets: '.neon-triangle',
        easing: 'easeInQuad',
        opacity: [0, 0.7],
        duration: 3000,
    })

    anime({
        targets: '.neon-triangle',
        // rotate: [360],
        scale: [2, 1],
        duration: 3000,
        loop: true,
        endDelay: 1000 * 4,
    })
}

const animateShowMyPoints = () => {
    anime({
        targets: '#my-special-points',
        easing: 'easeInQuad',
        opacity: [0, 1]
    });
}

const animateItemList = () => {
    anime({
        targets: '#item-list',
        easing: 'easeInQuad',
        opacity: [0.1, 1],
        duration: 1500,
    })


}

const animateGashaBanner = () => {
    anime({
        targets: '.gasha-banner',
        easing: 'easeInQuad',
        opacity: [0.2, 1],
        duration: 1500,
    })
}

const animateAfterDoor = () => {
    animateCarName()
    animateCarImg()
    animateGashaBanner()
    animateTriangle()
    animateItemList()
    animateShowRandomWrap()
    animateHideSpecialText()

}

const animateCarImg = () => {
    anime({
        targets: '.car-img',
        easing: 'easeInQuad',
        opacity: [0, 1],
        duration: 1500,
    })
}

const animateCarName = () => {
    anime({
        targets: '.car-name',
        scale: [2, 1],
        opacity: [0, 1],
        loop: true,
        endDelay: 1000 * 5,
        delay: function (element, index) {
            return index * 100
        },
    })

    anime({
        targets: '.car-name-2',
        opacity: [0, 0.7],
        delay: function (element, index) {
            return index * 100
        },
    });


}


const animateDoor = () => {

    playTerzoSound()
    playP1zoSound()

    anime({
        targets: '.red-door-left',
        easing: 'easeOutQuad',
        translateX: -45,
        duration: 2000,
    });

    anime({
        targets: '.red-door-right',
        easing: 'easeOutQuad',
        translateX: 45,
        duration: 2000,
        complete: () => {
            animateAfterDoor()
        }
    });


}


const shakeAnim = (t) => {


    const settings = {
        duration: 500,
        xMax: 10,
        easing: 'easeInOutSine',
    };
    const xMax = settings.xMax;
    return anime({
        targets: t,
        easing: settings.easing,
        duration: settings.duration,
        translateX: [
            {
                value: xMax * -1,
            },
            {
                value: xMax,
            },
            {
                value: xMax / -2,
            },
            {
                value: xMax / 2,
            },
            {
                value: 0
            },
            {
                value: xMax / 2,
            },
            {
                value: xMax / -2,
            },
            {
                value: xMax,
            },
            {
                value: xMax * -1,
            },
        ],
        loop: true,
    });
};

const animateDoorReward = (highestRarity) => {

    if (!allowOpenInitial) return

    allowOpenInitial = false

    initialCardAnimate.reset()

    const leftDoor = document.querySelector('#reward-door-left')
    const rightDoor = document.querySelector('#reward-door-right')


    shakeAnim('#reward-card-initial')

    let startRarity = 0

    const intervalTime = setInterval(() => {

        const cardWrap = document.querySelector('#reward-card-initial')
        cardWrap.style.boxShadow = `0 0 30px 15px ${rarityShadow[startRarity]}`
        leftDoor.src = `img/${rarityBg[startRarity]}-door-left.png`
        rightDoor.src = `img/${rarityBg[startRarity]}-door-right.png`
        playChangeRaritySound()

        if (startRarity >= highestRarity) {


            clearInterval(intervalTime)

            setTimeout(() => {

                anime.remove('#reward-card-initial')
                leftDoor.src = `img/${rarityBg[highestRarity]}-door-left.png`
                rightDoor.src = `img/${rarityBg[highestRarity]}-door-right.png`



                anime({
                    targets: '#reward-door-left',
                    easing: 'easeOutQuad',
                    translateX: -60,
                    duration: 3000,
                });

                anime({
                    targets: '#reward-door-right',
                    easing: 'easeOutQuad',
                    translateX: 60,
                    duration: 3000,
                    complete: () => {
                        loopPrintRewardList()
                    }
                });
            },1500)


        }


        startRarity += 1

    }, 1000)


}

const animateOpenText = () => {
    anime({
        targets: '#open-text',
        easing: 'easeInQuad',
        opacity: [0, 1],
        complete: () => {
            allowOpenInitial = true
        }
    });
}

let initialCardAnimate

const animateBounceInitialCard = () => {


    initialCardAnimate = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 500,
        loop: true,

    })

    initialCardAnimate.add({
        targets: '#reward-card-initial',
        translateY: [0, 10],
    })

    initialCardAnimate.add({
        targets: '#reward-card-initial',
        translateY: [10, 0],
    });
}

const showLightningEffect = () => {
    anime({
        targets: '.lightning-gif',
        // easing: 'easeInQuad',
        opacity: [0, 1],
    })
}

const animateRewardCardInitial = (lighting) => {

    const percent = Math.floor(Math.random() * 100) + 1

    anime({
        targets: '#reward-card-initial',
        // easing: 'easeOutQuad',
        opacity: [0, 1],
        translateY: [300, 0],
        duration: 1500,
        complete: () => {
            animateOpenText()
            animateBounceInitialCard()
            if (lighting) {
                if(percent > 0 && percent <= 70) {
                    showLightningEffect()
                }
            }
        }
    });
}