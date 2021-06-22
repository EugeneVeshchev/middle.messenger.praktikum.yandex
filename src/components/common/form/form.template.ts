// language=Handlebars
export const formTemplate = `
    <form class="form {{className}}" novalidate>
        {{#each children}}
            {{{this}}}
        {{/each}}
    </form>
`
