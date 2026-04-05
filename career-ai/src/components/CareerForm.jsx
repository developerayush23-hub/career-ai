import { useState } from "react";

export default function CareerForm() {
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(`Suggested Career:
- Software Developer
- Data Analyst
Skills: Coding, Problem Solving
Salary: 5-15 LPA`);
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl mb-4">Find Your Career</h2>

      <input
        className="w-full p-3 bg-gray-800 rounded mb-4"
        placeholder="Enter your interest..."
        onChange={(e) => setInterest(e.target.value)}
      />

      <button
        onClick={handleClick}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Get Suggestion
      </button>

      {result && (
        <div className="mt-4 text-gray-300 whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
}