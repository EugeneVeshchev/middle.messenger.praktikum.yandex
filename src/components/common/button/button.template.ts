// language=Handlebars
export const buttonTemplate = `
    <button
            class="button {{#if variant}}button_{{variant}}{{/if}} {{className}}"
            {{#if type}}type="{{type}}"{{/if}}"
    >
        {{{title}}}
    </button>
`
