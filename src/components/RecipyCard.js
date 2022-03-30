const RecipyCard = ({ recipy }) => {
  return (
    <div className="recipy-card">
      <div className="recipy-card__image">
        <img src={recipy.image} alt={recipy.name} />
      </div>
      <div className="recipy-card__info">
        <h3 className="recipy-card__name">{recipy.name}</h3>
        <p className="recipy-card__description">{recipy.instructions}</p>
      </div>
    </div>
  );
};
export default RecipyCard;
