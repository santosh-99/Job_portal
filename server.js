import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";

const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(),"src","views"));
console.log("resolve "+ path.resolve() );


//ejs layouts
app.use(expressLayouts);
app.set("layout", "layouts/layout");

//body and json parser~
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.static(path.join(path.resolve(), "public")));

export default app;
