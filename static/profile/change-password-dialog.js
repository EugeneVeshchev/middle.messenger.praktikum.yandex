const changeProfileButton = document.querySelector('.profile-page__change-profile .button');
const changeProfileBackdrop = document.querySelector('.profile-page__change-profile .backdrop');
const changeProfileDialog = document.querySelector('.profile-page__change-profile .dialog');
const changeProfileDialogCloseButton = document.querySelector('.profile-page__change-profile .dialog__close-btn');

changeProfileButton?.addEventListener('click', () => {
    changeProfileBackdrop?.classList.add('backdrop_active')
    changeProfileDialog?.classList.add('dialog_active');
})

changeProfileDialogCloseButton?.addEventListener('click', () => {
    changeProfileBackdrop?.classList.remove('backdrop_active')
    changeProfileDialog?.classList.remove('dialog_active');
})
