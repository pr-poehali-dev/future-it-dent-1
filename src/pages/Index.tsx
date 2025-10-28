import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', clinic: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#0F1419] to-[#1A1F2C]">
      <header className="border-b border-[#D4AF37]/20 bg-[#1A1F2C]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gold-gradient">FUTURE IT DENT</div>
          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C2] text-[#1A1F2C] hover:scale-105 transition-transform font-semibold">
            Записаться на презентацию
          </Button>
        </div>
      </header>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBNEE0QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] font-semibold">МИС + CRM + ИИ для частной стоматологии</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              С нами управлять клиникой{' '}
              <span className="gold-gradient">ЛЕГКО!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Одна система вместо десятка разрозненных сервисов: запись, ЭМК, планы лечения, склад, CRM-воронки, автонапоминания, отзывы/бонусы
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C2] text-[#1A1F2C] hover:scale-105 transition-transform font-bold text-lg px-8 py-6">
                Записаться на презентацию
              </Button>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold gold-gradient">400+</div>
                  <div className="text-gray-400">клиник</div>
                </div>
                <div className="w-px h-12 bg-[#D4AF37]/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold gold-gradient">170+</div>
                  <div className="text-gray-400">отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-[#1A1F2C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Главные <span className="gold-gradient">боли клиник</span>
            </h2>
            <p className="text-gray-400 text-lg">И как мы их закрываем</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'AlertCircle',
                problem: 'Теряются обращения',
                solution: 'CRM фиксирует все заявки, автоматические воронки и касания',
                color: 'from-red-500/20 to-red-600/10'
              },
              {
                icon: 'Calendar',
                problem: 'Срывы приемов и "окна"',
                solution: 'Умный календарь + автонапоминания через мессенджеры/SMS',
                color: 'from-orange-500/20 to-orange-600/10'
              },
              {
                icon: 'Clock',
                problem: 'Ручная рутина',
                solution: 'ИИ-ассистент "Федя" автоматизирует заполнение и проверку',
                color: 'from-yellow-500/20 to-yellow-600/10'
              },
              {
                icon: 'TrendingDown',
                problem: 'Нет прозрачности доходов',
                solution: 'Единая CRM-карта: визиты, финансы, каналы, задачи',
                color: 'from-blue-500/20 to-blue-600/10'
              },
              {
                icon: 'Users',
                problem: 'Слабое удержание',
                solution: 'Future Care 360: автоотзывы, бонусы, возврат спящих',
                color: 'from-purple-500/20 to-purple-600/10'
              },
              {
                icon: 'Package',
                problem: 'Хаос на складе',
                solution: 'Автосписание, минимальные остатки, полный контроль',
                color: 'from-green-500/20 to-green-600/10'
              }
            ].map((item, idx) => (
              <Card key={idx} className={`bg-gradient-to-br ${item.color} border-[#D4AF37]/20 p-6 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl group-hover:bg-[#D4AF37]/30 transition-colors">
                    <Icon name={item.icon} className="text-[#D4AF37]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.problem}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ключевые <span className="gold-gradient">модули</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border-2 border-[#D4AF37]/30 p-8 hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C2] rounded-2xl">
                  <Icon name="Brain" className="text-[#1A1F2C]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gold-gradient">Future Assist «Федя»</h3>
                  <p className="text-gray-400">ИИ-ассистент врача</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Зубная формула голосом',
                  'История болезни автоматически',
                  'Планы лечения по прайсу',
                  'Проверка ошибок и несовместимостей',
                  'Интеграции с DENTOMO/Diagnocat'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/5 to-transparent border-2 border-purple-500/30 p-8 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Future Care 360</h3>
                  <p className="text-gray-400">Лояльность и отзывы</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Автосценарии как в e-commerce',
                  'Отзывы → рейтинг → первичные',
                  'Бонусы за возврат',
                  'Возврат спящих до 18%',
                  '«Дожим» отказов +10-15%'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-2 border-blue-500/30 p-8 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                  <Icon name="Database" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">МИС + CRM</h3>
                  <p className="text-gray-400">Единое окно</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Календарь и ЭМК',
                  'Планы лечения и печать',
                  'Мессенджеры и задачи',
                  'Воронки и автоматизация',
                  'История и финансы'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-2 border-green-500/30 p-8 hover:border-green-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
                  <Icon name="Package" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400">Склад</h3>
                  <p className="text-gray-400">Материалы и контроль</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Приход/расход автоматически',
                  'Автосписание материалов',
                  'Перемещения между отделами',
                  'Минимальные остатки',
                  'Отчётность и планирование'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Для <span className="gold-gradient">кого</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: 'Руководитель',
                icon: 'Crown',
                benefit: 'Прозрачность процессов',
                features: ['Аналитика и стратегия', 'Финансовые показатели', 'Источники пациентов', 'Одно окно управления'],
                color: 'from-[#D4AF37] to-[#F4E5C2]',
                textColor: 'text-[#1A1F2C]'
              },
              {
                role: 'Администратор',
                icon: 'UserCheck',
                benefit: 'Экономия до 80% времени',
                features: ['CRM с триггерами', 'Умный календарь', 'Единое окно диалога', 'Автозадачи'],
                color: 'from-blue-500 to-blue-600',
                textColor: 'text-white'
              },
              {
                role: 'Врач',
                icon: 'Stethoscope',
                benefit: 'Экономия до 70% времени',
                features: ['Быстрый доступ к данным', 'Дорожная карта приема', 'Автодокументы', 'Фокус на лечении'],
                color: 'from-green-500 to-green-600',
                textColor: 'text-white'
              },
              {
                role: 'Пациент',
                icon: 'Smile',
                benefit: 'Удобство и прозрачность',
                features: ['Мобильное приложение', 'Планы лечения онлайн', 'Чат с клиникой', 'Бонусы и отзывы'],
                color: 'from-purple-500 to-purple-600',
                textColor: 'text-white'
              }
            ].map((item, idx) => (
              <Card key={idx} className={`bg-gradient-to-br ${item.color} p-6 border-0 hover:scale-105 transition-transform`}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Icon name={item.icon} className={item.textColor} size={48} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${item.textColor}`}>{item.role}</h3>
                  <p className={`text-sm mb-4 ${item.textColor} opacity-90 font-semibold`}>{item.benefit}</p>
                  <ul className="space-y-2 text-left w-full">
                    {item.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${item.textColor} opacity-80`}>
                        <Icon name="Check" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#1A1F2C] to-[#0F1419] border-2 border-[#D4AF37] p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C2] rounded-2xl">
                  <Icon name="TrendingUp" className="text-[#1A1F2C]" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gold-gradient">Кейс Future Smile</h2>
                  <p className="text-gray-400">Как клиника сократила потери на 30%</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="text-4xl font-bold text-red-400 mb-2">-30%</div>
                  <div className="text-gray-300 text-sm">Потерь пациентов</div>
                </div>
                <div className="text-center p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                  <div className="text-4xl font-bold gold-gradient mb-2">+56%</div>
                  <div className="text-gray-300 text-sm">Роста выручки</div>
                </div>
                <div className="text-center p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="text-4xl font-bold text-green-400 mb-2">18%</div>
                  <div className="text-gray-300 text-sm">Возврат спящих</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-red-400 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white">Проблема</div>
                    <p className="text-gray-400 text-sm">Теряли до 30% пациентов из-за ручного учета: заявки терялись в Excel, без напоминаний</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-[#D4AF37]" size={20} />
                  <div>
                    <div className="font-semibold text-white">Решение</div>
                    <p className="text-gray-400 text-sm">Внедрение Future IT Dent: онлайн-запись, ИИ-ассистент, автотриггеры, единое окно</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-green-400 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white">Эффект</div>
                    <p className="text-gray-400 text-sm">Полностью управляемая клиника с прозрачными процессами и стабильным ростом</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-[#1A1F2C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-gradient">Интеграции</span>
            </h2>
            <p className="text-gray-400 text-lg">Подключите всё необходимое в пару кликов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Phone', title: 'IP-телефония', desc: 'Автоматическая запись звонков' },
              { icon: 'Mail', title: 'Email-рассылки', desc: 'Напоминания и акции' },
              { icon: 'MessageSquare', title: 'Мессенджеры', desc: 'WhatsApp, Telegram, Viber' },
              { icon: 'Globe', title: 'Агрегаторы', desc: 'Заявки с популярных платформ' },
              { icon: 'Camera', title: 'DENTOMO', desc: 'Автоперенос диагностики' },
              { icon: 'Scan', title: 'Diagnocat', desc: 'ИИ-анализ снимков' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-[#D4AF37]/20 p-6 hover:border-[#D4AF37] transition-all text-center group">
                <div className="inline-flex p-4 bg-[#D4AF37]/10 rounded-2xl mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon name={item.icon} className="text-[#D4AF37]" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-gradient">Отзывы</span> клиентов
            </h2>
            <p className="text-gray-400 text-lg">400+ клиник по всей России</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна Петрова', role: 'Владелец клиники', text: 'Выручка выросла на 56% за полгода. Федя экономит врачам массу времени!' },
              { name: 'Игорь Соколов', role: 'Главный врач', text: 'Больше не теряем пациентов. Автоматизация работает как часы.' },
              { name: 'Мария Иванова', role: 'Администратор', text: 'Раньше тратила 6 часов на рутину, теперь всё делается само!' }
            ].map((review, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-[#D4AF37]/20 p-6 hover:scale-105 transition-transform">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые <span className="gold-gradient">вопросы</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: 'Сколько времени занимает внедрение?', a: 'От 1 до 3 недель в зависимости от размера клиники. Мы полностью сопровождаем процесс.' },
                { q: 'Нужно ли обучать персонал?', a: 'Да, мы проводим бесплатное обучение для всех сотрудников. Интерфейс интуитивный.' },
                { q: 'Какая стоимость системы?', a: 'Стоимость зависит от количества врачей и модулей. Запишитесь на презентацию для расчёта.' },
                { q: 'Можно ли попробовать бесплатно?', a: 'Да, мы предоставляем демо-доступ на 14 дней с полным функционалом.' },
                { q: 'Безопасны ли данные пациентов?', a: 'Данные хранятся на серверах в РФ (ФСТЭК), соответствуют 152-ФЗ. Полная анонимизация.' }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-[#1A1F2C] border-[#D4AF37]/20 px-6 rounded-lg">
                  <AccordionTrigger className="text-left hover:text-[#D4AF37] transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-[#1A1F2C] to-[#0F1419] border-2 border-[#D4AF37] p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Запишитесь на <span className="gold-gradient">демо-версию</span>
                </h2>
                <p className="text-gray-400">Покажем все возможности системы за 30 минут</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0F1419] border-[#D4AF37]/30 focus:border-[#D4AF37]"
                />
                <Input
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0F1419] border-[#D4AF37]/30 focus:border-[#D4AF37]"
                />
                <Input
                  placeholder="Название клиники"
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  className="bg-[#0F1419] border-[#D4AF37]/30 focus:border-[#D4AF37]"
                />
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0F1419] border-[#D4AF37]/30 focus:border-[#D4AF37]"
                  rows={3}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C2] text-[#1A1F2C] hover:scale-105 transition-transform font-bold text-lg py-6">
                  Записаться на презентацию
                </Button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-[#D4AF37]/20 bg-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold gold-gradient">FUTURE IT DENT</div>
            <div className="text-gray-400 text-sm">© 2024 Future IT Dent. Все права защищены.</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#D4AF37]">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
