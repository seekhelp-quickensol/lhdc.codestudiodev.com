const axios = require('axios');
 

const SMS_CONFIG = {
  username: process.env.SMS_USERNAME || "RDRAST",
  apikey: process.env.SMS_APIKEY || "75638-D027D",
  sender: process.env.SMS_SENDER_ID || "RDRAST",
  route: process.env.SMS_ROUTE || "TRANS",
  templateId: process.env.SMS_TEMPLATE_ID || "1707176318694043261"
};

const SMS_BASE_URL = "https://login.webpayservices.in/sms-panel/api/http/index.php?";

const sendSMS = async (
    message, 
    mobile, 
    templateId = "1707176318694043261"

) => {
  try {
    const payload = {
      username: SMS_CONFIG.username,
      apikey: SMS_CONFIG.apikey,
      apirequest: "Text",
      sender: SMS_CONFIG.sender,
      route: SMS_CONFIG.route,
      format: "json",
      message: message,
      mobile: mobile.replace(/\D/g, ""), // clean number - only digits
      ...(templateId || SMS_CONFIG.templateId
        ? { TemplateID: templateId || SMS_CONFIG.templateId }
        : {}),
    };
    const response = await axios.get(SMS_BASE_URL, {
      params: payload,
      timeout: 30000,
    });

    const result = response.data;
    console.log(result)
    if (result && result.status !== "error" && result.errcode !== "000") {
      return {
        success: true,
        data: result,
        message: "SMS sent successfully"
      };
    }

    return {
      success: false,
      data: result,
      error: result?.errdesc || "Unknown error from SMS provider"
    };

  } catch (error) {
    console.error("SMS sending error:", error.message);
    return {
      success: false,
      error: error.response?.data || error.message,
      message: "Failed to send SMS"
    };
  }
};

module.exports = {
    sendSMS
}