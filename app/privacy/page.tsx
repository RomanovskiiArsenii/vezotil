
import { Metadata } from 'next'
import PageLayout from '../../components/page-layouts/page-layout'
import PageHeader from '../../components/page-layouts/page-header'
import ContentSection from '../../components/page-layouts/content-section'
import ClientWrapper from '../../components/client-wrapper'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | ВЕЗОТИЛ',
  description: 'Политика конфиденциальности сайта ВЕЗОТИЛ - правила обработки персональных данных и защиты информации пользователей.',
}

export default function PrivacyPage() {
  return (
    <ClientWrapper>
      <PageLayout>
      <PageHeader
        title="Политика конфиденциальности"
        subtitle="Правила обработки персональных данных"
      />
      
      <ContentSection>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">1. Общие положения</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) 
                  действует в отношении всей информации, которую сайт VEZOTIL.RU, расположенный на доменном имени 
                  vezotil.ru, может получить о Пользователе во время использования сайта vezotil.ru.
                </p>
                <p>
                  Использование сайта vezotil.ru означает безоговорочное согласие Пользователя 
                  с настоящей Политикой конфиденциальности и указанными в ней условиями обработки 
                  его персональной информации.
                </p>
                <p>
                  В случае несогласия с этими условиями Пользователь должен прекратить использование сайта vezotil.ru.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">2. Персональная информация пользователей</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">2.1.</strong> В рамках настоящей Политики конфиденциальности 
                  под «персональной информацией Пользователя» понимаются:
                </p>
                <div className="ml-6">
                  <p>
                    <strong className="text-cyan-200">2.1.1.</strong> Персональная информация, которую Пользователь 
                    предоставляет о себе самостоятельно при оставлении заявки, регистрации (создании учётной записи) 
                    или в ином процессе использования сайта.
                  </p>
                  <p>
                    <strong className="text-cyan-200">2.1.2.</strong> Данные, которые передаются в автоматическом 
                    режиме устройствами Пользователя в процессе их использования с помощью установленного на 
                    устройстве Пользователя программного обеспечения.
                  </p>
                </div>
                <p>
                  <strong className="text-cyan-200">2.2.</strong> Сайт может собирать следующую информацию о Пользователе:
                </p>
                <ul className="ml-6 space-y-1 list-disc list-inside">
                  <li>Фамилия, имя, отчество</li>
                  <li>Контактный телефон</li>
                  <li>Адрес электронной почты</li>
                  <li>Место работы и должность</li>
                  <li>Адрес места работы</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">3. Цели сбора персональной информации</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">3.1.</strong> Персональная информация Пользователя используется в целях:
                </p>
                <ul className="ml-6 space-y-1 list-disc list-inside">
                  <li>Предоставления Пользователю персонализированных услуг</li>
                  <li>Связи с Пользователем, в том числе направления уведомлений, запросов и информации</li>
                  <li>Улучшения качества сайта, удобства его использования, разработки новых сервисов и услуг</li>
                  <li>Проведения статистических и иных исследований</li>
                  <li>Обработки заявок и запросов Пользователя</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">4. Способы и сроки обработки персональной информации</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">4.1.</strong> Обработка персональной информации Пользователя 
                  осуществляется без ограничения срока любым законным способом.
                </p>
                <p>
                  <strong className="text-cyan-200">4.2.</strong> Персональная информация Пользователя может быть передана 
                  уполномоченным органам государственной власти только по основаниям и в порядке, установленным 
                  законодательством Российской Федерации.
                </p>
                <p>
                  <strong className="text-cyan-200">4.3.</strong> При утрате или разглашении персональной информации 
                  Администрация сайта информирует Пользователя об утрате или разглашении персональной информации.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">5. Защита персональной информации</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">5.1.</strong> Администрация сайта принимает необходимые 
                  организационные и технические меры для защиты персональной информации Пользователя 
                  от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения.
                </p>
                <p>
                  <strong className="text-cyan-200">5.2.</strong> Администрация сайта совместно с Пользователем 
                  принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, 
                  вызванных утратой или разглашением персональной информации Пользователя.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">6. Права и обязанности сторон</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">6.1.</strong> Пользователь имеет право:
                </p>
                <ul className="ml-6 space-y-1 list-disc list-inside">
                  <li>Принимать свободное решение о предоставлении своей персональной информации</li>
                  <li>Обновлять, дополнять предоставленную информацию о персональных данных</li>
                  <li>Получать от Администрации сайта информацию, касающуюся обработки его персональных данных</li>
                </ul>
                <p>
                  <strong className="text-cyan-200">6.2.</strong> Администрация сайта обязана:
                </p>
                <ul className="ml-6 space-y-1 list-disc list-inside">
                  <li>Использовать полученную информацию исключительно для целей, указанных в настоящей Политике</li>
                  <li>Обеспечить хранение конфиденциальной информации в тайне</li>
                  <li>Осуществлять защиту персональной информации</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">7. Файлы cookie</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">7.1.</strong> Сайт vezotil.ru использует файлы cookie 
                  для улучшения взаимодействия с Пользователями и оптимизации работы сайта.
                </p>
                <p>
                  <strong className="text-cyan-200">7.2.</strong> Файлы cookie — это небольшие файлы, 
                  которые сохраняются на устройстве Пользователя при посещении сайта.
                </p>
                <p>
                  <strong className="text-cyan-200">7.3.</strong> Пользователь может в любой момент 
                  изменить настройки своего браузера для отключения файлов cookie.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">8. Условия обновления Политики конфиденциальности</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">8.1.</strong> Настоящая Политика конфиденциальности может быть 
                  обновлена Администрацией сайта в одностороннем порядке без предварительного согласования с Пользователем.
                </p>
                <p>
                  <strong className="text-cyan-200">8.2.</strong> Новая Политика конфиденциальности вступает 
                  в силу с момента ее размещения на сайте vezotil.ru, если иное не предусмотрено новой редакцией 
                  Политики конфиденциальности.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-100">9. Обратная связь</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyan-200">9.1.</strong> Все предложения или вопросы по настоящей 
                  Политике конфиденциальности следует сообщать в службу поддержки:
                </p>
                <div className="medical-card p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-cyan-200">Контактная информация:</h4>
                      <div className="space-y-1 text-sm">
                        <p><strong>Email:</strong> info@vetstem.ru</p>
                        <p><strong>Телефон:</strong> +7 (917) 525-77-70</p>
                        <p><strong>Телефон:</strong> +7 (495) 768-08-49</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-cyan-200">Разработчик:</h4>
                      <div className="space-y-1 text-sm">
                        <p><strong>Организация:</strong> ООО "ВЕТСТЕМ"</p>
                        <p><strong>Сайт:</strong> vetstem.ru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="medical-card p-6 text-center space-y-2">
            <p className="text-cyan-300 font-semibold">Дата последнего обновления: 28 декабря 2023 года</p>
            <p className="text-gray-400 text-sm">
              Настоящая Политика конфиденциальности является неотъемлемой частью пользовательского соглашения сайта vezotil.ru
            </p>
          </div>
        </div>
      </ContentSection>
      </PageLayout>
    </ClientWrapper>
  )
}
