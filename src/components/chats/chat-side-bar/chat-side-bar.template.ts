// language=Handlebars
export const chatSideBarTemplate = `
    <aside class="content-column-4 chat-side-bar">
        <nav class="content-row-4 chat-side-bar__header">
          {{
              component (Avatar)
              size="small"
          }}
          <form class="form chat-side-bar__search-form" {{event "submit" onSearch}}>
            {{
                component (TextField)
                id="search"
                name="search"
                placeholder="Поиск"
                required=true
                variant="primary"
            }}
          </form>
            
          {{
            component (Link)
            href="/profile"
            className="profile-link"
            variant="primary"
            title="Профиль"
            rightIcon=(
                component (Icon)
                className="link__icon link__icon_right"
                name="keyboard_arrow_right"
            )
          }}
        </nav>

        <hr class="divider"/>

        <div class="chat-side-bar__content">
            {{#if isSearching}}
                {{
                    component (ChatSearchingList)
                    chats=chats
                    onChangeChat=onChangeChat
                }}
            {{else}}
                {{
                    component (ChatPreviewList)
                    chats=chats
                    onChangeChat=onChangeChat
                }}
            {{/if}}
        </div>
    </aside>
`;
