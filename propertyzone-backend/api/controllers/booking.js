const nodemailer = require("nodemailer");
const Booking = require("../models/booking");

const createBooking = async (req, res) => {
  try {
    const { name, email, message, propertyName } = req.body;
    await Booking.create({ name, email, message, propertyName });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Booking Confirmation for ${propertyName}`,
      html: `
        <div style="font-size: 16px; font-family: Arial, sans-serif; line-height: 1.6;">
          <p style="font-size: 18px;">Dear <strong>${name}</strong>,</p>

          <p style="font-size: 18px;">
            Thank you for your interest in the property 
            <strong style="font-size: 20px;">${propertyName}</strong>.
          </p>

          <p style="font-size: 16px;">We’ve received your message:</p>
          <blockquote style="font-size: 16px; color: #555;">${message}</blockquote>

          <p style="font-size: 16px;">
            A member of our team will contact you shortly to discuss the next steps. If you’d like to reach us directly, you can call us at:
          </p>

          <p style="font-size: 18px;"><strong>Phone:</strong> +92-321-1793266</p>
          <p style="font-size: 18px;"><strong>Office Location:</strong> Paradise Workspace, Faisal Plaza, Main Satyana Road, Faisalabad.</p>

          <p style="font-size: 16px;">We look forward to assisting you!</p>

          <p style="font-size: 16px;">
            Best regards,<br />
            <strong style="font-size: 18px;">Quarter-PropertyZone Real Estate Team</strong>
          </p>
        </div>
      `,
    });
    res.json({
      success: true,
      message: "Booking confirmed. Email sent to user.",
    });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createBooking };