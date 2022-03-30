import RecipyCard from './RecipyCard';
import '../style.css';
const RecipiesList = ({
  apiData,
  handleEdit,
  handleDelete,
  searchTerm = '',
  myRecepies,
}) => {
  const filterdData = apiData
    .filter((item) => {
      if (!myRecepies) return true;
      return item.isOwn;
    })
    .filter((item) => {
      if (searchTerm.length === 0) return true;
      return item.name.toLowerCase().includes(searchTerm);
    }).sort((a,b)=>b.id - a.id)
   
  return (
    <div className="cards-container">
      {filterdData.length
        ? filterdData.map((ele) => (
            <RecipyCard
              recipy={ele}
              key={ele.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        : 'no recipies found'}
    </div>
  );
};

export default RecipiesList;
