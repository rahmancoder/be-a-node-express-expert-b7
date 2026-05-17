import app from "./app";
import config from "./config";
import { initDB } from "./db";

const main = () => {
  initDB();
  // app.listen(config.port, () => {
  //   console.log(`Example app listening on port ${config.port}`);
  // });

  // Without COnfig
    app.listen(5000, () => {
    console.log(`Example app listening on port 5000`);
  });
};

main();
