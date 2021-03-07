// language=Handlebars
export const template = `
    <main class="page sign-up-page">
    <form class="form sign-up-page__form">
        <div class="content_column-4 form__column form__column_center">
            {{{logotype}}}
        </div>
        
        {{{heading}}}

        {{{fields}}}
        
        <div class="content_column-4 form__column">
            {{#each actions}}
                {{{this}}}
            {{/each}}
        </div>
    </form>
</main>
`