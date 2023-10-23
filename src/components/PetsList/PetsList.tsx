import { Pet } from "../../types";
import PetCard from "../PetCard/PetCard";

interface PetsListProps {
  pets: Pet[];
  setFavourite: (id: number) => void;
}

const PetsList = ({
  pets,
  setFavourite,
}: PetsListProps): React.ReactElement => {
  return (
    <ul className="pets">
      {pets.map((pet) => (
        <li key={pet.id}>
          <PetCard pet={pet} setFavourite={setFavourite} />
        </li>
      ))}
    </ul>
  );
};

export default PetsList;
