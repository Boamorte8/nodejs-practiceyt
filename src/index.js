import '#Config/env.js';
import connectDB from '#Config/db.js';
import httpServer from '#Config/http.js';

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL);

  httpServer.listen(PORT, () =>
    console.log(`Server listening at port ${PORT}`)
  );
};

bootstrap();
