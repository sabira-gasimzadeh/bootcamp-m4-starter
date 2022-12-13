import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_MOVIE, SUBMIT } from "../../redux/actiontypes";
import "./SearchBox.css";
import store  from "../../redux/store";

class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${this.state.searchLine}&apikey=95f02830`)
      .then((data) => data.json())
      .then((res) => res.Search)
      .then((arr) => {
        store.dispatch({ type: DELETE_MOVIE })
        arr.map((item) => {
          store.dispatch({ type: SUBMIT, payload: item });
        })
      }
      ).catch(data => {
        console.log(data)
      })
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { allMovie: state.allMovie };
};
export default connect(mapStateToProps)(SearchBox);
