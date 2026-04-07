const ITEMS = [
  "Increased energy",
  "Deep relaxation",
  "Increased joy and aliveness",
  "Emotional healing",
  "Trauma release",
  "Freedom from limiting beliefs",
  "Connection with our true selves",
];

export function BenefitsList() {
  return (
    <ul className="benefits-list">
      {ITEMS.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
