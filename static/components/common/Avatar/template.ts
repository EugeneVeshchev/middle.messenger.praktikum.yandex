// language=Handlebars
export const template = `
    <div class="avatar {{#if size}}avatar_{{size}}{{/if}} {{#if isClickable}}avatar_clickable{{/if}} {{className}}"
    ></div>
`