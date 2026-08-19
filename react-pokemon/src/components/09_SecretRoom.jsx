import { useState, useEffect } from "react";

const randomPokemonId = () => Math.floor(Math.random() * 1000) + 1;

const podPokemons = [
  { id: 25, name: "Pikachu" },
  { id: 1, name: "Bulbasaur" },
  { id: 4, name: "Charmander" },
  { id: 7, name: "Squirtle" },
];

export default function SecretRoom({ question, answer, handleAnswer, podReady }) {
  const [pokemonId, setPokemonId] = useState(randomPokemonId);
  const [pokemonName, setPokemonName] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await res.json();
        setPokemonName(data.name);
      } catch {
        setPokemonName("???");
      }
    };
    fetchName();
  }, [pokemonId]);

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-4 bg-gray-700 w-[90%]">
      <h1>SecretRoom</h1>
      <div className="flex flex-col justify-center items-center gap-y-2 border-4 border-red-500 bg-red-900/40 px-6 py-4 rounded">
        <p className="text-red-200 font-bold">A prisoner is trapped here!</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt="Random Pokemon"
          className="w-24 h-24 cursor-pointer"
          onClick={() => setPokemonId(randomPokemonId())}
        />
        <p className="text-red-200 font-bold capitalize">{pokemonName}</p>
      </div>
      {podReady && (
        <>
          <div className="flex flex-col justify-center items-center gap-y-1 bg-blue-950 border-4 border-yellow-400 px-4 py-2 rounded-lg">
            <h2 className="text-yellow-400 text-base">The Escape Pod is here!</h2>
            <div className="flex gap-1">
              {podPokemons.map((poke) => (
                <button
                  key={poke.id}
                  onClick={() => setSelectedPokemon(poke.name)}
                  className={`flex flex-col items-center gap-y-1 border-2 px-1 py-1 rounded ${
                    selectedPokemon === poke.name
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                    alt={poke.name}
                    className="w-10 h-10"
                  />
                  <p className="text-yellow-400 text-xs">
                    {poke.name}
                    {selectedPokemon === poke.name && " ✅"}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={!selectedPokemon}
            className={`px-6 py-2 rounded ${
              selectedPokemon
                ? "bg-yellow-400 text-black cursor-pointer"
                : "bg-blue-500 text-white cursor-not-allowed"
            }`}
          >
            {selectedPokemon ? "Transport Outside!" : "Enter the Pod!"}
          </button>
        </>
      )}
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {podReady
            ? "Hello?"
            : question
              ? `✅ ${question}`
              : "Waiting for a message..."}
        </span>
      </p>
      {!podReady && (
        <textarea
          value={answer}
          onChange={handleAnswer}
          className="bg-white text-black rounded px-2 py-1"
          placeholder="Type your message here..."
        />
      )}
      {!podReady && (
        <p className="text-green-300">
          Your reply:...{" "}
        </p>
      )}
    </div>
  );
}
