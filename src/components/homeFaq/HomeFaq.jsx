import React, { useState } from 'react'
import './HomeFaq.css'
// import { accordionData } from '../../assets/data/faq';
import FAQ from '../faq/Accordian';
import faqImg from '../../assets/imgs/faq.png';

// import { FaPlus } from "react-icons/fa";

const HomeFaq = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false

    },
    // {
    //   question:
    //     "How many questions does it take to makes a succesful FAQ Page?",
    //   answer: "This many!Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    //   open: false
    // }
  ]);


  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };



  return (

    <div className='container homeFaq'>
      <p className='subHeading'>Your Questions Answered</p>
      <p className="mainHeading">Insightful Inquiries: Navigating the Details</p>
      <div className="faqCenter">

        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="faqImg">
          <img src={faqImg} alt="" />
        </div>

      </div>

    </div>
  );
}

export default HomeFaq
