import { create, Whatsapp } from "venom-bot";

export class WppClientService {
    private client: Whatsapp
    constructor() {
        this.initialize();
    }
    private initialize() {

        const qr = (base64Qrimg: string) => {
            console.log();
        }

        const status = (statusSession: string) => {
            //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
        }

        const start = (client: Whatsapp) => {
            this.client = client
        }

        create('ws-bot', qr, status)
        .then((client) => start(client))
        .catch((error => console.error(error)))
    }

    async sendText(to: string, body: string) {
        this.client.sendText(to, body);
    }
}
