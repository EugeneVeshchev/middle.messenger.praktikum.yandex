// language=Handlebars
export const fileFieldTemplate = `
    <div class="file-field {{className}}">
        <label for="{{id}}" class="file-field__label">
            {{{icon}}}
            <span>Загрузить файл с устройства</span>
        </label>
        <input
                id="{{id}}"
                name="{{name}}"
                class="file-field__input"
                type="file"
                accept="{{accept}}"
                {{#if required}}required="{{required}}"{{/if}}
                {{#if accept}}accept="{{accept}}"{{else}}accept="image/*"{{/if}}
        >
    </div>
`;
