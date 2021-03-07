// language=Handlebars
export const template = `
    <main class="profile-page__main">
        <section class="profile-page__avatar">
            {{{avatar}}}
            {{{avatarDialog}}}
        </section>
        <div class="content_column-4 profile-page__fields">
            {{#each fields}}
                {{{this}}}
                <hr class="divider"/>
            {{/each}}
        </div>
        <div class="content_column-4 profile-page__actions">
            <section class="profile-page__change-profile">
                {{{changeProfileButton}}}
                {{{changeProfileDialog}}}
            </section>

            <hr class="divider"/>
            <section class="profile-page__change-password">
                {{{changePasswordButton}}}
                {{{changePasswordDialog}}}
            </section>
        </div>
    </main>
`