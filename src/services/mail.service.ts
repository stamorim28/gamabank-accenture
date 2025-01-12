import mailer from '../helpers/mailer'
import htmlTemplate from '../templates/mail.template'

const from = 'gamabank@solt.com.br'

const sendSignUpMail = async (user: string, bankCode: string, agencia: string, cc: string) => {
    return new Promise((resolve, reject) => {
        const subject = 'Conta criada com sucesso'
        const text = 'Conta criada com sucesso'
        const to = 'njr.mor@gmail.com' //  Passar email do cliente como parâmetro
        mailer.sendmail(from, to, subject, text, htmlTemplate.signUpTemplateMail(user, bankCode, agencia, cc))
        .then(sended => resolve(sended))
        .catch(error => console.error(error));
    } )
};

const sendStatusMail = async (message: string) => {
    const subject = 'Status'
    const text = message
    const to = 'njr.mor@gmail.com' //  Passar email do cliente como parâmetro
    mailer.sendmail(from, to, subject, text, htmlTemplate.statusTemplateMail(message))
        .then(sended => console.log(sended))
        .catch(error => console.error(error));
};

const sendBuyCreditMail = async (user: string, email :string, value: string, description:string, balance:string, Instalments:string  ) => {
   return new Promise ((resolve, reject) => {
    const subject = 'Compra no crédito'
    const text = `Compra no crédito no valor de R$ ${value}.`
    const to = email
    mailer.sendmail(from, to, subject, text, htmlTemplate.buyCreditTemplateMail(user, value, description, balance, Instalments))
        .then(sended => resolve(sended))
        .catch(error => console.error(error));
   });
};

const sendBuyDebitMail = async (user: string, email :string, value: number) => {
    return new Promise((resolve, reject) => {
        const subject = 'Compra no débito'
        const text = `Compra no débito no valor de R$ ${value}.`
        const to = email
        mailer.sendmail(from, to, subject, text, htmlTemplate.buyDebitTemplateMail(user, email, value))
        .then(sended => resolve(sended))
        .catch(error => console.error(error));
    })
    
};

const sendInvoiceMail = async (user: string, email :string, invoice: Array<object> ) => {
    return new Promise((resolve, reject) => {
        const subject = 'A fatura do seu cartão chegou'
        const text = `A fatura do seu cartão chegou`
        const to = email
        mailer.sendmail(from, to, subject, text, htmlTemplate.invoiceTemplateMail(user, invoice))
        .then(sended => resolve(sended))
        .catch(error => console.error(error));
    })
};

const sendPayInvoiceMail = async (user: string, email :string, value: number, balance: number ) => {
    const subject = 'A fatura do seu cartão foi paga'
    const text = `A fatura do seu cartão foi paga`
    const to = email
    mailer.sendmail(from, to, subject, text, htmlTemplate.payDueInvoiceTemplateMail(user, value.toString(), balance.toString()))
        .then(sended => console.log(sended))
        .catch(error => console.error(error));
};

export default { sendSignUpMail, sendStatusMail, sendBuyCreditMail, sendBuyDebitMail, sendPayInvoiceMail, sendInvoiceMail };
