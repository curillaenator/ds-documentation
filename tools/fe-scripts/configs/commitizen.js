module.exports = {
  types: [
    {
      name: 'feat: Добавление нового функционала',
      value: 'feat',
    },
    {
      name: 'fix: Баг фикс',
      value: 'fix',
    },
    {
      name: 'docs: Обновление документации',
      value: 'docs',
    },
    {
      name: 'style: Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
      value: 'style',
    },
    {
      name: 'refactor: Правки кода без исправления ошибок или добавления новых функций',
      value: 'refactor',
    },
    {
      name: 'perf: Изменения направленные на улучшение производительности',
      value: 'perf',
    },
    {
      name: 'test: Добавление тестов',
      value: 'test',
    },
    {
      name: 'ci: Настройка CI и работа со скриптами',
      value: 'ci',
    },
    {
      name: 'chore: Build process or auxiliary tool changes',
      value: 'chore',
    },
  ],

  // scopes: [{ name: 'components' }],
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите ОБЛАСТЬ изменений:',
    subject: 'Напишите КОРОТКОЕ описание:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // maxHeaderWidth: 172,
  subjectLimit: 172,
  allowCustomScopes: true,
  // disableScopeLowerCase: true,
  // allowBreakingChanges: true,
  footerPrefix: 'МЕТА ДАННЫЕ:',
};
