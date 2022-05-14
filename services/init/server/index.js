const PORT = process.env.PORT || 8899;

const initServer = async (app) => {
  return new Promise((resolve, reject) => {
    app
      .listen(PORT, () => {
        console.log(`Server is running port : ${PORT} `);
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

module.exports = initServer;
