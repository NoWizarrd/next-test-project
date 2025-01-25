
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="flex flex-col my-0 mx-auto p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Проект на Next.js
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Этот проект создан для изучения возможностей фреймворка <a href="https://nextjs.org/" target="_blank" className="text-blue-500 font-semibold">Next.js</a>, включая работу с маршрутизацией, серверным рендерингом и API.
        </p>
        <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
          На текущий момент реализованы:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg text-gray-700 dark:text-gray-300">
          <li>Работа с API <span className="font-semibold">JSON Placeholder</span> для отображения данных</li>
          <li>Динамическая маршрутизация и передача параметров через URL</li>
          <li>Адаптивный дизайн с использованием <span className="font-semibold">Tailwind CSS</span></li>
          {/* <li>Темная тема, поддерживаемая через Tailwind</li> */}
        </ul>
      </div>
    </div>
  );
}
