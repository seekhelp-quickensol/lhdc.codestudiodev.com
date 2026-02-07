const { prisma } = require("../../prisma/prisma");
const tbl = prisma.tbl_contact_us;

/* =========================
   SUBMIT CONTACT FORM
========================= */
const submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    /* =========================
       BASIC VALIDATION
    ========================= */
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    /* =========================
       SAVE DATA
    ========================= */
    const contact = await tbl.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Thank you for contacting us. We will get back to you soon.",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  submitContactForm,
};
