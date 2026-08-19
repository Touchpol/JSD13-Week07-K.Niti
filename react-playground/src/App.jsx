import { useState, useEffect } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // declare React's state variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [pokemonName] = useState("pikachu");
  const [pokemonImage, setPokemonImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [podReady, setPodReady] = useState(false);

  const handleReinforcements = () => {
    setProgress(0);
    setPodReady(false);
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setLoading(false);
          setPodReady(true);
          return 100;
        }
        return p + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      );
      const data = await response.json();
      setPokemonImage(data.sprites.other["official-artwork"].front_default);
    }
    fetchPokemon();
  }, [pokemonName]);

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return loading ? (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="flex flex-col justify-center items-center gap-y-4 bg-gray-800 border-4 border-yellow-400 px-10 py-8 rounded-lg">
        <h1 className="text-yellow-400 text-2xl">Building Escape Pod....</h1>
        <div className="w-64 h-4 bg-gray-600 rounded overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white">{progress}%</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">
      <h1 className="text-yellow-400">Outside the Castle</h1>
      <p className="text-gray-400">pokemon outside</p>
      <img
        src={pokemonImage}
        alt={pokemonName}
        className="w-32 h-32"
      />
      <p className="text-white">{pokemonName}</p>
      <p className="text-yellow-400">Help signal receiveed from inside!</p>
      <button
        onClick={handleReinforcements}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Call for Reinforcements!
      </button>
      <p className="text-purple-400">
        Message to the Secret Room: {" "}
        <span className="text-yellow-400">
          {question ? `✅ ${question}` : "Waiting..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
<p className="text-green-300">
        Reply from the Secret Room:{" "}
        <span className="text-sky-300">
          {!answer
            ? "Waiting for a reply...."
            : answer.toLowerCase() === "hello"
              ? "help!"
              : `✅ ${answer}`}
        </span>
      </p>
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} podReady={podReady} />
    </div>
  );
}
