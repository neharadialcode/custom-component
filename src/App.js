import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import CustomPagination from "./components/Custompagination";
import Duration from "./components/Duration";
import EventForm from "./components/EventForm";
import FormValidation from "./components/FormValidation";
import ImagesTab from "./components/ImagesTab";
import Payment from "./components/Payment";
import SearchData from "./components/SearchData";
import SearchData2 from "./components/SearchData2";
import SecondPage from "./components/SecondPage";
import SomeBtns from "./components/SomeBtns";
import SearchWithSelect from "./components/SearchWithSelect";
import CommonHeader from "./components/CommonHeader";
import InfiniteScrollComponent from "./components/InfiniteScroll";
import DateFilter from "./components/DateFilter";
import CartFunction from "./components/CartFunction";
import Component1 from "./components/fordifferenciate-between-custom-hook/Component1";
function App() {
  const [id, setId] = useState(0);
  console.log(id);
  return (
    <div className="App">
      {/* <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          "Ooops! I pressed the RED button! I wonder what will happen now? :flushed: #stitchlist"
        )}&url=${encodeURIComponent("\nhttps://stitched-stories.com/")}`}
      >
        Tweet
      </a> */}

      {/* <Tabs /> */}
      {/* <CustomSelect /> */}
      {/* <Game /> */}
      <BrowserRouter>
        {/* <CommonHeader /> */}
        <Routes>
          <Route>
            <Route path="/pagination" element={<CustomPagination />} />
            <Route path="/date-filter" element={<DateFilter />} />
            <Route path="/search" element={<SearchWithSelect />} />
            <Route path="/image-tabs" element={<ImagesTab />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/duration" element={<Duration />} />
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/form" element={<FormValidation />} />
            <Route path="/table-data" element={<SearchData />} />
            <Route path="/table-data2" element={<SearchData2 />} />
            <Route path="/count" element={<Count />} />
            <Route path="/cart" element={<CartFunction />} />
            <Route path="/component" element={<Component1 />} />
            <Route path="/" element={<SomeBtns setId={setId} />} />
            <Route
              path="/infinite-scroll"
              element={<InfiniteScrollComponent />}
            />
            <Route path={`/second-page/:id`} element={<SecondPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
