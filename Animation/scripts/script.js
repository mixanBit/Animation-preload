let animationLogo = document.querySelector('.animation_logo');
            modal = document.querySelector('.modal')
function anim() {
    setTimeout(() => {
        animationLogo.classList.add('animation_active1')
    }, 500)

    setTimeout(() => {
        animationLogo.classList.add('animation_active2')
    }, 1500)

    setTimeout(() => {
        modal.classList.add('modal_off')
    }, 3500)
}

anim()
