import PropTypes from "prop-types";

export default function SectionResult({ key, icon, name, score }) {
  console.log(key);
  return (
    <div className="SectionResult" key={key}>
      <img src={icon}></img>
      <p>{name}</p>
      <p>{score} / 100</p>
    </div>
  );
}

SectionResult.propTypes = {
  key: PropTypes.number,
  icon: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
};
