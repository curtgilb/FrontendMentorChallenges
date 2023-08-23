import "@styles/ResultsSummary.css";
import { SectionResult } from "./SectionResult";
import Button from "./Button";
import data from "./data.json";

export function ResultsSummary() {
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
          <p className="card-title">Summary</p>
          {data.map((item, index) => {
            console.log(item);
            console.log(index);
            return (
              <SectionResult
                index={index}
                icon={item.icon}
                name={item.category}
                score={item.score}
                color={item.color}
              ></SectionResult>
            );
          })}
          <Button text="View Results" />
        </div>
      </div>
    </>
  );
}
