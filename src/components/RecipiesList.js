import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({ apiData, editRecipy, handleDelete }) => {
  return (
    <div className="cards-container">
      {apiData.map((ele) => (
        <RecipyCard recipy={ele}
          key={ele.id}
          editRecipy={editRecipy}
          handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default RecipiesList;
