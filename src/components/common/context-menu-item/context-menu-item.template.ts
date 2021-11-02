// language=Handlebars
export const contextMenuItemTemplate = `
    <li class="context-menu-item {{className}}">
        {{
            component (Icon)
            name=icon
        }}
        <span class="context-menu-item__text">{{{title}}}</span>
    </li>
`;
