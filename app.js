const express = require("express");
// const cookieParser = require("cookie-parser");
// const auth = require("./middlewares/auth");

//create    express application
const app = express();
    
// const cors = require("cors");
// const morgan = require("morgan");

// const userRouter = require("./routes/userRoutes");
// const jobRouter = require("./routes/jobRoutes");

// app.use(morgan("dev"));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/users", userRouter);
// app.use("/api/jobs", jobRouter);

module.exports = app;
