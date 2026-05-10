import fs from "fs";
import path from "path";

// folder structure check carefully 
// process.cwd() will give parent folder
// add to current path with join()
const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
  //   console.log(process.cwd());
  //   console.log(filePath);

  // check readFileSync from Documentation (Node js)
  // utf-8 will parse as JSON.parse do the same thing here
  const products = fs.readFileSync(filePath, "utf-8");
  //   console.log(products.toString());
  //   console.log(products);
  //   console.log(JSON.parse(products));
  return JSON.parse(products);
};

export const insertProduct = (payload: any) => {
  console.log(JSON.stringify(payload));
  fs.writeFileSync(filePath, JSON.stringify(payload));
};
