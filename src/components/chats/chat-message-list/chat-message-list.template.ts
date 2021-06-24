// language=Handlebars
export const chatMessageListTemplate = `
    <main class="content-column-4 chat-message-list">
        {{#each messages}}
            {{{this}}}
        {{/each}}
    </main>
`;
