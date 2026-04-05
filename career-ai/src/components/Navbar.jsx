export default function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b border-gray-800">
      <h1 className="font-bold text-lg">CareerAI</h1>
      <div className="space-x-4 text-sm text-gray-400">
        <span>Courses</span>
        <span>Chat</span>
        <span>Contact</span>
      </div>
    </div>
  );
}