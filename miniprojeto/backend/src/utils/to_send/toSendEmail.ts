import nodemailer, { Transporter } from 'nodemailer';
import configEmai from '../../cofig/configEmail';

class MailProvider {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(configEmai);
    }

    
    async sendEmailUpdate(emailRecipient: string, nameUser: string, user: string, passwordUser: string, nameUserAdm: string): Promise<boolean> {
        try {
            const info = await this.transporter.sendMail({
                // Usamos o operador '!' ou fallback para garantir que o user do config não é undefined
                from: `"Sistema Pet Ts" <${configEmai.auth.user}>`,
                to: emailRecipient,
                subject: "Atualização!",
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

    async sendEmailAdm(emailRecipient: string, userAdmin: string, user: string, email: string): Promise<boolean>{
        try {
            const info = await this.transporter.sendMail({
                from: `"Sistema Pet Ts" <${configEmai.auth.user}>`,
                to: emailRecipient,
                subject: `📢 Solicitação de Admin: ${user}`,
                text: `Olá ${userAdmin}, o usuário ${user} (${email}) solicitou permissões de administrador.`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #dcdcdc; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                        
                        <div style="background-color: #3498db; padding: 25px; text-align: center;">
                            <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Solicitação de Permissão</h2>
                        </div>
                        
                        <div style="padding: 30px;">
                            <p style="font-size: 16px; margin-bottom: 20px;">Olá, <strong>${userAdmin}</strong>.</p>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                O usuário abaixo solicitou a elevação de seu nível de acesso para <strong>Administrador</strong> no sistema.
                            </p>
                            
                            <div style="border: 1px solid #e1e1e1; border-radius: 6px; background-color: #fcfcfc; padding: 20px; margin: 25px 0;">
                                <h3 style="margin-top: 0; color: #2c3e50; font-size: 18px; border-bottom: 2px solid #3498db; display: inline-block; padding-bottom: 5px;">Dados do Solicitante</h3>
                                
                                <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #7f8c8d; width: 80px;">Nome:</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #333;">${user}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #7f8c8d;">E-mail:</td>
                                        <td style="padding: 8px 0; font-weight: 600; color: #3498db;">${email}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #7f8c8d;">Data:</td>
                                        <td style="padding: 8px 0; color: #333;">${new Date().toLocaleDateString('pt-BR')}</td>
                                    </tr>
                                </table>
                            </div>

                            <div style="text-align: center; margin-top: 30px;">
                                <a href="#" style="background-color: #34495e; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; font-size: 14px; display: inline-block;">Ver Perfil no Sistema</a>
                                <p style="font-size: 12px; color: #999; margin-top: 10px;">Acesse o painel para aprovar ou rejeitar.</p>
                            </div>
                        </div>

                        <hr style="border: 0; border-top: 1px solid #eee; margin: 0;" />
                        
                        <div style="padding: 15px; text-align: center; background-color: #fafafa;">
                            <small style="color: #aaa; font-size: 11px;">Mensagem enviada automaticamente pelo sistema Pet Ts.</small>
                        </div>
                    </div>
                `
            });

            console.log("Solicitação de ADM enviada: %s", info.messageId);
            return true;
        } catch (error) {
            console.error("Erro ao enviar solicitação de ADM:", error);
            return false;
        }
    }

    async sendForgotPasswordEmail(emailRecipient: string, nameUser: string, code: string): Promise<boolean> {
        try {
            const info = await this.transporter.sendMail({
                from: `"Segurança Pet Ts" <${configEmai.auth.user}>`,
                to: emailRecipient,
                subject: "🔑 Seu código de recuperação de senha",
                text: `Olá ${nameUser}, seu código de recuperação é: ${code}. Ele expira em 10 minutos.`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        
                        <div style="background-color: #2c3e50; padding: 25px; text-align: center;">
                            <h2 style="color: #ecf0f1; margin: 0; font-size: 22px;">Recuperação de Senha</h2>
                        </div>
                        
                        <div style="padding: 35px 25px; text-align: center;">
                            <p style="font-size: 16px; margin-bottom: 25px;">Olá, <strong>${nameUser}</strong>.</p>
                            <p style="font-size: 15px; color: #555; margin-bottom: 30px;">
                                Recebemos uma solicitação para redefinir a senha da sua conta. Use o código abaixo para prosseguir:
                            </p>
                            
                            <div style="background-color: #f8f9fa; border: 2px dashed #bdc3c7; border-radius: 8px; padding: 20px; display: inline-block; margin-bottom: 30px;">
                                <span style="font-family: monospace; font-size: 32px; font-weight: bold; color: #2c3e50; letter-spacing: 5px;">${code}</span>
                            </div>

                            <p style="font-size: 14px; color: #e74c3c;"><strong>⚠️ Este código expira em 10 minutos.</strong></p>
                            
                            <p style="font-size: 14px; color: #7f8c8d; margin-top: 20px;">
                                Se você não solicitou essa alteração, por favor ignore este e-mail. Sua senha permanecerá a mesma.
                            </p>
                        </div>
                        
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 0;" />
                        
                        <div style="padding: 20px; text-align: center; background-color: #fafafa;">
                            <p style="font-size: 12px; color: #999; margin: 0;">Nunca compartilhe este código com ninguém, nem mesmo com o suporte.</p>
                        </div>
                    </div>
                `
            });

            console.log("E-mail de recuperação enviado: %s", info.messageId);
            return true;
        } catch (error) {
            console.error("Erro ao enviar código de recuperação:", error);
            return false;
        }
    }

    async sendTemporaryPasswordEmail(emailRecipient: string, nameUser: string, tempPassword: string): Promise<boolean> {
        try {
            const info = await this.transporter.sendMail({
                from: `"Segurança Pet Ts" <${configEmai.auth.user}>`,
                to: emailRecipient,
                subject: "🔒 Sua nova senha temporária",
                text: `Olá ${nameUser}, sua senha foi redefinida. Sua senha temporária é: ${tempPassword}. Por favor, altere-a imediatamente após o login.`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        
                        <div style="background-color: #8e44ad; padding: 25px; text-align: center;">
                            <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Senha Provisória Gerada</h2>
                        </div>
                        
                        <div style="padding: 35px 25px;">
                            <p style="font-size: 16px; margin-bottom: 20px;">Olá, <strong>${nameUser}</strong>.</p>
                            <p style="font-size: 15px; color: #555; line-height: 1.5;">
                                Conforme solicitado, sua senha de acesso foi redefinida manualmente pelo sistema.
                            </p>
                            
                            <div style="background-color: #fdf2f2; border-left: 5px solid #e74c3c; padding: 20px; margin: 25px 0; border-radius: 4px;">
                                <p style="margin: 0 0 10px 0; color: #c0392b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Sua Senha Temporária</p>
                                <span style="font-family: 'Courier New', Courier, monospace; font-size: 24px; color: #333; background-color: #fff; padding: 5px 10px; border: 1px solid #ddd; border-radius: 4px; display: inline-block;">${tempPassword}</span>
                            </div>

                            <div style="background-color: #fff8e1; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ffe0b2;">
                                <p style="margin: 0; font-size: 14px; color: #f57c00;">
                                    <strong>⚠️ Ação Necessária:</strong> Esta senha é válida apenas para o próximo acesso. Por questões de segurança, você será solicitado a criar uma nova senha assim que entrar no sistema.
                                </p>
                            </div>
                            
                            <div style="text-align: center; margin-top: 30px;">
                                <a href="${process.env.FRONTEND_URL || '#'}" style="background-color: #2c3e50; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 5px; font-weight: bold; font-size: 14px;">Ir para Login</a>
                            </div>
                        </div>
                        
                        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
                            <p style="margin: 0;">&copy; 2024 Pet Ts System. Se você não solicitou esta senha, contate o suporte imediatamente.</p>
                        </div>
                    </div>
                `
            });

            console.log("E-mail de senha temporária enviado: %s", info.messageId);
            return true;
        } catch (error) {
            console.error("Erro ao enviar senha temporária:", error);
            return false;
        }
    }

    
}

export default new MailProvider();