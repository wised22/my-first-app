export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-brand text-white p-6 rounded-lg mb-6 shadow-md">
        <h1 className="text-2xl font-bold">Блог</h1>
      </header>
      {children}
    </div>
  );
}