// language=Handlebars
export const chatMessageTemplate = `
    <div class="chat-message {{#if isSelf}}chat-message_self{{/if}}">
        <div class="chat-message__content">
            <p class="chat-message__text">
                {{text}}
            </p>
            {{#if image}}
                <img class="chat-message__img" src="{{image}}" alt="message-image"/>
            {{/if}}
            <div class="chat-message__badges">
                {{{time}}}
            </div>
        </div>
    </div>
`
