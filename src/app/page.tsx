
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] bg-background text-foreground transition-colors duration-300">
      <div className="flex flex-col my-0 mx-4 p-6 max-sm:p-4 bg-white dark:bg-[var(--darkGray)] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Проект на Next.js
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Этот проект создан для изучения возможностей фреймворка <a href="https://nextjs.org/" target="_blank" className="text-blue-500 font-semibold">Next.js</a>, включая работу с маршрутизацией, серверным рендерингом и API.
        </p>
        <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
          Реализовано:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg text-gray-700 dark:text-gray-300">
          <li>Работа с API JSON Placeholder для отображения данных</li>
          <li>Динамическая маршрутизация и передача параметров через URL</li>
          <li>Адаптивный дизайн и темная тема с использованием <span className="font-semibold">Tailwind CSS</span></li>
          <li>Настройка SEO с использованием <span className="font-semibold">Metadata</span> Next.js</li>
          <li>To-Do List с возможностью добавления задач</li>
          <li>Деплой проекта на <span className="font-semibold">Netlify</span></li>
        </ul>
      </div>
    </div>
  );
}
