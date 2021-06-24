// language=Handlebars
export const contextMenuTemplate = `
    <ul class="content-column-4 context-menu {{className}}">
        {{#each items}}
            {{{this}}}
        {{/each}}
    </ul>
`;
