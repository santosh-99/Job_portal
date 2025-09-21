import app from "./server.js";
import authRouter from "./src/router/auths.routes.js";
import jobRouter from "./src/router/jobs.routes.js";



app.get('/', (req, res)=> {
    res.render("landing-page");
})

app.use("/auth", authRouter);
app.use("/jobs", jobRouter);
// app.use("/users", userRouter);




app.listen(3400, () => {
    console.log("Server is listening on 3400!")
})