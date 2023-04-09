import React from "react";
import "./form.css";
import { RiUserSearchLine, MdRefresh, AiOutlineClear } from "react-icons/all";
import Results from "../Results";
function Form() {
  return (
    <div>
      <form id="form" className="form mt-5">
        <div className="flex items-center">
          <RiUserSearchLine className="icom text-yellow-700 text-3xl" />
          <input
            className="form__input"
            type="search"
            name="user-search"
            id="form__input"
            placeholder="Live search users"
            aria-label="search"
            autocomplete="off"
          />
        </div>
        <button id="form__button" className="form__button mr-4 ">
          <span className="form__button-inner text-white">
            <MdRefresh className="text-2xl mr-1"/>
            <span className="material-symbols-outlined cursor-pointer">Refresh</span>
          </span>
        </button>
        <button id="clear__button" className="clear__button form__button">
          <span className="form__button-inner">
          <AiOutlineClear className="text-white text-2xl mr-1 "/>
            <span className="text-white">Clear</span>
          </span>
        </button>
        <div className="border"></div>
      </form>
      <Results/>
    </div>
  );
}

export default Form;
