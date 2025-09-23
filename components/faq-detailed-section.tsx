
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Stethoscope,
  Shield,
  FileText,
  AlertTriangle,
  Clock,
  Phone,
  Mail
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'usage' | 'safety' | 'storage' | 'dosage';
  order: number;
}

export default function FAQDetailedSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['faq-1'])); // First item open by default
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: 'Что такое ВЕЗОТИЛ?',
      answer: 'ВЕЗОТИЛ - это инновационный ветеринарный препарат для общей анестезии кошек и собак, содержащий тилетамина гидрохлорид и золазепама гидрохлорид в равных пропорциях (50+50 мг/мл). Препарат обеспечивает безопасную и эффективную анестезию для различных ветеринарных процедур.',
      category: 'general',
      order: 1
    },
    {
      id: 'faq-2',
      question: 'Как правильно применять препарат?',
      answer: 'Препарат вводится внутримышечно или внутривенно. Дозировка рассчитывается индивидуально исходя из массы тела животного и планируемой процедуры. Внутримышечно: 10-15 мг/кг, внутривенно: 5-10 мг/кг. Точную дозировку определяет ветеринарный врач на основе клинического обследования.',
      category: 'usage',
      order: 2
    },
    {
      id: 'faq-3',
      question: 'Какая рекомендуемая дозировка?',
      answer: 'Дозировка ВЕЗОТИЛ варьируется в зависимости от вида животного, массы тела и типа процедуры: для кошек 10-12 мг/кг в/м, для собак 8-15 мг/кг в/м. При внутривенном введении дозы уменьшаются вдвое. Не превышайте максимальную дозу 15 мг/кг.',
      category: 'dosage',
      order: 3
    },
    {
      id: 'faq-4',
      question: 'Есть ли противопоказания?',
      answer: 'Препарат противопоказан беременным и кормящим самкам, животным с тяжелой сердечной недостаточностью, печеночной или почечной недостаточностью. Не рекомендуется для животных младше 3 месяцев. С осторожностью применять у пожилых животных и при наличии сопутствующих заболеваний.',
      category: 'safety',
      order: 4
    },
    {
      id: 'faq-5',
      question: 'Какие побочные эффекты возможны?',
      answer: 'В редких случаях возможны: временная атаксия (нарушение координации), повышенное слюноотделение, тошнота, угнетение дыхания. Все побочные эффекты обратимы и проходят самостоятельно по мере выведения препарата. При их появлении необходимо немедленно обратиться к ветеринару.',
      category: 'safety',
      order: 5
    },
    {
      id: 'faq-6',
      question: 'Как правильно хранить препарат?',
      answer: 'Хранить в сухом, защищенном от света месте при температуре от 2°C до 25°C. После вскрытия флакона использовать в течение не более 10 суток при температуре от 2°С до 8°С (в холодильнике) и в течение не более 48 часов при комнатной температуре. Беречь от детей и животных. Не замораживать. Проверяйте срок годности перед каждым применением.',
      category: 'storage',
      order: 6
    },
    {
      id: 'faq-7',
      question: 'Можно ли применять для экзотических животных?',
      answer: 'Препарат разработан и зарегистрирован специально для кошек и собак. Применение для других видов животных (кролики, хорьки, птицы) возможно только по назначению ветеринарного врача под его строгим контролем с корректировкой дозировки.',
      category: 'usage',
      order: 7
    },
    {
      id: 'faq-8',
      question: 'Сколько действует анестезия?',
      answer: 'Наступление анестезии происходит через 2-5 минут после внутривенного введения и через 5-10 минут после внутримышечного. Продолжительность анестезии составляет 30-60 минут в зависимости от дозы. Пробуждение происходит плавно в течение 2-4 часов. Полное восстановление координации - через 6-8 часов.',
      category: 'general',
      order: 8
    },
    {
      id: 'faq-9',
      question: 'Нужна ли премедикация?',
      answer: 'Премедикация рекомендуется для снижения стресса и улучшения качества анестезии. Обычно используют атропин (0,02-0,04 мг/кг п/к) за 15-20 минут до введения ВЕЗОТИЛ для предотвращения избыточного слюноотделения и стабилизации работы сердца.',
      category: 'usage',
      order: 9
    },
    {
      id: 'faq-10',
      question: 'Можно ли смешивать с другими препаратами?',
      answer: 'Не рекомендуется смешивать ВЕЗОТИЛ с другими препаратами в одном шприце. При необходимости комбинированной анестезии препараты вводятся раздельно. Совместимость с конкретными препаратами следует уточнять у ветеринарного врача.',
      category: 'safety',
      order: 10
    }
  ];

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: HelpCircle, count: faqs.length },
    { id: 'general', name: 'Общие', icon: FileText, count: faqs.filter(f => f.category === 'general').length },
    { id: 'usage', name: 'Применение', icon: Stethoscope, count: faqs.filter(f => f.category === 'usage').length },
    { id: 'dosage', name: 'Дозировка', icon: AlertTriangle, count: faqs.filter(f => f.category === 'dosage').length },
    { id: 'safety', name: 'Безопасность', icon: Shield, count: faqs.filter(f => f.category === 'safety').length },
    { id: 'storage', name: 'Хранение', icon: Clock, count: faqs.filter(f => f.category === 'storage').length }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs.sort((a, b) => a.order - b.order)
    : faqs.filter(faq => faq.category === selectedCategory).sort((a, b) => a.order - b.order);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div ref={ref} className="space-y-12">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Экспертные ответы о препарате <span className="hud-text">ВЕЗОТИЛ</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Наши ветеринарные эксперты собрали наиболее частые вопросы и подготовили 
          подробные ответы для обеспечения безопасного и эффективного применения препарата.
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === category.id
                ? 'hud-element medical-glow text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span className="font-medium">{category.name}</span>
            <span className="text-xs bg-slate-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="hud-element rounded-lg overflow-hidden hover:medical-glow transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-white pr-4">
                {faq.question}
              </h3>
              {openItems.has(faq.id) ? (
                <ChevronUp className="w-5 h-5 hud-text flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 hud-text flex-shrink-0" />
              )}
            </button>
            
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openItems.has(faq.id) ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center space-y-6"
      >
        <div className="hud-element p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Нужна дополнительная консультация?</h3>
          <p className="text-gray-300 mb-6">
            Если вы не нашли ответа на свой вопрос, наши эксперты готовы предоставить 
            персональную консультацию по применению препарата ВЕЗОТИЛ.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg">
              <Phone className="w-5 h-5 hud-text" />
              <div className="text-left">
                <div className="text-white font-medium">Телефон</div>
                <div className="text-gray-300">+7 (917) 525-77-70</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-slate-800 rounded-lg">
              <Mail className="w-5 h-5 hud-text" />
              <div className="text-left">
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300">info@vetstem.ru</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
