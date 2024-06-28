import { body, validationResult } from "express-validator"

export const getForm = (req, res) => {
    res.render("form", { user: {}});
};

export const postForm = [
    body("first_name")
        .notEmpty()
        .withMessage("First name required!")
        .trim()
        .escape(),
    body("last_name")
        .notEmpty()
        .withMessage("Last name is required!")
        .trim()
        .escape(),
    body("email")
        .isEmail()
        .withMessage("Not a valid Email address!")
        .trim()
        .escape(),
    body("password")
        .isLength({min: 4})
        .withMessage("Password must be at least 4 characters long!")
        .trim()
        .escape(),

    (req, res, next) => {
        const errors = validationResult(req)

        const {first_name, last_name, email, password} = req.body

        const user = {
            firstName: first_name,
            lastName: last_name,
            email: email,
            password: password
        }

        if(!errors.isEmpty()){
            return res.render("form", {
                user,
                errors: errors.array()
            })
        }

        // Store user data in session
        req.session.user = user;

        res.redirect("/success");
}]

export const getSuccess = (req, res, next) => {
    // Retrieve user data from session
    const user = req.session.user;

    // Render success page with user details
    res.render("success", { user });
}