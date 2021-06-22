// language=Handlebars
export const formFieldsTemplate = `
    <div class="form-fields content_column-4 {{className}}">
        {{#each fields}}
            {{{this}}}
        {{/each}}
    </div>
`;
