const express = require("express"), app = express(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
layouts = require("express-ejs-layouts"), mongoose = require("mongoose"),
subcribersController = require("./controllers/subscribersController");

mongoose.connect("mongodb://localhost:27017/confetti_cuisine", {useNewUrlParser: true});

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);


app.get("/", homeController.showIndex);

app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/courses", homeController.showCourses);
app.get("/subscribers", subcribersController.getAllSubscribers);
app.get("/contact", subcribersController.getSubscriptionPage);
app.post("/subscribe", subcribersController.saveSubscriber);

// app.get("/contact", homeController.showSignUp);
// app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port: ${app.get("port")}`);
});