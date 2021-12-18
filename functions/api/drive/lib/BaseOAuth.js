class BaseOAuth {

    constructor() {
        this.base_api = ''
        this.token_url = ''
        this.auth_url = ''
        this.scope = ''
        this.host = ''
        this.redirect_uri = 'https://oauth.atcaoyufei.workers.dev'
        this.query = new URLSearchParams()
        this.kv = null
    }

    async authorize() {
        const driveId = this.query.get('drive_id')
        const driveName = this.query.get('drive_name')
        const client_id = this.query.get('client_id')
        const driveType = this.query.get('drive_type')
        const client_secret = this.query.get('client_secret')

        let params = {
            client_id: client_id,
            redirect_uri: this.redirect_uri,
            scope: this.scope
        }

        if (client_id && client_secret && driveId) {
            await this.kv(driveId, JSON.stringify(Object.assign({}, params, {
                name: driveName,
                client_secret: client_secret,
                driveType: driveType,
                id: driveId,
                driveId: ''
            })))
        }

        params['prompt'] = 'consent'
        params['state'] = `${this.host}/code/${driveId}`
        params['response_type'] = 'code'

        const searchParams = new URLSearchParams(params)
        return `${this.auth_url}?${searchParams.toString()}`
    }
}