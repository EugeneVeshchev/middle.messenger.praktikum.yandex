const searchInput = document.getElementById('search');
const searchPanel = document.querySelector('.chats-page__search-panel')

searchInput?.addEventListener('focus', () => {
    searchPanel?.classList.add('chats-page__search-panel_active')
})
searchInput?.addEventListener('blur', () => {
    searchPanel?.classList.remove('chats-page__search-panel_active')
})
