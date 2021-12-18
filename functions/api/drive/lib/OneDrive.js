class OneDrive extends BaseOAuth{

    constructor() {
        super();
        this.base_api = 'https://graph.microsoft.com/v1.0'
        this.token_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
        this.auth_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
        this.redirect_uri = 'https://oauth.atcaoyufei.workers.dev'
        this.scope = 'offline_access User.Read Sites.ReadWrite.All'
        this.config = {}
        this.query = new URLSearchParams()
        this.limit = this.query.get('limit') || 20
        this.host = ''
        this.file_fields = 'id, name, size, folder, audio, video, photo, image, lastModifiedDateTime'
    }
}