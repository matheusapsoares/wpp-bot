import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { IndicatorsService } from "src/indicators/indicators.service";
import { MicrophonesService } from "src/microphones/microphones.service";
import { WppClientService } from "src/WppClient.service";

@Injectable()
export class TaskSender {
    constructor(
        private readonly indicatorsService: IndicatorsService,
        private readonly microphonesService: MicrophonesService, 
        private wppClient: WppClientService) {
        
    }
    
    @Cron(CronExpression.EVERY_DAY_AT_3PM)
    async handler() {
        const now = new Date()
        const date = now.toISOString().split('T')[0];

        const indicators = await this.indicatorsService.findByDate(date); // busca todos os indicadores dia dia
        for (const indicator of indicators) {
            const msgOi = `Olá ${indicator.name} tudo bem ? 🙂`;
            await this.wppClient.sendText(`5511${indicator.number}@c.us`,msgOi) // envia mensagem de cumprimento
            
            const msg = `Você está designado como *Indicador* hoje!\nCaso você não consiga cumprir, por favor me avise ou avise o irmão coordenador para providenciar um substituto.\nSeu companheiro será o irmão *${indicator.partnerName}*!\n\n*Obs:* Fique atento as seguintes orientações! \n- Chegar com pelo menos 20 minutos antes da reunião começar para recepcionar os irmãos e visitantes. \n- Atenção com os portões de entrada, principalmente com o portão do estacionamento dos fundos.\n\nObrigado! qualquer dúvida pode me chamar! 😉`
            await this.wppClient.sendText(`5511${indicator.number}@c.us`,msg) // envia a mensagem de aviso
            
            // atualiza o banco com a data e que foi enviado com sucesso
            const now = new Date()
            indicator.send = true;
            indicator.date_send = now;
            this.indicatorsService.update(indicator.id, indicator);
            
            console.log(`[LOG - Indicador] Mensagem enviada para ${indicator.name}(${indicator.number}) com sucesso! ${now.toLocaleString()}`)
        }

        const microphones = await this.microphonesService.findByDate(date); // busca todos os microfones dia dia
        for (const microphone of microphones) {
            const msgOi = `Olá ${microphone.name} tudo bem ? 🙂`;
            await this.wppClient.sendText(`5511${microphone.number}@c.us`,msgOi) // envia mensagem de cumprimento
            
            const msg = `Você está designado como *Microfone Volante* hoje!\nCaso você não consiga cumprir, por favor me avise para providenciar um substituto.\nSeu companheiro será o irmão *${microphone.partnerName}*!\n\n*Obs:* Fique atento as seguintes orientações! \n- Um pouco antes de iniciar a parte com uso de microfone verifique se os mesmos estão lá atrás no balcão, se não dirija-se a sala do som.\n- Os microfones são extremamente sensíveis, cuidado ao manusear.\n- O microfone deve estar na frente do irmão(a) que está comentando com uma distancia +/- 10 a 15 centímetros da boca.\n\nObrigado! qualquer dúvida pode me chamar! 😉`
            await this.wppClient.sendText(`5511${microphone.number}@c.us`,msg) // envia a mensagem de aviso
            
            // atualiza o banco com a data e que foi enviado com sucesso
            const now = new Date()
            microphone.send = true;
            microphone.date_send = now;
            this.microphonesService.update(microphone.id, microphone);
            
            console.log(`[LOG - Microfone Volante] Mensagem enviada para ${microphone.name}(${microphone.number}) com sucesso! ${now.toLocaleString()}`)
        }
    }
}   