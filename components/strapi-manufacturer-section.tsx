
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Award, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { strapiAPI } from '../lib/strapi';

interface ManufacturerData {
  title: string;
  companyName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  foundedYear?: string;
  certifications?: Array<{
    title: string;
    description: string;
    issueDate: string;
    certificateNumber: string;
  }>;
  achievements?: Array<{
    title: string;
    description: string;
    date: string;
    category: string;
  }>;
}

export default function StrapiManufacturerSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [manufacturerData, setManufacturerData] = useState<ManufacturerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await strapiAPI.getManufacturerSectionSafe();
        setManufacturerData(data);
      } catch (error) {
        console.error('Failed to load manufacturer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fallbackData: ManufacturerData = {
    title: "Производитель",
    companyName: "ООО \"ВЕТСТЕМ\"",
    description: "Ведущий российский производитель ветеринарных препаратов с многолетним опытом разработки инновационных решений для животных.",
    address: "Россия, г. Москва",
    phone: "+7 (495) 000-00-00",
    email: "info@vetstem.ru",
    website: "www.vetstem.ru",
    foundedYear: "2010",
    certifications: [
      {
        title: "Лицензия Россельхознадзора",
        description: "Лицензия на производство ветеринарных препаратов",
        issueDate: "2020-01-15",
        certificateNumber: "РВП-123456"
      }
    ],
    achievements: [
      {
        title: "Сертификация GMP",
        description: "Соответствие международным стандартам качества",
        date: "2021-06-01",
        category: "certification"
      }
    ]
  };

  const data = manufacturerData || fallbackData;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8 xl:px-12 text-center">
          <div className="text-white text-xl">Загрузка информации о производителе...</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="manufacturer" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.title} <span className="hud-text">{data.companyName}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="hud-element p-8 rounded-lg space-y-6">
              <div className="flex items-center space-x-4">
                <Building className="w-8 h-8 hud-text" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{data.companyName}</h3>
                  {data.foundedYear && (
                    <p className="text-gray-400">Основана в {data.foundedYear} году</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 hud-text mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Адрес</div>
                    <div className="text-gray-300">{data.address}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 hud-text mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Телефон</div>
                    <div className="text-gray-300">{data.phone}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 hud-text mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-300">{data.email}</div>
                  </div>
                </div>

                {data.website && (
                  <div className="flex items-start space-x-4">
                    <Building className="w-5 h-5 hud-text mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Веб-сайт</div>
                      <div className="text-gray-300">{data.website}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <div className="hud-element p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 hud-text" />
                  <h3 className="text-xl font-semibold text-white">Сертификаты и лицензии</h3>
                </div>
                <div className="space-y-4">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-blue-400 pl-4">
                      <h4 className="text-white font-medium">{cert.title}</h4>
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span>№ {cert.certificateNumber}</span>
                        <span>от {new Date(cert.issueDate).toISOString().split('T')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {data.achievements && data.achievements.length > 0 && (
              <div className="hud-element p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 hud-text" />
                  <h3 className="text-xl font-semibold text-white">Достижения</h3>
                </div>
                <div className="space-y-4">
                  {data.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-2 border-green-400 pl-4">
                      <h4 className="text-white font-medium">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                      <div className="text-xs text-gray-400 mt-2">
                        {new Date(achievement.date).toISOString().split('T')[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
