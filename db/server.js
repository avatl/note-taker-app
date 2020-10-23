const express = require("express")

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.get('/', (req, res) => {
    res.send('got you!')
})

app.listen(PORT, () => {
    console.log(`Server started on http:localhost:${PORT}`);
}) 