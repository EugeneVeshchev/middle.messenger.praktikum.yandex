// language=Handlebars
export const template = `
    <form class="form {{className}}" novalidate>
        {{#each children}}
            {{{this}}}
        {{/each}}
    </form>
`