// language=Handlebars
export const template = `
    <ul class="content_column-4 context-menu {{className}}">
        {{#each items}}
            {{{this}}}
        {{/each}}
    </ul>
`