import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Kart from "./features/kart/Kart";
import Contacts from "./features/contacts/Contacts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Header /> <Kart />
              </>
            }
            path="/"
          />
          <Route
            element={
              <>
                <Header /> <Contacts />
              </>
            }
            path="/contacts"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
