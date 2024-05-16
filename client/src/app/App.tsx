import { Provider } from "react-redux";
import EventsPage from "../pages/EventsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../shared/UI/Spinner/Spinner";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
            <Suspense fallback={<Spinner disabled={true} />}>
              <EventsPage />
            </Suspense>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
