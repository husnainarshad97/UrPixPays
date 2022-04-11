import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import { Try } from "./components/Try";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/try" element={Try} />
        {/* <Route exact path="/table" element={Table} /> */}
        {/* <Route exact path="" element="" /> */}
      </Routes>
    </>
  );
};

export default App;
