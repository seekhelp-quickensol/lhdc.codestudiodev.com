const { prisma } = require("../prisma/prisma");
const crypto = require("crypto")


function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function hashOTP(otp) {
    return crypto.createHash("sha256").update(otp).digest("hex");
}


async function sendOTPSMS(mobile, otp) {
    console.log(`[SMS] OTP sent to ${mobile}: ${otp}`);
}



module.exports = {
    generateOTP,
    hashOTP,
    sendOTPSMS
};
