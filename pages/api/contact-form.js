import { IncomingForm } from 'formidable';
import fs from 'fs';
import { sendMail } from '../../lib/mailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: `Failed to parse form data: ${err.message}` });
        return;
      }

      const { email, message, name, tel, components } = fields;
      const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];

      const attachments = uploadedFiles.map((file) => ({
        filename: file.originalFilename,
        content: fs.readFileSync(file.filepath),
      }));

      sendMail({
        email,
        message,
        name,
        tel,
        components,
        files: attachments,
      })
        .then(() => res.status(200).json({ success: true }))
        .catch((error) =>
          res.status(500).json({ error: `Failed to send email: ${error.message}` })
        );
    });
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}