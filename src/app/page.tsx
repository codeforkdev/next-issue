import Button from "./Button";

export default function Home() {
  const date = new Date();
  return (
    <>
      <h1>Home Page</h1>
      <div>Date: {date.toLocaleTimeString()}</div>
      <div>
        <Button />
      </div>
    </>
  );
}
