// language=Handlebars
export const signInTemplate = `
    <main class="page sign-in-page">
        <form class="form sign-in-page__form">
            <div class="content-column-4 form__column form__column_center">
                {{{logotype}}}
            </div>
            {{{heading}}}

            {{{fields}}}
            
            <div class="content-column-4 form__column">
                {{#each actions}}
                    {{{this}}}
                {{/each}}
        </form>
    </main>
`;
