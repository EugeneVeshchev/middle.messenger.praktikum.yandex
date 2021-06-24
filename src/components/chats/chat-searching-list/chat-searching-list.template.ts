// language=Handlebars
export const chatSearchingListTemplate = `
     <ul class="content-column-4 {{className}}">
        {{#each chats}}
            {{{this}}}
            <hr class="divider"/>
        {{/each}}
    </ul>
`;
