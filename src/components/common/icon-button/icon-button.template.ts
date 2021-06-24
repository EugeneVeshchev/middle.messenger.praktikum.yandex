// language=Handlebars
export const iconButtonTemplate = `
    <button
            class="icon-button {{#if variant}}icon-button_{{variant}}{{/if}} {{className}}"
            {{#if type}}type="{{type}}"{{/if}}
    >
        {{{icon}}}
        {{{child}}}
    </button>
`;
