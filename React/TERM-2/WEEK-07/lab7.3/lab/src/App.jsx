import { useState } from "react";

const Rating = ({ currentStars, onUpdate }) => {
  return (
    <div>
      <p>Current Rating: {currentStars} ⭐</p>
      <button onClick={() => onUpdate(5)}>Rate 5 Stars</button>
    </div>
  );
};

function App() {
  const [movie, setMovie] = useState({ title: "Inception", stars: 0 });

  const handleScoreUpdate = (newStars) => {
    const updatedMovie = { ...movie, stars: newStars };
    setMovie(updatedMovie);
    localStorage.setItem("movie", JSON.stringify(updatedMovie));
  };

  return (
    <div className="p-10">
      <h1>{movie.title}</h1>

      <Rating
        currentStars={movie.stars}
        onUpdate={handleScoreUpdate}
      />
    </div>
  );
}

export default App;