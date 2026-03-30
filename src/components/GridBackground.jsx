// src/components/GridBackground.jsx
export default function GridBackground() {

  return (

    <div className="absolute inset-0 z-0">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

    </div>

  );
}