interface StrapiResponse<T> {
    data: T;
    meta?: any;
}

interface StrapiItem {
    id: number;
    attributes: any;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

class StrapiAPI {
    private baseURL: string;

    constructor() {
        this.baseURL = STRAPI_URL;
    }

    private async fetchAPI(path: string, options: RequestInit = {}) {
        const url = `${this.baseURL}/api${path}`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            console.error(`Strapi API error: ${response.status} ${response.statusText}`);
            return null;
        }

        return response.json();
    }

    // Hero Section
    async getHeroSection(): Promise<any> {
        const response = await this.fetchAPI('/hero-section?populate=*');
        return response?.data?.attributes || null;
    }

    // About Section
    async getAboutSection(): Promise<any> {
        const response = await this.fetchAPI('/about-section?populate=*');
        return response?.data?.attributes || null;
    }

    // Advantages Section
    async getAdvantagesSection(): Promise<any> {
        const response = await this.fetchAPI('/advantages-section?populate=*');
        return response?.data?.attributes || null;
    }

    // Indications Section
    async getIndicationsSection(): Promise<any> {
        const response = await this.fetchAPI('/indications-section?populate=*');
        return response?.data?.attributes || null;
    }

    // Contact Section
    async getContactSection(): Promise<any> {
        const response = await this.fetchAPI('/contact-section?populate=*');
        return response?.data?.attributes || null;
    }

    // Manufacturer Section
    async getManufacturerSection(): Promise<any> {
        const response = await this.fetchAPI('/manufacturer-section?populate=*');
        return response?.data?.attributes || null;
    }

    // FAQ Section
    async getFAQSection(): Promise<any> {
        const response = await this.fetchAPI('/faq-section?populate=*');
        return response?.data?.attributes || null;
    }

    // News Collection
    async getNews(limit: number = 10): Promise<any[]> {
        const response = await this.fetchAPI(`/newss?populate=*&pagination[limit]=${limit}&sort=publishDate:desc`);
        return response?.data || [];
    }

    // Single News Item
    async getNewsItem(slug: string): Promise<any> {
        const response = await this.fetchAPI(`/newss?filters[slug][$eq]=${slug}&populate=*`);
        return response?.data?.[0]?.attributes || null;
    }

    // Blog Posts Collection
    async getBlogPosts(limit: number = 10): Promise<any[]> {
        const response = await this.fetchAPI(`/blog-posts?populate=*&pagination[limit]=${limit}&sort=publishDate:desc`);
        return response?.data || [];
    }

    // Single Blog Post
    async getBlogPost(slug: string): Promise<any> {
        const response = await this.fetchAPI(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
        return response?.data?.[0]?.attributes || null;
    }

    // Fallback data for development
    private getFallbackData(section: string) {
        const fallbacks: Record<string, any> = {
            hero: {
                title: 'ВЕЗОТИЛ',
                subtitle: 'Инновационная анестезия',
                description:
                    'Безопасный и эффективный ветеринарный препарат для анестезии с точной дозировкой. Тилетамин + Золазепам для профессиональной ветеринарной практики.',
                videoUrl: '/vezotil-hero.mp4',
                hudData: [
                    { label: 'Тилетамин', value: '50 мг/мл', color: 'blue' },
                    { label: 'Золазепам', value: '50 мг/мл', color: 'blue' },
                    { label: 'Объем', value: '5 мл', color: 'blue' },
                    { label: 'Эффективность', value: '98.7%', color: 'green' },
                ],
            },
            about: {
                title: 'О препарате ВЕЗОТИЛ',
                description: 'Современный анестетик для ветеринарии',
                features: [
                    {
                        title: 'Состав',
                        description: 'Тилетамин HCl + Золазепам HCl',
                        detail: '50 + 50 мг/мл в лиофилизате',
                        icon: 'beaker',
                    },
                    {
                        title: 'Точная дозировка',
                        description: 'Строгий контроль качества',
                        detail: 'Флакон 5 мл для точного расчета',
                        icon: 'target',
                    },
                    {
                        title: 'Быстрое действие',
                        description: 'Наступление эффекта через 3-5 минут',
                        detail: 'Продолжительность 30-60 минут',
                        icon: 'clock',
                    },
                ],
            },
            manufacturer: {
                title: 'Производитель',
                companyName: 'ООО "ВЕТСТЕМ"',
                description:
                    'Ведущий российский производитель ветеринарных препаратов с многолетним опытом разработки инновационных решений для животных.',
                address: 'Россия, г. Москва',
                phone: '+7 (495) 000-00-00',
                email: 'info@vetstem.ru',
                website: 'www.vetstem.ru',
                foundedYear: '2010',
                certifications: [
                    {
                        title: 'Лицензия Россельхознадзора',
                        description: 'Лицензия на производство ветеринарных препаратов',
                        issueDate: '2020-01-15',
                        certificateNumber: 'РВП-123456',
                    },
                ],
                achievements: [
                    {
                        title: 'Сертификация GMP',
                        description: 'Соответствие международным стандартам качества',
                        date: '2021-06-01',
                        category: 'certification',
                    },
                ],
            },
            faq: {
                title: 'Часто задаваемые вопросы',
                subtitle: 'Ответы на популярные вопросы о препарате ВЕЗОТИЛ',
                faqs: [
                    {
                        question: 'Как применять препарат ВЕЗОТИЛ?',
                        answer: 'Препарат вводится внутримышечно или внутривенно. Дозировка рассчитывается исходя из массы тела животного.',
                        category: 'usage',
                        order: 1,
                    },
                    {
                        question: 'Какие противопоказания?',
                        answer: 'Препарат противопоказан беременным самкам, животным с сердечной недостаточностью.',
                        category: 'safety',
                        order: 2,
                    },
                    {
                        question: 'Как хранить препарат?',
                        answer: 'Хранить в сухом, защищенном от света месте при температуре от 2°C до 25°C.',
                        category: 'storage',
                        order: 3,
                    },
                ],
            },
            news: [
                {
                    title: 'ВЕЗОТИЛ получил одобрение Россельхознадзора',
                    slug: 'vezotil-approved-rosselkhoznadzor',
                    excerpt: 'Препарат успешно прошел все необходимые испытания.',
                    publishDate: '2024-01-15T10:00:00Z',
                    isImportant: true,
                    author: 'Пресс-служба ВЕТСТЕМ',
                },
                {
                    title: 'Новые клинические исследования ВЕЗОТИЛ',
                    slug: 'clinical-studies-vezotil',
                    excerpt: 'Результаты показывают высокую эффективность препарата.',
                    publishDate: '2024-02-01T12:00:00Z',
                    isImportant: false,
                    author: 'Научный отдел',
                },
            ],
            blog: [
                {
                    title: 'Современные методы анестезии в ветеринарии',
                    slug: 'modern-anesthesia-methods',
                    excerpt: 'Обзор современных подходов к анестезии животных.',
                    publishDate: '2024-01-20T14:00:00Z',
                    category: 'education',
                    readTime: 8,
                    isPopular: true,
                },
                {
                    title: 'Клинический случай: операция у кота',
                    slug: 'clinical-case-cat-surgery',
                    excerpt: 'Успешное применение ВЕЗОТИЛ в сложной операции.',
                    publishDate: '2024-02-10T16:00:00Z',
                    category: 'case-study',
                    readTime: 5,
                    isPopular: false,
                },
            ],
        };

        return fallbacks[section] || null;
    }

    // Safe get methods with fallbacks
    async getHeroSectionSafe(): Promise<any> {
        try {
            const data = await this.getHeroSection();
            return data || this.getFallbackData('hero');
        } catch (error) {
            console.error('Failed to fetch hero section:', error);
            return this.getFallbackData('hero');
        }
    }

    async getAboutSectionSafe(): Promise<any> {
        try {
            const data = await this.getAboutSection();
            return data || this.getFallbackData('about');
        } catch (error) {
            console.error('Failed to fetch about section:', error);
            return this.getFallbackData('about');
        }
    }

    async getManufacturerSectionSafe(): Promise<any> {
        try {
            const data = await this.getManufacturerSection();
            return data || this.getFallbackData('manufacturer');
        } catch (error) {
            console.error('Failed to fetch manufacturer section:', error);
            return this.getFallbackData('manufacturer');
        }
    }

    async getFAQSectionSafe(): Promise<any> {
        try {
            const data = await this.getFAQSection();
            return data || this.getFallbackData('faq');
        } catch (error) {
            console.error('Failed to fetch FAQ section:', error);
            return this.getFallbackData('faq');
        }
    }

    async getNewsSafe(limit: number = 10): Promise<any[]> {
        try {
            const data = await this.getNews(limit);
            return data.length > 0 ? data : this.getFallbackData('news');
        } catch (error) {
            console.error('Failed to fetch news:', error);
            return this.getFallbackData('news');
        }
    }

    async getBlogPostsSafe(limit: number = 10): Promise<any[]> {
        try {
            const data = await this.getBlogPosts(limit);
            return data.length > 0 ? data : this.getFallbackData('blog');
        } catch (error) {
            console.error('Failed to fetch blog posts:', error);
            return this.getFallbackData('blog');
        }
    }
}

export const strapiAPI = new StrapiAPI();
export default strapiAPI;
