var mailer = require('nodemailer'),
  smtpTransport = mailer.createTransport("SMTP", {
    host:'smtpcorp.com',
    port:'2525',
    auth: {
      user: process.env.SMTP2GO_USERNAME || 'kcdc-website',
      pass: process.env.SMTP2GO_PASSWORD || 's3ndMy3ma1l'
    }
  });

exports.send = function(from,to,subject,message){
  var returnMsg = 'Message sent successfully.';

  var mail = {
    from: from, to: to, subject: subject, text: message
  };

  smtpTransport.sendMail(mail, function(err, response){
    if(err){
      console.log(err);
      returnMsg = response;
    }
  });
  smtpTransport.close();

  return returnMsg;
};