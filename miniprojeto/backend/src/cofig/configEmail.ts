import 'dotenv/config';
import {IMailConfig} from './interface/interfaceEmail.js'

const mailConfig: IMailConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
};

export default mailConfig;