// language=Handlebars
export const chatHeaderTemplate = `
    <header class="content-row-4 chat-header">
        {{
            component (Avatar)
            src=avatar
        }}
       {{
            component (Heading)
            tagName="h1"
            className="chat-header__chat-name"
            title=name
        }}
        {{
            component (IconButton)
            className="chat-header__menu-button"
            icon=(
                component (Icon)
                name="more_vert"
            )
            child=(
                component (ContextMenu)
                className="chat-header__chat-menu"
                items=items
            )
        }} 
    </header>
`;
