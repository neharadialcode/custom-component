import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SecondPage = () => {
  const tabValue = [
    {
      tabBtn: "Frist Button",
      tabContent: "Frist Content",
      id: 1,
    },
    {
      tabBtn: "Second Button",
      tabContent: "Second Content",
      id: 2,
    },
    {
      tabBtn: "Third Button",
      tabContent: "Third Content",
      id: 3,
    },
    {
      tabBtn: "Fourth Button",
      tabContent: "Fourth Content",
      id: 4,
    },
  ];
  const [activeTab, setActivetab] = useState({});
  let navigate = useNavigate();
  const loaction = useLocation();
  const params = loaction.pathname.split("/")[2];
  console.log(params, "params");

  useEffect(() => {
    setActivetab(tabValue[params - 1]);
  }, [params]);
  return (
    <div>
      {tabValue.map((obj, i) => (
        <button
          className={`${
            params == i + 1 ? "btn btn-success" : "btn btn-danger"
          } my-5 mx-3`}
          onClick={() => {
            setActivetab(obj);
            navigate(`/second-page/${i + 1}`);
          }}
          key={i}
        >
          {obj.tabBtn}
        </button>
      ))}
      <h1>{activeTab.tabContent}</h1>
    </div>
  );
};

export default SecondPage;
