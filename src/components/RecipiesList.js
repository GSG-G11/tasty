import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({ apiData, handleEdit, handleDelete }) => {
  return (
    <div className="cards-container">
      {apiData.map((ele) => (
        <RecipyCard
          recipy={ele}
          key={ele.id}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default RecipiesList;
