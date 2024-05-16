import { Provider, useSelector } from "react-redux";
import EventsPage from "../pages/EventsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../shared/UI/Spinner/Spinner";
import { store } from "./store";

function App() {
  const visible = useSelector((state: any) => state.SpinnerVisible.value)
  return (
    <Provider store={store}>
      <Spinner disabled={visible} />
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
