// language=Handlebars
export const template = `
    <main class="content_column-4 chat-message-list">
        {{#each messages}}
            {{{this}}}
        {{/each}}
    </main>
`