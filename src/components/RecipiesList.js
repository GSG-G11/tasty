import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({ apiData }) => {
  return (
    <div className="cards-container">
      {apiData.map((ele) => (
        <RecipyCard recipy={ele} key={ele.id} />
      ))}
    </div>
  );
};

export default RecipiesList;
