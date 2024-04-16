import qrcode = require('qrcode-terminal');
import { Client, LocalAuth } from 'whatsapp-web.js';
export class WppClientService {
  private client: Client;
  constructor() {
    this.initialize();
  }
  private initialize() {
    console.log('inicial WhatsApp Autenticated...');
    this.client = new Client({
      authStrategy: new LocalAuth(),
      webVersionCache: {
        type: 'remote',
        remotePath:
          'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
      },
    });

    this.client.once('ready', () => {
      console.log('Client is ready!');
      //this.sendText('5511995189029@c.us', 'oi');
    });

    // When the client received QR-Code
    this.client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    // Start your client
    this.client.initialize();
  }

  async sendText(to: string, body: string) {
    this.client.sendMessage(to, body);
  }
}
