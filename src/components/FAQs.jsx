import React, { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "Question1",
      answer: `1111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit
            reiciendis cumque necessitatibus, reprehenderit quas tempore nemo
            quos repudiandae culpa voluptatem nulla itaque consectetur, aliquam
            a eligendi molestiae dolore officia?`,
    },
    {
      question: "Question2",
      answer: `222222222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit
            reiciendis cumque necessitatibus, reprehenderit quas tempore nemo
            quos repudiandae culpa voluptatem nulla itaque consectetur, aliquam
            a eligendi molestiae dolore officia?`,
    },
    {
      question: "Question3",
      answer: `333333333333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit
            reiciendis cumque necessitatibus, reprehenderit quas tempore nemo
            quos repudiandae culpa voluptatem nulla itaque consectetur, aliquam
            a eligendi molestiae dolore officia?`,
    },
    {
      question: "Question4",
      answer: `4444444444444444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit
            reiciendis cumque necessitatibus, reprehenderit quas tempore nemo
            quos repudiandae culpa voluptatem nulla itaque consectetur, aliquam
            a eligendi molestiae dolore officia?`,
    },
  ];
  const [faqValue, setFaqValue] = useState("");
  console.log(faqValue, "dsfghjk");
  return (
    <div>
      {faqData.map((obj, i) => (
        <div className="accordion-item">
          <div className="accordion_btn">
            <h1 onClick={() => setFaqValue(i)}>{obj.question}</h1>
          </div>
          {faqValue === i ? (
            <div className="accordion_body">
              <h2>{obj.answer}</h2>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
