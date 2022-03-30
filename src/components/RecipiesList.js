import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({ apiData, handleDelete }) => {
  return (
    <div className="cards-container">
      {apiData.map((ele) => (
        <RecipyCard recipy={ele} key={ele.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default RecipiesList;
