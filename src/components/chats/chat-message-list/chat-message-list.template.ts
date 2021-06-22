// language=Handlebars
export const chatMessageListTemplate = `
    <main class="content_column-4 chat-message-list">
        {{#each messages}}
            {{{this}}}
        {{/each}}
    </main>
`
