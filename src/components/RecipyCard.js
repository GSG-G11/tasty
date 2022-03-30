import React from 'react';
import '../style.css';
class RecipyCard extends React.Component {
  state = {
    display: false,
  };
  toggleDispaly = () => {
    this.setState((prevState) => ({
      display: !prevState.display,
    }));
  };
  render() {
    const { recipy } = this.props;
    const { isOwn } = recipy;
    console.log(isOwn);
    return (
      <div className="recipy-card">
        {isOwn ? (
          <div className="recipy-card-header">
            <i class="fa fa-edit" id="edit-icon"></i>
            <i class="fa fa-trash" id="trash-icon"></i>
          </div>
        ) : null}

        <div className="recipy-card__image">
          <img src={recipy.image} alt={recipy.name} />
        </div>
        <div className="recipy-card__info">
          <h3 className="recipy-card__name">{recipy.name}</h3>
          {!this.state.display && (
            <button className="button" onClick={this.toggleDispaly}>
              Read details
            </button>
          )}
          {this.state.display && (
            <div>
              <p className="recipy-card__description">{recipy.instructions}</p>
              <button className="button" onClick={this.toggleDispaly}>
                Read Less
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default RecipyCard;
