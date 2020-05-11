// Express
const express = require('express');
// Nodemailer
const nodemailer = require('nodemailer');
const router = express.Router();

// Initializing app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("S");
});

app.get('/internship-register/:email', (req, res) => {
    const email = req.params.email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'newaicteinternship@gmail.com',
            pass: 'Akash12345**'
        }
    });
    let mailOption = {
        from: 'akashpandey.geu@gmail.com',
        to: email,
        subject: `Congratulations Account Has Been Successfully Created`,
        text: `Account for ${email} has been successfully Registered Plse Verify Your account by clicking on this link.please click on the link to verfiy yourself http://localhost/internship_go/internship/module_ulb/activate_account.php.`
    };
    transporter.sendMail(mailOption, (err, data) => {
        if (err) throw res.send(err);
        console.log('Email Sent!');
        res.redirect('http://localhost/internship_go/internship/login_type.php?task=RegisteredSuccessfully');
    })
});
// Getting PORT set
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, console.log('Server Started On Port', PORT));
