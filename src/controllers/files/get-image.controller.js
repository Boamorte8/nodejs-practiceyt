import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const fileGetImageController = async (req, res) => {
  const customDirname = dirname(fileURLToPath(import.meta.url));
  const pathText = join(customDirname, '../../static/images/test.png');
  try {
    return res.sendFile(pathText);
  } catch (error) {
    return res.status(400).send({ errors: ['Error getting image file'] });
  }
};

export default fileGetImageController;
