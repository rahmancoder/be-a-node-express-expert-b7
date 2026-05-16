import app from "./app";
import config from "./config";
import { initDB } from "./db";

// Design Pattern 
// MVC = Model , View , Controller
const main = () => {
  initDB();
  // Without COnfig file 
  app.listen(8000, () => {
    console.log(`Example app listening on port 8000`);
  });

  // with config file
  // app.listen(config.port, () => {
  //   console.log(`Example app listening on port ${config.port}`);
  // });
};

main();
