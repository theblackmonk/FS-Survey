import React, { useState } from "react";
import "./TextBox.css";

const TextBox = (props) => {                                       //component that handles form boxes
  //props to pass in pointer value
  const [enteredName, setEnteredName] = useState(""); //
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredFavorite, setEnteredFavorite] = useState("");
  const [enteredLeast, setEnteredLeast] = useState("");
  const [enteredImprove, setEnteredImprove] = useState("");

  const submitHandler = (event) => {
    //form built in function to handle buttons
    event.preventDefault();                                       //stop a server request and page reload on button click

    const surveyData = {                                          //form data saved here and passed to parent later 
      fullname: enteredName,
      rating: enteredRating,
      favorite: enteredFavorite,
      least: enteredLeast,
      improve: enteredImprove,
    };

    props.onSaveSurveyData(surveyData);
    console.log("TextBox.js");
    console.log(surveyData);                                       //debugging: shows what form data is passed to parent
  };

  return (
    <div className="create">
      <form onSubmit={submitHandler}>
        <cardgrid>
          <card>
            <label>What is your full name? (optional)</label>
            <div></div>
            <input
              type="text"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </card>

          <card>
            <label>
              Please rate the presentation from 1-5 stars: 1: awful and 5:
              perfect
            </label>
            <select
              value={enteredRating}
              required
              onChange={(e) => setEnteredRating(e.target.value)}
            >
              <option value="select a rating"></option>
              <option value="1 star">1 star</option>
              <option value="2 star">2 star</option>
              <option value="3 star">3 star</option>
              <option value="4 star">4 star</option>
              <option value="5 star">5 star</option>
            </select>
          </card>
          
          <card>
            <label>What was your favorite aspect of it:</label>
            <textarea
              value={enteredFavorite}
              required
              onChange={(e) => setEnteredFavorite(e.target.value)}
            >
              
            </textarea>
          </card>

          <card>
            <label>What was your least favorite aspect of it:</label>
            <textarea
              value={enteredLeast}
              required
              onChange={(e) => setEnteredLeast(e.target.value)}
            >
              test
            </textarea>
          </card>
          
          <card>
            <label>Please suggest any improvememnt or other comments:</label>
            <textarea
              value={enteredImprove}
              required
              onChange={(e) => setEnteredImprove(e.target.value)}
            >
              test
            </textarea>
          </card>

          <button type="submit">Submit</button>

          <p>{enteredName}</p>
          <p>{enteredRating}</p>
          <p>{enteredFavorite}</p>
          <p>{enteredLeast}</p>
          <p>{enteredImprove}</p>
        </cardgrid>
      </form>
    </div>
  );
};

export default TextBox;
