import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";

// GET /cats
router.get('/', (_req, _res) => {
  const catsData = fs.readFileSync("./data/data.json");
  const parsedData = JSON.parse(catsData);
  
  return _res.status(200).json(parsedData);
});

// GET /cats/:catId
router.get('/:id', (_req, _res) => {

  const currentCat = _req.params.id;

  const catsData = fs.readFileSync("./data/data.json");

  const parsedData = JSON.parse(catsData);

  const findCat = parsedData.find((cat) => cat.id == currentCat)

  if (!findCat) {
    return _res.status(400).json({ message: 'Cat with this id not found' });
  }
  
  return _res.status(200).json(findCat);
});

// POST /cats
router.post('/', (_req, _res) => {
  // check if the request body is present in the POST request
  if (Object.keys(_req.body).length === 0) {
    return _res.status(400).json({ message: 'Request body is not present' });
  }

   // Make a new cat with a unique ID
   const newCat = {
    id: uuidv4(),
    name: _req.body.name,
    age: _req.body.age,
    adoption_status: _req.body.adoption_status,
    photo: "1.webp",
};
const catsData = fs.readFileSync("./data/data.json");
const allCats = JSON.parse(catsData);

allCats.push(newCat);

fs.writeFileSync("./data/data.json", JSON.stringify(allCats));

// Respond with the cat that was created
return _res.status(201).json(newCat);
});


// remove cat
router.delete("/:id", (_req, _res) => {
  console.log('here')
  const currentCat = _req.params.id;
  const catsData = fs.readFileSync("./data/data.json");

  const parsedData = JSON.parse(catsData);

  const filteredData = parsedData.filter((cat) => cat.id != currentCat)
  fs.writeFileSync("./data/data.json", JSON.stringify(filteredData));
  
  _res.status(204).send("You deleted a cat from database");
});


export default router;