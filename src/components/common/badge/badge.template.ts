// language=Handlebars
export const badgeTemplate = `
    <span class="badge {{#if variant}}badge_{{variant}}{{/if}} {{className}}">{{value}}</span>
`
