
// Оптимизированная версия с динамической загрузкой контента

// Типы для контента
export interface ArticleContent {
  title: string;
  fullText: string;
}

export interface ClinicalReportContent {
  title: string;
  fullText: string;
}

// Легкие метаданные статей (всегда в памяти)
const articlesMetadata = {
  'preoperative-protocols-vezotil': {
    title: 'Предоперационные протоколы с ВЕЗОТИЛ',
    category: 'Клиническая практика'
  },
  'vital-signs-monitoring-vezotil': {
    title: 'Мониторинг витальных функций при анестезии ВЕЗОТИЛ',
    category: 'Безопасность'
  },
  'anesthesia-elderly-animals': {
    title: 'Анестезия пожилых животных с ВЕЗОТИЛ',
    category: 'Специальные группы'
  },
  'pain-management-protocols': {
    title: 'Протоколы обезболивания с ВЕЗОТИЛ',
    category: 'Управление болью'
  },
  'pediatric-anesthesia-vezotil': {
    title: 'Анестезия молодых животных с ВЕЗОТИЛ',
    category: 'Педиатрия'
  },
  'emergency-procedures-vezotil': {
    title: 'Экстренные процедуры с ВЕЗОТИЛ',
    category: 'Неотложная помощь'
  }
};

// Метаданные клинических исследований
const clinicalMetadata = {
  'biocontrol-comparative-study': {
    title: 'Сравнительная оценка препаратов Везотил и Золетил',
    location: 'Центр Биоконтроль'
  },
  'dobryj-doctor-study': {
    title: 'Исследование в сети клиник Добрый Доктор',
    location: 'Сеть клиник'
  },
  'four-paws-study': {
    title: 'Исследование в клинике Четыре лапы',
    location: 'Клиника Четыре лапы'
  },
  'vetprofalyans-study': {
    title: 'Исследование в клиниках ВетПрофАльянс',
    location: 'ВетПрофАльянс'
  },
  'pantera-study': {
    title: 'Исследование в клинике Пантера',
    location: 'Клиника Пантера'
  },
  'best-clinical-study': {
    title: 'Исследование в сети клиник Бэст',
    location: 'Сеть клиник Бэст'
  },
  'dtst-clinical-study': {
    title: 'Исследование в клинике Добрые руки',
    location: 'Клиника Добрые руки'
  },
  'vetlife-clinical-study': {
    title: 'Исследование в клинике ВетЛайф',
    location: 'Клиника ВетЛайф'
  },
  'moszoo-clinical-study': {
    title: 'Исследование в Московском зоопарке',
    location: 'Московский зоопарк'
  }
};

// Кеш для загруженного контента
const contentCache = new Map<string, ArticleContent | ClinicalReportContent>();

// Функция динамической загрузки контента статей
export async function getArticleContent(slug: string): Promise<ArticleContent | null> {
  const cacheKey = `article-${slug}`;
  
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey) as ArticleContent;
  }

  try {
    const { default: content } = await import(`./content/articles/${slug}`);
    contentCache.set(cacheKey, content);
    return content;
  } catch (error) {
    console.error(`Failed to load article content for ${slug}:`, error);
    return getDefaultArticleContent(slug);
  }
}

// Синхронная функция для клинических исследований (обратная совместимость)
export function getClinicalReportContent(studyId: string): ClinicalReportContent | null {
  const metadata = clinicalMetadata[studyId as keyof typeof clinicalMetadata];
  if (!metadata) return null;
  
  return {
    title: metadata.title,
    fullText: `# ${metadata.title}\n\nДля просмотра полного содержания используйте PDF viewer.`
  };
}

// Асинхронная функция для динамической загрузки контента исследований
export async function getClinicalReportContentAsync(studyId: string): Promise<ClinicalReportContent | null> {
  const cacheKey = `clinical-${studyId}`;
  
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey) as ClinicalReportContent;
  }

  try {
    const { default: content } = await import(`./content/clinical/${studyId}`);
    contentCache.set(cacheKey, content);
    return content;
  } catch (error) {
    console.error(`Failed to load clinical content for ${studyId}:`, error);
    return getDefaultClinicalContent(studyId);
  }
}

// Синхронные функции для обратной совместимости (возвращают базовую информацию)
export function getScientificPublicationContent(slug: string): ArticleContent | null {
  const metadata = articlesMetadata[slug as keyof typeof articlesMetadata];
  if (!metadata) return null;
  
  return {
    title: metadata.title,
    fullText: `# ${metadata.title}\n\nДля просмотра полного содержания используйте PDF viewer.`
  };
}

// Дефолтный контент для статей
function getDefaultArticleContent(slug: string): ArticleContent {
  const metadata = articlesMetadata[slug as keyof typeof articlesMetadata];
  return {
    title: metadata?.title || 'Статья не найдена',
    fullText: `# ${metadata?.title || 'Статья'}\n\n## Содержание загружается...\n\nПожалуйста, подождите.`
  };
}

// Дефолтный контент для клинических исследований
function getDefaultClinicalContent(studyId: string): ClinicalReportContent {
  const metadata = clinicalMetadata[studyId as keyof typeof clinicalMetadata];
  return {
    title: metadata?.title || 'Исследование не найдено',
    fullText: `# ${metadata?.title || 'Клиническое исследование'}\n\n## Содержание загружается...\n\nПожалуйста, подождите.`
  };
}

// Экспорт метаданных для использования в компонентах
export { articlesMetadata, clinicalMetadata };
