import { Provider, useSelector } from "react-redux";
import EventsPage from "../pages/EventsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../shared/UI/Spinner/Spinner";
import { store } from "./store";
import RegistrationPage from "../pages/RegistrationPage";
import VisitPage from "../pages/VisitPage";

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
            <Route path='/registr/:id' element={
            <Suspense fallback={<Spinner disabled={true} />}>
              <RegistrationPage />
            </Suspense>}></Route>
            <Route path='/view/:id' element={
            <Suspense fallback={<Spinner disabled={true} />}>
              <VisitPage />
            </Suspense>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
