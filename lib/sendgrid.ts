import sgClient from "@sendgrid/client";
import sgMail from "@sendgrid/mail";

sgClient.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export { sgClient, sgMail };
