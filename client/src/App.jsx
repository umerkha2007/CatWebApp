import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
// import allCats from "./fake_data/data.json"

function App() {
 
  const [allCats, setAllCats] = useState([]);

  const getAllCats = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cats")
      const allCatsData = response.data;
      setAllCats(allCatsData);
    } catch (error) {
      console.error("Failed to fetch cats list:", error);
    }
  }

  useEffect(() => {
    getAllCats();
  }, [allCats])

  
  const addACat = async (catForm) => {
    try {
      await axios.post("http://localhost:8080/cats", {
        "name": catForm.catName.value,
        "age": catForm.catAge.value,
        "adoption_status": catForm.catAdoption.value,
        "photo": "photo1.jpg"
    })
      
      setAllCats([]);
    } catch (error) {
      console.error("Failed to fetch cats list:", error);
    }
  }

  const removeACat = async (currentCat) => {
    try {
      await axios.delete(`http://localhost:8080/cats/${currentCat}`);
      setAllCats([]);
    } catch (error) {
      console.error("Failed to fetch cats list:", error);
    }
  }


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Cat should be added')
    addACat(e.target);
    // console.log(e.target)
  }

  const removeCatHandler = (currentCat) => {
    console.log(currentCat)
    removeACat(currentCat);
    console.log('cat should be removed')
  }

  return (
    <>
    <header className="App-header">
      <h1>
        Hey, this is the front end
      </h1>
    </header>
    <section>
      <table>
        <thead>
          <tr>
            <th>Cat Id</th>
            <th>Cat Name</th>
            <th>Cat Age</th>
            <th>Cat Adoption Status</th>
            <th>Cat Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allCats.map((currentCat, key) => {
            return (
              <tr key={key}>
                <td>{currentCat.id}</td>
                <td>{currentCat.name}</td>
                <td>{currentCat.age}</td>
                <td>{currentCat.adoption_status}</td>
                <td><img src={`http://localhost:8080/${currentCat.photo}`} /></td>
                <td><button className='remove' onClick={() => removeCatHandler(currentCat.id)}>Remove Cat</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
    <section id="postCat">
      <form onSubmit={submitHandler} >
        <h1>Add a new Cat</h1>
        <input type="text" id="catName" name="catName" placeholder='Name of Cat' required/>
        <input type="number" id="catAge" name="catAge" placeholder='Age of Cat' required/>
        <input type="text" id="catAdoption" name="catAdoption" placeholder='Adoption Status' required/>
        <input type="file" id="catPhoto" name="catPhoto" />
        <section id="submission">
          <button type='submit'>Add Cat</button>
        </section>
      </form>
    </section>
  </>

  )
}

export default App
