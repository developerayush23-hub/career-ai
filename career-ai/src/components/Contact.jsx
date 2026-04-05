export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-12 bg-gray-900 p-6 rounded-xl">
      <h2 className="mb-4">Contact Counselor</h2>

      <input className="w-full p-2 mb-2 bg-gray-800 rounded" placeholder="Name" />
      <input className="w-full p-2 mb-2 bg-gray-800 rounded" placeholder="Email" />
      <textarea className="w-full p-2 bg-gray-800 rounded" placeholder="Message" />

      <button className="mt-3 bg-purple-600 px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}