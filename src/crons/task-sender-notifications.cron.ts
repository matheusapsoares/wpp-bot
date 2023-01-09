import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { IndicatorsService } from "src/services/indicators.service";
import { MicrophonesService } from "src/services/microphones.service";
import { PersonsService } from "src/services/persons.service";
import { WppClientService } from "src/services/WppClient.service";

@Injectable()
export class TaskSenderNotifications {
    constructor(
        private readonly indicatorsService: IndicatorsService,
        private readonly microphonesService: MicrophonesService,
        private readonly personsService: PersonsService,
        private wppClient: WppClientService,

    ) {}

    @Cron(CronExpression.EVERY_DAY_AT_6PM)
    async handler() {
        const now = new Date()
        const date = now.toISOString().split('T')[0];

        const coordinator = await this.personsService.findByPosition('coordinator');
        const indicators  = await this.indicatorsService.findByDate(date, true); // busca todos os indicadores dia dia
        const microphones = await this.microphonesService.findByDate(date, true); // busca todos os microfones dia dia
        if(indicators.length > 0) {
            /* Envia as mensagens de alerta */
            const msgOi = `Olá ${coordinator.name} tudo bem ? 🙂`;
            await this.wppClient.sendText(`5511${coordinator.number}@c.us`,msgOi) // envia mensagem de cumprimento
    
            const msg = `Estes são os irmãos designados para a reunião de hoje!\n\n*Indicadores*: ${indicators[0].name} e ${indicators[0].partnerName}\n*Microfones Volantes*: ${microphones[0].name} e ${microphones[0].partnerName}\n\nOs irmãos já foram avisados!`;
            await this.wppClient.sendText(`5511${coordinator.number}@c.us`,msg) // envia mensagem
        }
    }
}