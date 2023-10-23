import { useState, useEffect } from "react";
import petsApi from "../../data/pets";
import PetsList from "../PetsList/PetsList";
import { Pet } from "../../types";

const App = (): React.ReactElement => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    loadPets(petsApi);
  }, []);

  const loadPets = (pets: Pet[]) => {
    setPets(pets);
  };

  const setFavouritePet = (petId: number) => {
    setPets(
      pets.map((pet) => ({
        ...pet,
        isFavourite: pet.id === petId,
      }))
    );
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-title">Pets app</h1>
      </header>
      <main className="main-content">
        <PetsList pets={pets} setFavourite={setFavouritePet} />
      </main>
    </div>
  );
};

export default App;
