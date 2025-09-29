import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '../../../components/page-layouts/page-layout';
import PageHeader from '../../../components/page-layouts/page-header';
import ContentSection from '../../../components/page-layouts/content-section';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - в реальном проекте будет загружаться из CMS
const newsData: Record<string, any> = {
    'vetfarm-2023-participation': {
        title: 'ООО "ВЕТСТЕМ" принимает участие в международной выставке "ВетФарм 2023"',
        content: `
      <p>С 15 по 17 октября 2023 года компания ООО "ВЕТСТЕМ" успешно представила свою продукцию на международной выставке ветеринарной фармацевтики "ВетФарм 2023".</p>
      
      <p>Наш стенд посетили более 300 ветеринарных специалистов, фармацевтов и представителей профильных компаний. Особый интерес вызвал препарат ВЕЗОТИЛ, который получил высокие оценки от экспертов отрасли.</p>
      
      <h3>Достижения на выставке:</h3>
      <ul>
        <li>Подписаны соглашения о сотрудничестве с 12 дистрибьюторами</li>
        <li>Проведены презентации для более чем 200 ветеринарных врачей</li>
        <li>Получена положительная оценка от международных экспертов</li>
        <li>Установлены контакты с потенциальными партнерами из стран СНГ</li>
      </ul>
    `,
        publishDate: '2023-10-15T12:00:00Z',
        author: 'Отдел маркетинга ВЕТСТЕМ',
        featuredImage:
            'https://images.ctfassets.net/8hq8guzcncfs/193bpECLLwLevMta1b0tp2/6ec5191423757013367164882db00703/Dog_with_tiny_cone_on.jpg?fm=webp&w=1193',
    },
    'production-expansion-vezotil': {
        title: 'Расширение производственных мощностей для увеличения выпуска ВЕЗОТИЛ',
        content: `
      <p>Компания ООО "ВЕТСТЕМ" завершила масштабную модернизацию производственного комплекса, что позволило увеличить выпуск препарата ВЕЗОТИЛ в 2,5 раза.</p>
      
      <p>Инвестиции в размере 45 млн рублей были направлены на приобретение современного оборудования и автоматизацию производственных процессов.</p>
      
      <h3>Ключевые улучшения:</h3>
      <ul>
        <li>Установка нового асептического оборудования</li>
        <li>Внедрение системы автоматического контроля качества</li>
        <li>Расширение складских площадей</li>
        <li>Обучение персонала работе с новым оборудованием</li>
      </ul>
    `,
        publishDate: '2024-01-10T09:00:00Z',
        author: 'Производственный отдел',
        featuredImage:
            'https://sika.scene7.com/is/image/sika/usa-pharamceutical-white-room-stock:16-9?wid=1920&hei=1080&fit=crop%2C1',
    },
    'vezotil-registration-approved': {
        title: 'ВЕЗОТИЛ получил регистрационное удостоверение Россельхознадзора',
        content: `
      <p>Компания ООО "ВЕТСТЕМ" с гордостью сообщает о получении регистрационного удостоверения на инновационный препарат для анестезии животных ВЕЗОТИЛ от Россельхознадзора.</p>
      
      <p>Это знаменательное событие стало результатом многолетней работы команды ученых и ветеринарных специалистов, которые разрабатывали безопасный и эффективный препарат для общей анестезии кошек и собак.</p>
      
      <h3>Ключевые достижения:</h3>
      <ul>
        <li>Успешное прохождение всех этапов доклинических и клинических исследований</li>
        <li>Подтверждение высокой эффективности и безопасности препарата</li>
        <li>Соответствие всем требованиям российского законодательства</li>
        <li>Получение разрешения на промышленное производство</li>
      </ul>
      
      <p>ВЕЗОТИЛ содержит в своем составе тилетамина гидрохлорид и золазепама гидрохлорид в равных пропорциях, что обеспечивает стабильную и предсказуемую анестезию для различных ветеринарных процедур.</p>
      
      <h3>Преимущества нового препарата:</h3>
      <p>Препарат ВЕЗОТИЛ отличается от аналогов высокой безопасностью применения и контролируемостью анестезии. Время наступления эффекта составляет всего 3-5 минут, что значительно сокращает время подготовки к хирургическим вмешательствам.</p>
      
      <p>Особенно важно отметить, что препарат обеспечивает стабильную работу сердечно-сосудистой и дыхательной систем животного во время анестезии, что критически важно для безопасности пациента.</p>
      
      <h3>Планы по внедрению:</h3>
      <p>В ближайшие месяцы ВЕЗОТИЛ будет доступен ветеринарным клиникам по всей России. Компания планирует провести серию обучающих семинаров для ветеринарных врачей по правильному применению препарата.</p>
    `,
        publishDate: '2023-05-15T10:00:00Z',
        author: 'Пресс-служба ВЕТСТЕМ',
        featuredImage: 'https://www.avma.org/sites/default/files/2025-04/AVMANews20250421-VAA-guidelines-620x413.jpg',
    },
    'clinical-studies-effectiveness': {
        title: 'Многоцентровые клинические исследования подтвердили высокую эффективность ВЕЗОТИЛ',
        content: `
      <p>Результаты многоцентровых клинических исследований препарата ВЕЗОТИЛ продемонстрировали исключительную эффективность и безопасность при проведении анестезии у мелких домашних животных.</p>
      
      <h3>Основные результаты исследования:</h3>
      <ul>
        <li>98% успешных анестезий без осложнений</li>
        <li>Среднее время наступления анестезии: 3-4 минуты</li>
        <li>Оптимальная продолжительность действия: 45-60 минут</li>
        <li>Плавное пробуждение в 96% случаев</li>
        <li>Минимальный риск побочных эффектов</li>
      </ul>
      
      <p>В исследованиях приняли участие более 500 животных различных пород и возрастов в 15 ветеринарных клиниках России. Исследования проводились в течение 18 месяцев под строгим научным контролем.</p>
      
      <h3>Методология исследования:</h3>
      <p>Клинические исследования проводились по международным стандартам GCP (Good Clinical Practice). Все животные были разделены на группы по видам, возрасту и массе тела для получения наиболее объективных результатов.</p>
      
      <p>Особое внимание уделялось мониторингу жизненно важных функций во время анестезии: частота сердечных сокращений, артериальное давление, сатурация кислорода и частота дыхания.</p>
      
      <h3>Выводы экспертов:</h3>
      <p>"ВЕЗОТИЛ показал превосходные результаты во всех категориях безопасности и эффективности", - отметил ведущий исследователь профессор В.И. Петров. "Препарат может стать новым золотым стандартом анестезии в ветеринарной практике."</p>
    `,
        publishDate: '2023-03-20T14:00:00Z',
        author: 'Научный отдел ВЕТСТЕМ',
        featuredImage: 'https://www.sdstate.edu/sites/default/files/2020-05/lab-3498585_1920.jpg',
    },
};

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const article = newsData[params.slug];

    if (!article) {
        return {
            title: 'Новость не найдена',
        };
    }

    return {
        title: `${article.title} - Новости ВЕТСТЕМ`,
        description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
        openGraph: {
            title: article.title,
            description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
            type: 'article',
            publishedTime: article.publishDate,
            authors: [article.author],
        },
    };
}

export default function NewsArticlePage({ params }: PageProps) {
    const article = newsData[params.slug];

    if (!article) {
        notFound();
    }

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Новости', href: '/news' },
        { label: article.title, href: `/news/${params.slug}` },
    ];

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
                        <div className="flex items-center space-x-6 text-gray-400 mb-8 pb-6 border-b border-slate-600">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-5 h-5" />
                                <span>
                                    {new Date(article.publishDate).toLocaleDateString('ru-RU', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User className="w-5 h-5" />
                                <span>{article.author}</span>
                            </div>
                        </div>

                        <div
                            className="prose prose-invert prose-blue max-w-none"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-slate-600">
                            <Link
                                href="/news"
                                className="inline-flex items-center space-x-2 hud-text hover:text-blue-300 transition-colors duration-300"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Вернуться к новостям</span>
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
    return Object.keys(newsData).map((slug) => ({
        slug: slug,
    }));
}
