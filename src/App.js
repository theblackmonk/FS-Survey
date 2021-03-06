import { Route } from "react-router-dom";
import SocialCurrency from "./pages/SocialCurrency";
import ReduceTaxes from "./pages/ReduceTaxes";
import CryptoHacks from "./pages/CryptoHacks";
import BigPicture from "./pages/BigPicture";

import MainHeader from "./UI/MainHeader";
import MainFooter from "./UI/MainFooter";
import "./App.css";


function App() {

  const addSurveyHandler = textfield => {
    console.log("In App.js");
    console.log(textfield)
  }
  
  return (
    <div>
      <MainHeader />
      <p className="mainscreen">QR code will link you directly to one of the above pages ^</p>
      <main>
       <Route path="/socialcurrency"><SocialCurrency onAddSurveyData={addSurveyHandler} /></Route>
        <Route path="/reducetaxes"><ReduceTaxes onAddSurveyData={addSurveyHandler} /></Route>
        <Route path="/cryptohacks"><CryptoHacks onAddSurveyData={addSurveyHandler} /></Route>
        <Route path="/bigpicture"><BigPicture onAddSurveyData={addSurveyHandler} /></Route>
      </main>
      <footer><MainFooter /></footer>
    </div>
  );
}

export default App;

