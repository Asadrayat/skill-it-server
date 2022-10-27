const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const catagories = require('./catagory.json');
const courses = require('./courses.json');

app.get('/', (req, res) => {
    res.send('skill it Api Running');
});
app.get('/catagory', (req, res) => {
    res.send(catagories);
});
app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    if (id === "07") {
        res.send(courses);
    }
    else {
        const getCatagory = catagories.filter(ctg => ctg.id === id);
        res.send(getCatagory);
    }

});
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const getCourse = courses.find(c => c.id == id);
    res.send(getCourse);
});

app.listen(port, () => {
    console.log('Skill it server running on port ', port);
})