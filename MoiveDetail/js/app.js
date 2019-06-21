
import {readData,displayMovies} from './main.js';
//import {readData,displayMovies,displayMoviesDetail} from './main.js';
import data from '../data/movie.js';

const detailTemplate = document.getElementById("movie-info-template").innerHTML;

const viewport = document.getElementById("viewport");

const detailPageTemplate = document.getElementById("movie-detail-template").innerHTML;
const viewport = document.getElementById("viewport");


const moviearray = readData(data);
displayMovies(moviearray,detailTemplate);
//displayMovies(moviearray,detailTemplate,displayMoviesDetail);