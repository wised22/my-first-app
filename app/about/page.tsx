import Card from "@/components/Card";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Мой первый проект на Next.js</h1>
      <p>Выполнил: Константинов Ф., группа ИС-14/9</p>

      {/* Вот сюда вставляем наши карточки */}
      <Card title="Первая карточка" text="Текст первой карточки" />
      <Card title="Вторая карточка" text="Текст второй карточки" />
    </div>
  );
}