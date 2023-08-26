import React,{useState} from 'react';
import Card from './movieCard';

const MovieList = ({ films }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
        <div className="search">
                <input onChange={e => setSearchTerm(e.target.value)} type="search" name="search" id="" />
            </div>
        <div className='cardFilm'>
            {films.filter((film) => {
                return film.title.toLowerCase().includes(searchTerm)
            }).map((film) => {
                return (
                    <div className='box'>
                        <Card key={film.rating} film={film} />
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default MovieList;