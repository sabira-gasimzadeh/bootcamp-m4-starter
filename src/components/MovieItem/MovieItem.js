import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieItem.css";
import store from "../../redux/store";

class MovieItem extends Component {
  state = {
    text : "Добавить в список",
  }
  addFav = () => {
    store.dispatch({
      type: "ADD_FAVORITE",
      payload: {
        imdbID: this.props.imdbID,
        Title: this.props.Title,
        Year: this.props.Year,
      }
    })
  }

  
  render() {
    const { Title, Year, Poster, imdbID } = this.props;
    const {text} = this.state;

    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            onClick={() => {
              this.addFav();
            }}
            type="button"
            className="movie-item__add-button"
          >
            Add to favorites❤️
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    favMovie: state.favMovie,
   };
};
export default connect(mapStateToProps)(MovieItem);
