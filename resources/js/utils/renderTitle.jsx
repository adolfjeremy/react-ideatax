const renderTitle = (title) => {
  const words = title.trim().split(" ");

  if (words.length <= 2) {
    // kalau cuma 1–2 kata, semuanya bold
    return <span style={{ fontWeight: 700 }}>{title}</span>;
  }

  const normalText = words.slice(0, -3).join(" ");
  const boldText = words.slice(-3).join(" ");

  return (
    <>
      <span style={{ fontWeight: 300 }}>{normalText} </span>
      <br />
      <span style={{ fontWeight: 700 }}>{boldText}</span>
    </>
  );
};

export default renderTitle;