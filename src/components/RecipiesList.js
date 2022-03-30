import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({ apiData,editRecipy }) => {
  return (
    <div className="cards-container">
      {apiData.map((ele) => (
        <RecipyCard recipy={ele} key={ele.id} editRecipy={editRecipy} />
      ))}
    </div>
  );
};

export default RecipiesList;
