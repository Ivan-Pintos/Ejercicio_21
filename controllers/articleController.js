const { Article, User } = require("../models");
const { Comment } = require("../models");

async function index(req, res) {
  const articles = await Article.findAll({
    where: {
      userId: [2, 3, 4, 5],
    },
    include: {
      model: User,
      attributes: ["id", "firstname", "lastname"],
    },
  });
  console.log(articles);
  res.render("home", { articles });
}
// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  const article = await Article.findByPk(id, { include: Comment });

  res.render("article", { article, header: "article" });
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("panel", { modal: "crear" });
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("panel", { modal: "editar", article });
}

// Update the specified resource in storage.
async function update(req, res) {
  await Article.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  );
  res.redirect(`/admin`);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect(`/admin`);
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
