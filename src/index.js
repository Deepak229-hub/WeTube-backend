import env from "dotenv";
env.config({
    path: './.env',
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("MongoDB connection failed!: ", err);
            throw err;
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is listening in port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed! ", err);
    });

