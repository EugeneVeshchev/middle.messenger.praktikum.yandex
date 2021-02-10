const changePasswordButton = document.querySelector('.profile-page__change-password .button');
const changePasswordBackdrop = document.querySelector('.profile-page__change-password .backdrop');
const changePasswordDialog = document.querySelector('.profile-page__change-password .dialog');
const changePasswordDialogCloseButton = document.querySelector('.profile-page__change-password .dialog__close-btn');

changePasswordButton?.addEventListener('click', () => {
    changePasswordBackdrop?.classList.add('backdrop_active')
    changePasswordDialog?.classList.add('dialog_active');
})

changePasswordDialogCloseButton?.addEventListener('click', () => {
    changePasswordBackdrop?.classList.remove('backdrop_active')
    changePasswordDialog?.classList.remove('dialog_active');
})
