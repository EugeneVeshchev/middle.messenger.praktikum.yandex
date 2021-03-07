// language=Handlebars
export const template = `
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