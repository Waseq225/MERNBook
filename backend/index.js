import express from "express";
import { PORT, mongdbURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookroutes.js";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
// Option 1: Allow all origins with default of CORS(*)
app.use(cors());

// Option 2: Allow custom CORS
app.use(
  cors({
    origin: "http://localhost:5555",
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("MERN testing");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongdbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listeting to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error");
  });
