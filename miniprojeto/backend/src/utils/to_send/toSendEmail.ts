import nodemailer, { Transporter } from 'nodemailer';
import configEmai from '../../cofig/configEmail';

class MailProvider {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(configEmai);
    }

    
    async sendEmail(emailRecipient: string, nameUser: string, user: string, passwordUser: string, nameUserAdm: string): Promise<boolean> {
        try {
            const info = await this.transporter.sendMail({
                // Usamos o operador '!' ou fallback para garantir que o user do config não é undefined
                from: `"Site teste" <${configEmai.auth.user}>`,
                to: emailRecipient,
                subject: "Bem-vindo!",
                text: `Olá ${nameUser}, Você foi atualizado!`,
                html: `
                    <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px;">
                        <h1 style="color: #2c3e50;">Olá, ${nameUser}!</h1>
                        <p>O usuario ${nameUserAdm} atualizou o seu usuario</p>
                        
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px dashed #27ae60; margin: 20px 0;">
                            <p style="margin: 0; font-size: 14px;">Estes são seus dados de acesso:</p>
                            <p style="margin: 5px 0;"><strong>User: </strong> ${user}</p>
                            <p style="margin: 5px 0;"><strong>Senha: </strong> <span style="font-family: monospace; font-size: 18px; color: #e74c3c;">${passwordUser}</span></p>
                        </div>

                        <p style="font-size: 12px; color: #7f8c8d;">Dica: Recomendamos alterar sua senha no primeiro acesso.</p>
                        <hr style="border: 0; border-top: 1px solid #eee;" />
                        <small>Este é um e-mail automático do sistema Pet Ts, por favor não responda.</small>
                    </div>
                `,
            });

            console.log("E-mail enviado: %s", info.messageId);
            return true;
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            return false;
        }
    }
}

export default new MailProvider();