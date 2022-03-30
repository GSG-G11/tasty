import RecipyCard from './RecipyCard';
const RecipiesList = ({ apiData }) => {
  return (
    <div>
      {apiData.map((ele) => (
        <RecipyCard recipy={ele} key={ele.id} />
      ))}
    </div>
  );
};

export default RecipiesList;
