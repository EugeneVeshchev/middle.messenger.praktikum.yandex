// language=Handlebars
export const contextMenuTemplate = `
    <ul class="content-column-4 context-menu {{className}}">
        {{#each items}}
            {{
                component (ContextMenuItem)
                icon=this.icon
                className=this.className
                title=this.title
            }}
        {{/each}}
    </ul>
`;
