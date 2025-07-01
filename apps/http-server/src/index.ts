import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    mssg: "Hii there",
  });
});

app.listen(3001, () => {
  console.log('Server is started')
})