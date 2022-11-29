import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../cards/cards";
import './row.css';
const Row = (props) => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const responce = await axios.get(props.url);
        setMovies(responce.data.results);
    };
    useEffect(() => {
        fetchMovies();   
    }, []);
    return <div className="row_wrapper">
        <h3 className="row_title">{props.title}</h3>
        <div className="row_card">
            {movies.map((ele) => {
                <Card title={ele.title} poster={ele.backdrop_path} id={ele.id} />
            })}
        </div>
    </div>
}
export default Row;