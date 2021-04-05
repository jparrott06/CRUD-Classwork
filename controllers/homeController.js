
var courses = [
    {
        title: "Raspberry Cake",
        cost: 50
    },
    {
        title: "Borscht",
        cost: 80
    },
    {
        title: "Awesome Burger",
        cost: 100
    }
]

exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
}

exports.showSignUp = (req, res) => {
    res.render('contact')
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks")
}

exports.showIndex = (req, res) => {
    res.render("index");
}