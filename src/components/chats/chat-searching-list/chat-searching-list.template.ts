// language=Handlebars
export const chatSearchingListTemplate = `
     <ul class="content-column-4 {{className}}">
        {{#each chats}}
            {{
                component (ChatPreview)
                id=this.id
                avatar=this.avatar
                name=this.name
                description=this.description
                unreadMessages=this.unreadMessages
                formattedTime=this.formattedTime
                isActive=this.isActive
                variant="small"
                onClick=../onChangeChat
            }}
            <hr class="divider"/>
        {{/each}}
    </ul>
`;
