const avatarElement = document.querySelector('.profile-page__avatar .avatar');
const avatarBackdrop = document.querySelector('.profile-page__avatar .backdrop');
const avatarDialog = document.querySelector('.profile-page__avatar .dialog');
const avatarDialogCloseButton = document.querySelector('.profile-page__avatar .dialog__close-btn');

avatarElement?.addEventListener('click', () => {
    avatarBackdrop?.classList.add('backdrop_active')
    avatarDialog?.classList.add('dialog_active');
})

avatarDialogCloseButton?.addEventListener('click', () => {
    avatarBackdrop?.classList.remove('backdrop_active')
    avatarDialog?.classList.remove('dialog_active');
})
