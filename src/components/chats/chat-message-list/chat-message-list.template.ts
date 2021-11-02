// language=Handlebars
export const chatMessageListTemplate = `
    <main class="content-column-4 chat-message-list">
        {{#each messages}}
            {{
                component (ChatMessage)
                isSelf=this.isSelf
                text=this.text
                image=this.image
                formattedTime=this.formattedTime
            }}
        {{/each}}
    </main>
`;
