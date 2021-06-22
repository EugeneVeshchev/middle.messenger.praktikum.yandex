// language=Handlebars
export const linkTemplate = `
    <a
            href="{{href}}"
            class="link {{#if variant}}link_{{variant}}{{/if}} {{className}}"
            type="{{type}}"
    >
        {{{leftIcon}}}
        {{title}}
        {{{rightIcon}}}
    </a>
`
