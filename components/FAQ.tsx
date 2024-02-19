import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import ClearIcon from "@mui/icons-material/Clear";
import HandleGet from "./HandleGet";

function FAQ() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <section className="w-full flex justify-center items-center  mx-auto flex-col">
        <div className="px-6 pt-10 pb-8 mt-8 w-[83.3%]  sm:mx-auto  sm:rounded-lg sm:px-10 flex gap-5 flex-col max-sm:text-center">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 mb-5 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows,
            movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a single commercial – all
            for one low monthly price. Theres always something new to discover and new TV shows and
            movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>
            How much does Netflix cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
            one fixed monthly fee. Plans range from EUR 11.99 to EUR 7.99 a month. No extra costs,
            no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
            at netflix.com from your personal computer or on any internet-connected device that
            offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
            players and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
            downloads to watch while youre on the go and without an internet connection. Take
            Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily
            cancel your account online in two clicks. There are no cancellation fees start or stop
            your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>
            What can I watch on Netflix?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime,
            award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>
            Is Netflix good for kids?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            The Netflix Kids experience is included in your membership to give parents control while
            kids enjoy family-friendly TV shows and movies in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you restrict the
            maturity rating of content kids can watch and block specific titles you don’t want kids
            to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ borderRadius: 0, backgroundColor: "rgb(45, 45, 45)" }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}>
        <AccordionSummary
          className="hover:bg-[rgb(65,65,65)]"
          style={{ borderBottom: "2px solid black" }}
          expandIcon={
            expanded === "panel1" ? (
              <ClearIcon style={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <AddIcon style={{ fontSize: "3rem", color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography style={{ fontSize: "1.5rem", color: "white" }}>
            Why am I seeing this language?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "1.3rem", color: "white" }}>
            Your browser preferences determine the language shown here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    <HandleGet />

    </section>
    
  );
}

export default FAQ;
