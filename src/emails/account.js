const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const sendgridAPIkey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIkey);

const mail_html = (otp) => {
  const html = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
<div style="margin:50px auto;width:70%;padding:20px 0">
  <p style="font-size:1.1em">Hi,</p>
  <p>Thank you for trusting MakeMyBrain. Use the following OTP to complete your Login procedures. OTP is valid for 5 minutes.</p>
  <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
  <p style="font-size:0.9em;">Regards,<br />Ujjwal</p>
  
  <hr style="border:none;border-top:1px solid #eee" />
  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
    <img style="width:120px" src="https://makemybrain.com/blog/wp-content/uploads/2023/05/MMB_logo.jpg"></img>
  </div>
</div>
</div>`;
  return html;
};

const sendOTP = (email, otp) => {
  sgMail.send({
    to: email,
    from: "ujjwal@makemybrain.com",
    subject: `Ujjwal From MakeMyBrain | OTP`,
    text: `Your one time password is - ${otp}.`,
    html: mail_html(otp),
  });
};

// sendOTP("binaybhattacharya558@gmail.com", "Ujjwal");

module.exports = {
  sendOTP,
};
