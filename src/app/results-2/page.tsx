export default function Page() {
  const date = new Date();
  return (
    <>
      <h1>Results 2 Page</h1>
      <div>Date: {date.toLocaleTimeString()}</div>
    </>
  );
}
