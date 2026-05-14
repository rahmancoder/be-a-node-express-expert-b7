import { request, response } from "express";
import express, {
 type Request,
 type Response   
} from "express";

const app= express();
app.get("/",(req:Request, res:Response) =>
{
// console.log("hello mustafiz");

res.send("hello Mustafiz");
});


app.listen(8000,()=>
{
console.log("Server_mustafiz is running on port 5000");
}
);
