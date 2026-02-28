import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const startingFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const [filmList, setFilmList] = useState(startingFilms);
const [newFilm, setNewFilm] = useState({title:"", genre:""});

const [filteredList, setFilteredList] = useState(filmList)
const [searchInput, setSearchInput] = useState(``)
const [filmGenres, setFilmGenres] = useState([]);

useEffect(() => {
setFilteredList(filmList.filter(film => film.title.toLowerCase().includes(searchInput.toLowerCase())))
}, [searchInput])

// Modificare (Multi-field form) un singolo oggetto
const handleChange = (e) => {
  setNewFilm({
    ...newFilm,
    [e.target.name]: e.target.value})
  }
  
// Aggiungere un oggetto ad un array di oggetti
const handleSubmit = (e) => {
    e.preventDefault();
    setFilmList([
      ...filmList, newFilm, 
    ])}



  return (
    <>
    <div className='container'>
      <section>

        <p className='d-inline-flex mt-3 me-3'> Search</p>
        <input 
          type="text" 
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}/>
      </section>

    <h1>Film disponibili</h1>
    <section>
      <ul>
        {filteredList.map((singleFilm, index) => 
            
            <li key={index}>
              {singleFilm.title} ({singleFilm.genre})
            </li>
          )
        }
        </ul>

        <form 
          className='d-flex flex-column'
          onSubmit={handleSubmit}>
            
            <label htmlFor="title">Titolo</label>
            <input 
              name='title'
              type="text"
              value={newFilm.title}
              onChange={handleChange} />
            
            <label htmlFor="genere">Genere</label>
            <input 
              className='mb-2'
              name='genre'
              type="text"
              value={newFilm.genre}
              onChange={handleChange} />
            <button 
              className='btn btn-primary'
              type='Submit'>invia</button>
        </form>
    </section>
    </div>
    </>
  )
}

export default App
