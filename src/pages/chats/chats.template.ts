// language=Handlebars
export const chatsTemplate = `
    <div class="page chats-page">
        {{
            component (ChatSideBar)
            chats=chats
            onChangeChat=onChangeChat
        }}
        {{#if activeChat}}
            {{
                component (Chat)
                avatar=activeChat.avatar
                name=activeChat.name
                messages=messages
            }}
        {{else}}
            {{component (ChatSelectHint)}}
        {{/if}}
    </div>
`;
