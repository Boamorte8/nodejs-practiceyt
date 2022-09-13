import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const fileGetTextController = async (req, res) => {
  const customDirname = dirname(fileURLToPath(import.meta.url));
  const pathText = join(customDirname, '../../static/docs/test.txt');
  try {
    return res.sendFile(pathText);
  } catch (error) {
    return res.status(400).send({ errors: ['Error getting text file'] });
  }
};

export default fileGetTextController;
