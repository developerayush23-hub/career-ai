export default function Courses() {
  const courses = ["Web Development", "Data Science", "AI/ML"];

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-2xl mb-6">Courses</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition"
          >
            <h3>{c}</h3>
            <p className="text-sm text-gray-400">Start learning →</p>
          </div>
        ))}
      </div>
    </div>
  );
}