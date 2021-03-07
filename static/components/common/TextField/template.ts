// language=Handlebars
export const template = `
    <div class="field {{#if variant}}field_{{variant}}{{/if}} {{className}}">
        {{#if label}}
            <label class="field__label" for="{{id}}">
                {{label}}
            </label>
        {{/if}}
        <input
                class="field__input"
                {{#if id}}id="{{id}}"{{/if}}
                {{#if required}}required="{{required}}"{{/if}}
                {{#if type}}type="{{type}}"{{/if}}
                {{#if autocomplete}}autocomplete="{{autocomplete}}"{{/if}}
                {{#if value}}value="{{value}}"{{/if}}
                name="{{name}}"
                placeholder="{{placeholder}}"
        >
        {{#if hint}}
            <p class="field__description">
                {{{hint}}}
            </p>
        {{/if}}
        
    </div>
`