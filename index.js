import express from "express";
import expressLayouts from "express-ejs-layouts";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.get("/", (req,res) => {
  res.render("index", { path: req.path });
});
app.get("/about", (req,res) => {
  res.render("about", { path: req.path });
});
app.get("/contact", (req,res) => {
  res.render("contact", { path: req.path });
});

app.get("/documentary", (req,res) => {
  res.render("documentary", { path: req.path });
});
app.get("/documentary/:id", (req, res) => {
  const id = req.params.id;
  res.render(`documentary-singles/documentary-single-${id}`, { path: req.path });
});

app.get("/animals", (req,res) => {
  res.render("animals", { path: req.path });
});
app.get("/animals/:id", (req, res) => {
  const id = req.params.id;
  res.render(`animals-singles/animals-single-${id}`, { path: req.path });
});

app.get("/music", (req,res) => {
  res.render("music", { path: req.path });
});
app.get("/music/:id", (req, res) => {
  const id = req.params.id;
  res.render(`music-singles/music-single-${id}`, { path: req.path });
});

app.get("/awareness", (req,res) => {
  res.render("awareness", { path: req.path });
});
app.get("/awareness/:id", (req, res) => {
  const id = req.params.id;
  res.render(`awareness-singles/awareness-single-${id}`, { path: req.path });
});

app.get("/commercial", (req,res) => {
  res.render("commercial", { path: req.path });
});
app.get("/commercial/:id", (req, res) => {
  const id = req.params.id;
  res.render(`commercial-singles/commercial-single-${id}`, { path: req.path });
});

app.get("/personal", (req,res) => {
  res.render("personal", { path: req.path });
});
app.get("/personal/:id", (req, res) => {
  const id = req.params.id;
  res.render(`personal-singles/personal-single-${id}`, { path: req.path });
});

app.get("/others", (req,res) => {
  res.render("others", { path: req.path });
});
app.get("/others/:id", (req, res) => {
  const id = req.params.id;
  res.render(`others-singles/others-single-${id}`, { path: req.path });
});

app.get("/products", (req,res) => {
  res.render("products", { path: req.path });
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.render(`products-singles/products-single-${id}`, { path: req.path });
});

app.get("/documentary2", (req,res) => {
  res.render("documentary2", { path: req.path });
});
app.get("/documentary2/:id", (req, res) => {
  const id = req.params.id;
  res.render(`documentary2-singles/documentary2-single-${id}`, { path: req.path });
});

app.get("/portraits", (req,res) => {
  res.render("portraits", { path: req.path });
});
app.get("/portraits/:id", (req, res) => {
  const id = req.params.id;
  res.render(`portraits-singles/portraits-single-${id}`, { path: req.path });
});

app.get("/personal2", (req,res) => {
  res.render("personal2", { path: req.path });
});
app.get("/personal2/:id", (req, res) => {
  const id = req.params.id;
  res.render(`personal2-singles/personal2-single-${id}`, { path: req.path });
});

app.get("/others2", (req,res) => {
  res.render("others2", { path: req.path });
});
app.get("/others2/:id", (req, res) => {
  const id = req.params.id;
  res.render(`others2-singles/others2-single-${id}`, { path: req.path });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});