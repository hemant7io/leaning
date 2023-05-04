import formidable from "formidable";

import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, since we'll be using Formidable
  },
};

const handler = async (req: any, res: any) => {
  const form = new formidable.IncomingForm();

  const errors: any = [];

  form.parse(req, async (err: any, fields: any, files: any) => {
    if (err) errors.push(err.message);

    const { firstName, lastName, phoneNumber, email, position, message } =
      fields;
    // console.log(files);

    const { image } = files;

    fs.writeFileSync(`${image.newFilename}.png`, image?.filepath);

    return res
      .status(200)
      .json({ result: "success", message: "File upload successful" });
  });
};
export default handler;
