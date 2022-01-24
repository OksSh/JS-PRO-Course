export function Time() {
  const time = new Date().toLocaleTimeString();
  return (
    <div style={{ margin: '20px', fontSize: '150px' }}>
      <p>{time}</p>
    </div>
  );
}
