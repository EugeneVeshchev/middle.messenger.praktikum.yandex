// language=Handlebars
export const template = `
    <aside class="content_column-4 chat-side-bar">
        <nav class="content_row-4 chat-side-bar__header">
            {{{userAvatar}}}
            <form class="form chat-side-bar__search-form">
                {{{searchField}}}
            </form>
            
            {{{profileLink}}}
        </nav>

        <hr class="divider"/>

        <div class="chat-side-bar__content">
            {{#if isSearching}}
                {{{chatSearchingList}}}
            {{else}}
                {{{chatPreviewList}}}
            {{/if}}
        </div>
    </aside>
`