export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
}