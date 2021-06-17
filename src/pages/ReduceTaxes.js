import TextBox from "../components/TextBox";
import "./ReduceTaxes.css";
import MiniCard from "../components/MiniCard";

const ReduceTaxes = (props) => {
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
    console.log("ReduceTaxes.js");
    console.log(surveyData); // same thing
  };

  return (
    <div>
      <MiniCard>
        <div>
          <h1>Feedback Survey:</h1>
          <h2>Reduce Cryptocurrency Taxes: Baili</h2>
          <h3>We'd love to hear your feedback</h3>
          <h4>Let us know what you think</h4>
        </div>
      </MiniCard>

      <MiniCard className="minicardalt2">
        <TextBox onSaveSurveyData={saveSurveyDataHandler} />
      </MiniCard>
    </div>
  );
};

export default ReduceTaxes;
