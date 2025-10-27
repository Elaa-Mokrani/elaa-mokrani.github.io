import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Crée le transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // tu peux aussi utiliser Outlook, Yahoo...
      auth: {
        user: "elaamokrani4@gmail.com", // ton adresse mail
        pass: "wovt yhlp ztzy zyrp", // mot de passe ou "App Password"
      },
    });

    // Envoie l’email
    await transporter.sendMail({
      from: email,
      to: "elaamokrani4@gmail.com", // ton adresse mail de réception
      subject: `Portfolio contact: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
