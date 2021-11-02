// language=Handlebars
export const chatNewMessageTemplate = `
    <form class="content-row-4 chat-new-message">
      {{
        component (IconButton)
        type="button"
        icon=(
          component (Icon)
          name="attach_file"
        )
        className="chat-new-message__send-button"
        child=(
          component (ContextMenu)
          className="chat-new-message__send-menu"
          items=items
        )
      }}
      {{
        component (TextField)
        id="message"
        name="message"
        autocomplete="off"
        placeholder="Введите сообщение"
        required="true"
        className="chat-new-message__send-field"
        variant="primary"
      }}
      
      {{
        component (IconButton)
        icon=(
            component (Icon)
            name="send"
        )
        type="submit"
        variant="primary"
      }}
    </form>
`;
