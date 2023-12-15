import "./Expression.css";

export const Expression = () => {
  const title = "HELLO Title"
  const name = "Sample"
  const arry = ["item1", "item2", "item3"]
  const bool = true

  const hello = (name) =>`${name}さんこんにちは！`

  return (
    <div className={name.toLowerCase()}>
    <h3>{title}</h3>
    <h3>{arry}</h3>
    <h3>{hello('Tarara')}</h3>
    <h3>{/* 画面上に出ません */}</h3>
    <h3>{bool}</h3>
    </div>
  );
};