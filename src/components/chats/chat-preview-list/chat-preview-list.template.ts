// language=Handlebars
export const chatPreviewListTemplate = `
     <ul class="content-column-4 chat-preview-list">
        {{#each chats}}
          {{
            component (ChatPreview)
            key=@key
            id=this.id
            avatar=this.avatar
            name=this.name
            description=this.description
            unreadMessages=this.unreadMessages
            formattedTime=this.formattedTime
            isActive=this.isActive
            variant=this.variant
            onClick=../onChangeChat
          }}
        {{/each}}
    </ul>
`;
