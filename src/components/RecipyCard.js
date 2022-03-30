import React from 'react';
import '../style.css';
import AnimateHeight from 'react-animate-height';
class RecipyCard extends React.Component {
  state = {
    display: false,
    height: 0,
  };

  toggleDispaly = () => {
    const { height } = this.state;
    this.setState((prevState) => ({
      display: !prevState.display,
      height: height === 0 ? 'auto' : 0,
    }));
  };
  render() {
    const { height } = this.state;
    const { recipy, handleDelete } = this.props;
    const { isOwn } = recipy;
    console.log(isOwn);
    return (
      <div className="recipy-card">
        {isOwn ? (
          <div className="recipy-card-header">
            <i className="fa fa-edit" id="edit-icon"></i>
            <i
              className="fa fa-trash"
              id="trash-icon"
              onClick={() => handleDelete(recipy.id)}
            ></i>
          </div>
        ) : null}

        <div className="recipy-card__image">
          <img src={recipy.image} alt={recipy.name} />
        </div>
        <div className="recipy-card__info">
          <h3 className="recipy-card__name">{recipy.name}</h3>
          {!height && (
            <button className="button" onClick={this.toggleDispaly}>
              Read details
            </button>
          )}
          {
            <AnimateHeight id="example-panel" duration={1000} height={height}>
              <div>
                <p className="recipy-card__description">
                  {recipy.instructions}
                </p>
                <button className="button" onClick={this.toggleDispaly}>
                  Read Less
                </button>
              </div>
            </AnimateHeight>
          }
        </div>
      </div>
    );
  }
}
export default RecipyCard;
