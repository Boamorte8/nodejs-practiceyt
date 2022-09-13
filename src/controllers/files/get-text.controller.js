import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const fileGetTextController = async (req, res) => {
  const basePath = import.meta.url;
  const customDirname = dirname(fileURLToPath(basePath));
  const pathText = join(customDirname, '../../static/docs/test.txt');
  try {
    return res.sendFile(pathText);
  } catch (error) {
    return res.status(400).send({ errors: ['Error getting text file'] });
  }
};

export default fileGetTextController;
