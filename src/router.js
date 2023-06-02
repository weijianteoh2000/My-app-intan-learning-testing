import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./form";
import Display from "./display";


function MyRouter() {
    return (
      <>
        <Routes>
            <Route exact path="/" element={<Form />} /> //from home page (app.js) to Form page
            <Route path="display/:transId" exact element={<Display />} /> //dari path display to display page (display.js)
        {/* add path after display/ for the domain hosting to add the transaction id */}
        
        </Routes>
      </>
    )
  }
 
  export default MyRouter;