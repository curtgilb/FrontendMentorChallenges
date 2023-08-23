interface SectionResultProps {
  index: number;
  icon: string;
  name: string;
  score: number;
  color: string;
}

export const SectionResult = ({
  index,
  icon,
  name,
  score,
  color,
}: SectionResultProps) => {
  return (
    <div
      style={{ backgroundColor: `var(--${color}-light)` }}
      className="SectionResult"
      key={index}
    >
      <img src={icon}></img>
      <p style={{ color: `var(--${color})` }}>{name}</p>
      <p>{score} / 100</p>
    </div>
  );
};
