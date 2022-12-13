import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [],
        title: "title",
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.state.movies);
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)  
            .then(res => res.json())
            .then(data => {
                this.setState({ title: data.title });
                this.setState({movies:data.movies})
            })
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">📋 Your list name is {this.state.title} 📋</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a 
                                href={`https://www.imdb.com/title/${item.imdbID}/`} 
                                target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListPage;