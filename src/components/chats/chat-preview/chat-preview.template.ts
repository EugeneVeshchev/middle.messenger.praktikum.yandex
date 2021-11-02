// language=Handlebars
export const chatPreviewTemplate = `
    <li class="chat-preview {{#if isActive}}chat-preview_active{{/if}}" {{event "click" onClick}}>
        {{
            component (Avatar)
            src=avatar
            size=variant
        }}
        
        <div class="chat-preview__texts">
            <div class="chat-preview__name">
                {{name}}
            </div>
            <p class="chat-preview__messages">
                {{description}}
            </p>
        </div>
        <div class="chat-preview__badges">
            {{#if unreadMessages}}
                {{
                    component (Badge)
                    variant="primary"
                    value=unreadMessages
                }}
            {{/if}}
            {{
                component (TimeBadge)
                value=formattedTime
            }}
        </div>
    </li>
`;
