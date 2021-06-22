// language=Handlebars
export const avatarTemplate = `
    <div class="avatar {{#if size}}avatar_{{size}}{{/if}} {{#if isClickable}}avatar_clickable{{/if}} {{className}}"
    ></div>
`
