export default function PriceCard({ text, price }) {
  return (
    <div className="flex gap-2 font-bold italic">
      <h1>{text}</h1>
      <h3>₩ {price}</h3>
    </div>
  );
}
