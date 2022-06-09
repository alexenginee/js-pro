import { films } from "./films.js";
import { getUniqueArray } from "./get_unique.js";
import { getSortArray } from "./sort_array.js";
import { getFilterArray, getFilterFilms } from "./filter_array.js";
//1
console.log(getUniqueArray(films, "genre"));
//2
console.log(getUniqueArray(films, "actors"));
//3
console.log(getSortArray(films, "imdbRating"));
//4 тут косяк. совсем решение в голову не лезет
console.log(getFilterArray(films, "id", "title", "released", "plot"));
//5
console.log(getFilterFilms(films, 2001, "year"));
//6
console.log(getFilterFilms(films, "Black Widow", "title"));
//7
console.log(getFilterFilms(films, "Black Widow", "title", "plot"));

films;
