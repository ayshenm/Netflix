import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function FAQ() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel: React.SetStateAction<string>) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : "");
  };

  const accordionItems = [
    {
      id: "panel1",
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: "panel2",
      question: "How much do Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 11.99 to EUR 7.99 a month. No extra costs, no contracts.",
    },
    {
      id: "panel3",
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: "panel4",
      question: "How do I cancel?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: "panel5",
      question: "What I watch on Netflix?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: "panel6",
      question: "Is Netflix good for kids?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: "panel7",
      question: "Why am I seeing language?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center mx-auto flex-col ">
      <div className="px-6 py-[4.5rem]  mt-8 w-[83.3%] sm:mx-auto sm:rounded-lg sm:px-10 flex gap-5 flex-col max-sm:text-center">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 mb-5 text-center text-3xl font-bold tracking-tight text-white md:text-5xl max-sm:text-[2rem]">
            Frequently Asked Questions
          </h2>
        </div>
        {accordionItems.map((item) => (
          <Accordion
            key={item.id}
            style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}>
            <AccordionSummary
              className="hover:bg-[rgb(65,65,65)]"
              style={{ borderBottom: "2px solid black" }}
              expandIcon={
                expanded === item.id ? (
                  <ClearIcon style={{ fontSize: "36px", color: "white" }} />
                ) : (
                  <AddIcon style={{ fontSize: "36px", color: "white" }} />
                )
              }
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}>
              <Typography className="text-white lg:text-2xl">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-sm:text-[12px] text-left text-white">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
