import React from "react";
import { useFetch } from "../hooks/useFetch";
import './home/home.css'
import {BiLoader} from "react-icons/all"

function Results() {
  const { data, error, isPending } = useFetch(
    "https://randomuser.me/api/?results=9"
  );
 if(isPending) return <dir className = "max-w-5xl mx-auto"> <h1 className="flex justify-center text-8xl"><BiLoader/></h1></dir>
  console.log(data && data.results);
  return (
    <div>
      <ul className="user max-w-5xl mx-auto">
        {data &&
          data.results.map((result) => {
            return (
              <li key={result.dob.date} className="user__item">
                <button id="delete__btn" className="user__delete--btn">
                  <i className="fas fa-trash"></i>
                </button>
                <img
                  className="user__img"
                  alt="User photo"
                  src={result.picture.large}
                  width="100"
                  height="100"
                />
                <div className="flex items-center ">
                  <span > <i>Name</i> </span>
                  <span>
                    -{result.name.title} {result.name.first}-
                    {result.name.last}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined"><i>Year</i></span>
                  <span>- {result.dob.age} old</span>
                </div>
                <div className="flex">
                  <span className="material-symbols-outlined">
                    <i>Location</i>
                  </span>
                  <span>
                    -{result.location.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined"><i>Gender</i></span>
                  <span>- {result.gender}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Results;
