// language=Handlebars
export const template = `
     <ul class="content_column-4 chat-preview-list">
        {{#each chats}}
            {{{this}}}
            <hr class="divider"/>
        {{/each}}
    </ul>
`