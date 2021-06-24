// language=Handlebars
export const chatPreviewTemplate = `
    <li class="chat-preview {{#if isActive}}chat-preview_active{{/if}}">
        {{{avatar}}}
        
        <div class="chat-preview__texts">
            <div class="chat-preview__name">
                {{name}}
            </div>
            <p class="chat-preview__messages">
                {{description}}
            </p>
        </div>
        <div class="chat-preview__badges">
            {{#if badge}}{{{badge}}}{{/if}}
            {{{timeBadge}}}
        </div>
    </li>
`;
