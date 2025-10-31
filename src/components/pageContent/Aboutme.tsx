export default function AboutMe() {
  return (
    <div className="mx-auto max-w-4xl px-6 mb-6">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center">
          Обо мне
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 md:text-lg">
          Студент в поиске позиции Frontend разработчика
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Education Section */}
        <section>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Образование
            </h2>
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                АлтГТУ им. И.И. Ползунова
              </h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                Студент третьего курса АлтГТУ им. И.И. Ползунова направления
                Программная инженерия
              </p>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Soft Skills
            </h2>
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Коммуникабельность",
              "Мотивированность",
              "Обучаемость",
              "Креативность",
              "Целеустремлённость",
              "Работа в команде",
            ].map((skill) => (
              <div
                key={skill}
                className="group rounded-lg border border-gray-200 bg-gray-50/70 p-4 text-center shadow-md transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-gray-700"
              >
                <p className="text-base font-medium transition-colors group-hover:text-green-600 dark:group-hover:text-green-500 md:text-lg">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Инструменты и технологии
            </h2>
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
          </div>

          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {["REST API", "Jira", "Trello", "Postman", "Git", "Figma", "npm/pnpm", "Confluence"].map(
              (tool) => (
                <div
                  key={tool}
                  className="group rounded-lg border border-gray-200 bg-gray-50/70 p-4 text-center shadow-md transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-gray-700"
                >
                  <p className="text-base font-medium transition-colors group-hover:text-green-600 dark:group-hover:text-green-500 md:text-lg">
                    {tool}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
