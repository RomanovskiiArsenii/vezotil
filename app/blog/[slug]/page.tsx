
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';

// Mock data - в реальном проекте будет загружаться из CMS
const blogData: Record<string, any> = {
  'preoperative-protocols-vezotil': {
    title: 'Протоколы предоперационной подготовки при использовании ВЕЗОТИЛ',
    content: `
      <p>Правильная предоперационная подготовка является ключевым фактором успешной анестезии. При использовании препарата ВЕЗОТИЛ важно соблюдать специально разработанные протоколы.</p>
      
      <h3>Предоперационная оценка пациента</h3>
      <p>Перед применением ВЕЗОТИЛ необходимо провести тщательную оценку состояния животного:</p>
      <ul>
        <li>Физикальный осмотр с особым вниманием к сердечно-сосудистой системе</li>
        <li>Аускультация сердца и легких</li>
        <li>Оценка гидратации и общего состояния</li>
        <li>Сбор анамнеза о предыдущих анестезиях</li>
      </ul>
    `,
    publishDate: '2024-01-25T11:00:00Z',
    category: 'tips',
    readTime: 6,
    author: 'Анестезиолог М.И. Кузнецова',
    featuredImage: 'https://www.sdstate.edu/sites/default/files/2020-05/lab-3498585_1920.jpg',
    tags: ['протоколы', 'подготовка', 'анестезия']
  },
  'vital-signs-monitoring-vezotil': {
    title: 'Мониторинг жизненных функций во время анестезии ВЕЗОТИЛ',
    content: `
      <p>Постоянный мониторинг жизненно важных функций является обязательным при проведении анестезии препаратом ВЕЗОТИЛ.</p>
      
      <h3>Основные параметры для контроля</h3>
      <ul>
        <li>Частота сердечных сокращений: 60-140 уд/мин для собак, 120-200 уд/мин для кошек</li>
        <li>Частота дыхания: 8-20 дых/мин</li>
        <li>Артериальное давление: 80-120 мм рт.ст. (среднее)</li>
        <li>Насыщение кислорода: не менее 95%</li>
      </ul>
    `,
    publishDate: '2024-02-20T16:00:00Z',
    category: 'education',
    readTime: 10,
    author: 'Кардиолог-ветеринар П.А. Волков',
    tags: ['мониторинг', 'безопасность', 'анестезия']
  },
  'anesthesia-elderly-animals': {
    title: 'Особенности анестезии у пожилых животных',
    content: `
      <p>Анестезия пожилых животных требует особого подхода и тщательной предоперационной подготовки.</p>
      
      <h3>Возрастные изменения</h3>
      <p>У пожилых животных наблюдаются физиологические изменения, влияющие на действие анестетиков:</p>
      <ul>
        <li>Снижение функции почек и печени</li>
        <li>Изменения в сердечно-сосудистой системе</li>
        <li>Уменьшение мышечной массы</li>
        <li>Изменение чувствительности к препаратам</li>
      </ul>
    `,
    publishDate: '2024-03-05T12:00:00Z',
    category: 'tips',
    readTime: 7,
    author: 'Геронтолог-ветеринар Л.В. Петрова',
    tags: ['пожилые животные', 'гериатрия', 'анестезия']
  },
  'anesthetics-comparative-study': {
    title: 'Исследование: сравнительная эффективность анестетиков',
    content: `
      <p>Результаты масштабного сравнительного исследования эффективности различных анестетиков в ветеринарной практике.</p>
      
      <h3>Методология исследования</h3>
      <p>В исследовании приняли участие 1200 животных, разделенных на 4 группы по типу применяемого анестетика.</p>
      
      <h3>Результаты для ВЕЗОТИЛ</h3>
      <ul>
        <li>Время наступления анестезии: 3,2±0,8 мин</li>
        <li>Продолжительность действия: 52±12 мин</li>
        <li>Качество пробуждения: отличное в 94% случаев</li>
        <li>Побочные эффекты: менее 2%</li>
      </ul>
    `,
    publishDate: '2024-02-28T09:00:00Z',
    category: 'research',
    readTime: 15,
    author: 'Научно-исследовательская группа ВЕТСТЕМ',
    tags: ['исследования', 'сравнение', 'эффективность']
  },
  'modern-anesthesia-approaches': {
    title: 'Современные подходы к анестезии мелких домашних животных',
    content: `
      <p>Анестезия является важнейшим компонентом современной ветеринарной медицины. С развитием новых препаратов и методик, ветеринарные врачи получили в свое распоряжение более безопасные и эффективные средства для проведения анестезии.</p>
      
      <h3>Эволюция ветеринарной анестезии</h3>
      <p>За последние десятилетия ветеринарная анестезиология претерпела значительные изменения. Если ранее основными препаратами были барбитураты и эфир, то сегодня в арсенале ветеринарного врача находятся современные анестетики, обеспечивающие высокий уровень безопасности.</p>
      
      <h3>Классификация современных анестетиков</h3>
      <ul>
        <li><strong>Ингаляционные анестетики:</strong> изофлуран, севофлуран</li>
        <li><strong>Внутривенные анестетики:</strong> пропофол, альфаксалон</li>
        <li><strong>Диссоциативные анестетики:</strong> кетамин, тилетамин/золазепам</li>
        <li><strong>Комбинированные препараты:</strong> ВЕЗОТИЛ и аналоги</li>
      </ul>
      
      <h3>ВЕЗОТИЛ: новое слово в ветеринарной анестезии</h3>
      <p>Препарат ВЕЗОТИЛ, содержащий комбинацию тилетамина и золазепама, представляет собой значительное достижение в области ветеринарной анестезии. Эта комбинация обеспечивает:</p>
      
      <ul>
        <li>Быстрое наступление анестезии (2-5 минут)</li>
        <li>Стабильную работу сердечно-сосудистой системы</li>
        <li>Минимальное угнетение дыхания</li>
        <li>Плавное пробуждение без возбуждения</li>
        <li>Широкое терапевтическое окно</li>
      </ul>
      
      <h3>Протоколы применения</h3>
      <p>Современная ветеринарная анестезия требует индивидуального подхода к каждому пациенту. При выборе анестетика необходимо учитывать:</p>
      
      <ul>
        <li>Вид и породу животного</li>
        <li>Возраст и массу тела</li>
        <li>Сопутствующие заболевания</li>
        <li>Тип планируемой процедуры</li>
        <li>Длительность вмешательства</li>
      </ul>
      
      <h3>Мониторинг во время анестезии</h3>
      <p>Безопасность анестезии напрямую зависит от качества мониторинга жизненно важных функций. Современное оборудование позволяет контролировать:</p>
      
      <ul>
        <li>Частоту сердечных сокращений</li>
        <li>Артериальное давление</li>
        <li>Насыщение крови кислородом</li>
        <li>Концентрацию CO2 в выдыхаемом воздухе</li>
        <li>Температуру тела</li>
      </ul>
      
      <h3>Заключение</h3>
      <p>Современная ветеринарная анестезия стала значительно безопаснее благодаря новым препаратам и методикам. ВЕЗОТИЛ представляет собой оптимальный выбор для большинства процедур у кошек и собак, обеспечивая высокое качество анестезии при минимальных рисках.</p>
    `,
    publishDate: '2024-01-15T10:00:00Z',
    category: 'education',
    readTime: 12,
    author: 'Главный ветеринар ВЕТСТЕМ',
    featuredImage: 'https://www.avma.org/sites/default/files/2025-04/AVMANews20250421-VAA-guidelines-620x413.jpg',
    tags: ['анестезия', 'образование', 'ветеринария', 'ВЕЗОТИЛ']
  },
  'complex-surgery-case-vezotil': {
    title: 'Клинический случай: сложная операция с применением ВЕЗОТИЛ',
    content: `
      <p>В данной статье представлен клинический случай успешного применения препарата ВЕЗОТИЛ при проведении сложной абдоминальной операции у собаки породы лабрадор.</p>
      
      <h3>Анамнез</h3>
      <p>Пациент: лабрадор, кобель, возраст 7 лет, масса тела 32 кг. Поступил в клинику с признаками острого живота: рвота, отказ от корма, болезненность при пальпации брюшной стенки.</p>
      
      <h3>Диагностика</h3>
      <p>При проведении УЗИ органов брюшной полости обнаружено:</p>
      <ul>
        <li>Расширение желудка с большим количеством жидкости</li>
        <li>Заворот желудка по длинной оси</li>
        <li>Нарушение кровообращения в стенке желудка</li>
      </ul>
      
      <h3>Предоперационная подготовка</h3>
      <p>С учетом критического состояния пациента была проведена экстренная стабилизация:</p>
      <ul>
        <li>Декомпрессия желудка через зонд</li>
        <li>Инфузионная терапия (раствор Рингера-лактата)</li>
        <li>Премедикация: атропин 0,03 мг/кг п/к</li>
      </ul>
      
      <h3>Анестезия ВЕЗОТИЛ</h3>
      <p>Для анестезии был выбран ВЕЗОТИЛ в дозе 8 мг/кг внутривенно. Выбор препарата был обусловлен:</p>
      <ul>
        <li>Быстрым наступлением эффекта</li>
        <li>Минимальным влиянием на гемодинамику</li>
        <li>Хорошей управляемостью анестезии</li>
      </ul>
      
      <h3>Ход операции</h3>
      <p>Анестезия наступила через 3 минуты после введения препарата. Параметры мониторинга:</p>
      <ul>
        <li>ЧСС: 85-95 уд/мин (стабильно)</li>
        <li>АД: 110/70 мм рт.ст.</li>
        <li>SpO2: 98-99%</li>
        <li>Температура: 37.8°C</li>
      </ul>
      
      <p>Продолжительность операции составила 85 минут. В ходе вмешательства проведено:</p>
      <ul>
        <li>Устранение заворота желудка</li>
        <li>Резекция некротизированного участка стенки</li>
        <li>Гастропексия для профилактики рецидива</li>
      </ul>
      
      <h3>Послеоперационный период</h3>
      <p>Пробуждение наступило через 45 минут после окончания операции, было плавным без возбуждения. Через 2 часа пациент мог стоять, координация восстановилась полностью.</p>
      
      <h3>Выводы</h3>
      <p>Применение ВЕЗОТИЛ обеспечило:</p>
      <ul>
        <li>Стабильную анестезию на протяжении всей операции</li>
        <li>Отсутствие осложнений со стороны сердечно-сосудистой системы</li>
        <li>Быстрое и комфортное пробуждение</li>
        <li>Полное восстановление в течение 6 часов</li>
      </ul>
      
      <p>Данный случай демонстрирует высокую эффективность и безопасность препарата ВЕЗОТИЛ при проведении сложных хирургических вмешательств.</p>
    `,
    publishDate: '2024-02-08T14:30:00Z',
    category: 'case-study',
    readTime: 8,
    author: 'Хирург-ветеринар А.В. Смирнов',
    featuredImage: 'https://images.ctfassets.net/8hq8guzcncfs/193bpECLLwLevMta1b0tp2/6ec5191423757013367164882db00703/Dog_with_tiny_cone_on.jpg?fm=webp&w=1193',
    tags: ['клинический случай', 'хирургия', 'ВЕЗОТИЛ', 'анестезия']
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = blogData[params.slug];
  
  if (!article) {
    return {
      title: 'Статья не найдена'
    };
  }

  return {
    title: `${article.title} - Блог ВЕЗОТИЛ`,
    description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author]
    }
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = blogData[params.slug];

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: article.title, href: `/blog/${params.slug}` }
  ];

  const categoryNames: Record<string, string> = {
    education: 'Образование',
    research: 'Исследования',
    'case-study': 'Клинические случаи',
    announcement: 'Объявления',
    tips: 'Советы'
  };

  return (
    <PageLayout>
      <PageHeader
        title={article.title}
        subtitle=""
        backgroundImage={article.featuredImage}
        breadcrumbs={breadcrumbs}
      />

      <ContentSection background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="hud-element p-8 rounded-lg">
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-6 border-b border-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.publishDate).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} мин чтения</span>
              </div>
              <div className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm">
                {categoryNames[article.category] || article.category}
              </div>
            </div>

            <div 
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && (
              <div className="mt-8 pt-6 border-t border-slate-600">
                <div className="flex items-center space-x-3">
                  <Tag className="w-5 h-5 hud-text" />
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-slate-600">
              <Link 
                href="/blog" 
                className="inline-flex items-center space-x-2 hud-text hover:text-blue-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться к блогу</span>
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}

// Для статической генерации путей
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}
