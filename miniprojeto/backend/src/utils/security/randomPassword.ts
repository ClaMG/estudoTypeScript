import crypto from 'crypto';

export const generateRandomPassword = (size: number): string => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < size; i++) {
        const randomIndex = crypto.randomInt(0, caracteres.length);
        password += caracteres.charAt(randomIndex);
    }
    
    return password;
};