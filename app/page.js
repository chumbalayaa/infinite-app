"use client"

export default function Home() {
  const dataObject = { key: 'value', nested: { innerKey: 'innerValue' } };

  return (
    <div>
      {dataObject}
    </div>
  );
}
