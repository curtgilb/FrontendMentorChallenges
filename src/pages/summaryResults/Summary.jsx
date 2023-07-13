import Button from "./Button";
// import data from "./data.json";
import SectionResult from "./SectionResult";
import "./resultsSummary.css";

export default function Summary() {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/images/icon-visual.svg",
    },
  ];
  return (
    <>
      <div className="score">
        <div className="summary">
          <p>Your Result</p>
          <div className="circle">
            <p className="big-text">76</p>
            <p>of 100</p>
          </div>
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="breakdown">
          <p>Summary</p>
          {data.map((item, index) => {
            console.log(item);
            console.log(index);
            return (
              <SectionResult
                key={index}
                icon={item.icon}
                name={item.category}
                score={item.score}
              ></SectionResult>
            );
          })}
          <Button text="View Results" />
        </div>
      </div>
    </>
  );
}
