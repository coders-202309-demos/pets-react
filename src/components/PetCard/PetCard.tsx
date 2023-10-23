import { Pet } from "../../types";
import "./PetCard.css";

interface PetCardProps {
  pet: Pet;
  setFavourite: (id: number) => void;
}

const PetCard = ({
  pet: { id, picture, species, description, alternativeText, isFavourite },
  setFavourite,
}: PetCardProps): React.ReactElement => {
  return (
    <article className={`pet${isFavourite ? " pet--favourite" : ""}`}>
      <h2 className="pet__name">{species}</h2>
      <img className="pet__picture" src={picture} alt={alternativeText} />
      <p className="pet__description">{description}</p>
      <button type="button" onClick={() => setFavourite(id)}>
        Fav/unfav
      </button>
    </article>
  );
};

export default PetCard;
