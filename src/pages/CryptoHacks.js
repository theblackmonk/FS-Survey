import TextBox from "../components/TextBox";
import "./CryptoHacks.css";
import MiniCard from "../components/MiniCard";

const CryptoHacks = (props) => {
  const surveyData = [
    {
      id: "i1",
      fullname: "",
      rating: "",
      favorite: "",
      least: "",
      improve: "",
    },
    {
      id: "i2",
      fullname: "",
      rating: "",
      favorite: "",
      least: "",
      improve: "",
    },
    {
      id: "i3",
      fullname: "",
      rating: "",
      favorite: "",
      least: "",
      improve: "",
    },
    {
      id: "i4",
      fullname: "",
      rating: "",
      favorite: "",
      least: "",
      improve: "",
    },
  ];

  const saveSurveyDataHandler = (enteredSurveyData) => {
    const surveyData = {
      ...enteredSurveyData,
    };
    props.onAddSurveyData(surveyData);
    console.log("CryptoHacks.js");
    console.log(surveyData); // same thing
  };

  return (
    <div>
      <MiniCard>
        <div>
          <h1>Feedback Survey:</h1>
          <h2>Cryptocurrency Security: Josh</h2>
          <h3>We'd love to hear your feedback</h3>
          <h4>Let us know what you think</h4>
        </div>
      </MiniCard>

      <MiniCard className="minicardalt3">
        <TextBox onSaveSurveyData={saveSurveyDataHandler} />
      </MiniCard>
    </div>
  );
};

export default CryptoHacks;
