import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const fileGetImageController = async (req, res) => {
  const basePath = import.meta.url;
  const customDirname = dirname(fileURLToPath(basePath));
  const pathText = join(customDirname, '../../static/images/test.png');
  try {
    return res.sendFile(pathText);
  } catch (error) {
    return res.status(400).send({ errors: ['Error getting image file'] });
  }
};

export default fileGetImageController;
