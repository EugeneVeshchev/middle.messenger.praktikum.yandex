// language=Handlebars
export const chatPreviewListTemplate = `
     <ul class="content-column-4 chat-preview-list">
        {{#each chats}}
            {{{this}}}
            <hr class="divider"/>
        {{/each}}
    </ul>
`;
