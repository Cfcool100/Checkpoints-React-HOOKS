import './App.css';
import { useState } from "react";
import MovieList from './component/movieList';
function App() {

  const [films, setFilms] = useState([
    {
      title: 'Mr. Robot',
      description: `A young computer scientist who works as a cybersecurity engineer by day and a vigilante hacker by night .`,
      postUrl: 'https://www.youtube.com/embed/xIBiJ_SzJTA',
      rating: 4.8,
    },
    {
      title: `How to Sell Drugs Online (fast)`,
      description: `To impress his former girlfriend, a nerdy teenager starts selling drugs online from his bedroom, before becoming one of the biggest drug dealers in Europe.`,
      postUrl: 'https://www.youtube.com/embed/3sxg1xXmd0I',
      rating: 4.0,
    },
    {
      title: 'The Imitation Game',
      description: 'In THE IMITATION GAME, Benedict Cumberbatch stars as Alan Turing, the genius British mathematician, logician, cryptologist and computer scientist who led the charge to crack the German Enigma Code that helped the Allies win WWII. Turing went on to assist with the development of computers at the University of Manchester after the war, but was prosecuted by the UK government in 1952 for homosexual acts which the country deemed illegal.',
      postUrl: 'https://www.youtube.com/embed/nuPZUUED5uk',
      rating: 4.3,
    },
    {
      title: 'Suits: Bespoke Lawyers',
      description: `A very ambitious lawyer for a big Manhattan firm, Harvey Specter needs someone to back him up. His choice falls on Mike Ross, a very brilliant young man without a diploma, endowed with a certain talent and a very precious photographic memory. Together, they form a winning team, ready to take on any challenge. Mike will however have to use all Read tricks to maintain his place without anyone finding out that he never passed the bar exam.`,
      postUrl: 'https://www.youtube.com/embed/85z53bAebsI',
      rating: 4.5,
    },
    {
      title: 'Extracurricular',
      description: `Oh Ji-soo, a gifted high school student, decides to embark on a criminal career in order to pay for his higher education. On the fringes of his school life, he therefore orchestrates a dangerous network that no one should discover.`,
      postUrl: 'https://www.youtube.com/embed/AV29rEuiYdo',
      rating: 4.3,
    }
  ]);
  return (
    <>
      <MovieList films={films} />
    </>
  );
}
export default App;
