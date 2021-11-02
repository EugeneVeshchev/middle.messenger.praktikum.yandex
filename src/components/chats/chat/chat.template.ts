// language=Handlebars
export const chatTemplate = `
    <section class="content-column-4 chat">
        {{
            component (ChatHeader)
            name=name
            avatar=avatar
        }}
        <hr class="divider"/>
        {{
            component (ChatMessageList)
            messages=messages
        }}
        <hr class="divider"/>
        {{component (ChatNewMessage)}}
    </section>
`;
