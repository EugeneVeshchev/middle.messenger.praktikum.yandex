// language=Handlebars
export const dialogTemplate = `
    <div class="backdrop {{#if isOpen}}backdrop_active{{/if}}">
        <div class="dialog {{#if isOpen}}dialog_active{{/if}} {{className}}">
            {{{child}}}
        </div>
    </div>
`;
