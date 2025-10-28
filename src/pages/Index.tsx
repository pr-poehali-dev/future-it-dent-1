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
    <div className="min-h-screen bg-[#0A0E1A]">
      <header className="border-b border-primary/20 bg-[#0A0E1A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 border border-primary rounded flex items-center justify-center">
              <Icon name="Activity" className="text-primary" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">FUTURE IT DENT</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
            Записаться на презентацию
          </Button>
        </div>
      </header>

      <section className="py-20 relative overflow-hidden grid-bg">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-mono">МИС + CRM + ИИ</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Система управления<br />
              <span className="tech-gradient">стоматологической клиникой</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl font-light">
              Автоматизация процессов, ИИ-ассистент и единое окно управления для повышения эффективности на 80%
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary font-mono">400+</div>
                <div className="text-sm text-gray-400">клиник<br/>используют</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary font-mono">-80%</div>
                <div className="text-sm text-gray-400">времени<br/>на рутину</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary font-mono">+56%</div>
                <div className="text-sm text-gray-400">рост<br/>выручки</div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6">
              Записаться на презентацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded text-xs font-mono text-red-400">
              <Icon name="AlertTriangle" size={14} />
              ПРОБЛЕМЫ
            </div>
            <h2 className="text-4xl font-bold mb-2">Боли клиник → Решения</h2>
            <p className="text-gray-400">Типичные проблемы и технологичные решения Future IT Dent</p>
          </div>

          <div className="space-y-4">
            {[
              {
                problem: 'Теряются обращения',
                icon: 'AlertCircle',
                solution: 'CRM фиксирует все заявки → автоматические воронки → касания',
                metric: '0%',
                metricLabel: 'потерь'
              },
              {
                problem: 'Срывы приемов',
                icon: 'CalendarOff',
                solution: 'Умный календарь → автонапоминания → SMS/мессенджеры',
                metric: '-30%',
                metricLabel: 'неявок'
              },
              {
                problem: 'Ручная рутина',
                icon: 'Cpu',
                solution: 'ИИ "Федя" → автозаполнение → проверка ошибок',
                metric: '-80%',
                metricLabel: 'времени'
              },
              {
                problem: 'Нет прозрачности',
                icon: 'Eye',
                solution: 'Единая CRM-карта → визиты + финансы + каналы',
                metric: '100%',
                metricLabel: 'контроль'
              },
              {
                problem: 'Слабое удержание',
                icon: 'UserX',
                solution: 'Care 360 → автоотзывы → бонусы → возврат спящих',
                metric: '+18%',
                metricLabel: 'возврата'
              },
              {
                problem: 'Хаос на складе',
                icon: 'Package',
                solution: 'Автосписание → минимальные остатки → полный учет',
                metric: '100%',
                metricLabel: 'учета'
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-primary/20 hover:border-primary/40 transition-all p-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-red-400 font-semibold">{item.problem}</span>
                        <Icon name="ArrowRight" className="text-gray-600" size={20} />
                        <span className="text-gray-400 text-sm font-mono">{item.solution}</span>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-red-500/20 via-primary/20 to-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold text-primary font-mono">{item.metric}</div>
                    <div className="text-xs text-gray-500">{item.metricLabel}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="Boxes" size={14} />
              МОДУЛИ
            </div>
            <h2 className="text-4xl font-bold">Архитектура системы</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-[#1A1F2C] border-primary p-8 tech-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 border border-primary rounded flex items-center justify-center shrink-0">
                  <Icon name="Brain" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Future Assist «Федя»</h3>
                  <p className="text-gray-500 text-sm font-mono">ИИ-АССИСТЕНТ</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Зубная формула', value: 'голосовой ввод' },
                  { label: 'История болезни', value: 'автозаполнение' },
                  { label: 'Планы лечения', value: 'генерация по прайсу' },
                  { label: 'Проверка', value: 'ошибки + несовместимости' },
                  { label: 'Интеграции', value: 'DENTOMO/Diagnocat' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-primary text-xs font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-primary/40 p-8 tech-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 border border-primary rounded flex items-center justify-center shrink-0">
                  <Icon name="Heart" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Future Care 360</h3>
                  <p className="text-gray-500 text-sm font-mono">ЛОЯЛЬНОСТЬ + ОТЗЫВЫ</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Автосценарии', value: 'как в e-commerce' },
                  { label: 'Отзывы', value: 'автозапрос + публикация' },
                  { label: 'Бонусы', value: 'мотивация возврата' },
                  { label: 'Возврат спящих', value: 'до 18%' },
                  { label: 'Дожим отказов', value: '+10-15%' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-primary text-xs font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-primary/40 p-8 tech-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 border border-primary rounded flex items-center justify-center shrink-0">
                  <Icon name="Database" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">МИС + CRM</h3>
                  <p className="text-gray-500 text-sm font-mono">ЕДИНОЕ ОКНО</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Календарь', value: 'ЭМК интегрирован' },
                  { label: 'Планы лечения', value: 'печать + показ' },
                  { label: 'Мессенджеры', value: 'встроенные' },
                  { label: 'Воронки', value: 'автоматизация' },
                  { label: 'История + финансы', value: 'единая карта' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-primary text-xs font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-primary/40 p-8 tech-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 border border-primary rounded flex items-center justify-center shrink-0">
                  <Icon name="Package" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Склад</h3>
                  <p className="text-gray-500 text-sm font-mono">МАТЕРИАЛЫ + КОНТРОЛЬ</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Приход/расход', value: 'автоматически' },
                  { label: 'Автосписание', value: 'по факту использования' },
                  { label: 'Перемещения', value: 'между отделами' },
                  { label: 'Минимальные остатки', value: 'уведомления' },
                  { label: 'Отчётность', value: 'планирование бюджета' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-primary text-xs font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="Users" size={14} />
              РОЛИ
            </div>
            <h2 className="text-4xl font-bold">Для кого система</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                role: 'Руководитель',
                icon: 'Crown',
                metrics: [
                  { label: 'Прозрачность', value: '100%' },
                  { label: 'Аналитика', value: 'real-time' },
                  { label: 'ROI', value: '+56%' }
                ]
              },
              {
                role: 'Администратор',
                icon: 'UserCheck',
                metrics: [
                  { label: 'Экономия времени', value: '80%' },
                  { label: 'CRM', value: 'авто' },
                  { label: 'Триггеры', value: 'встроены' }
                ]
              },
              {
                role: 'Врач',
                icon: 'Stethoscope',
                metrics: [
                  { label: 'Экономия времени', value: '70%' },
                  { label: 'ЭМК', value: 'быстрый доступ' },
                  { label: 'Документы', value: 'авто' }
                ]
              },
              {
                role: 'Пациент',
                icon: 'Smile',
                metrics: [
                  { label: 'Приложение', value: 'iOS/Android' },
                  { label: 'Планы лечения', value: 'онлайн' },
                  { label: 'Бонусы', value: 'активны' }
                ]
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-primary/20 p-6 hover:border-primary/40 transition-all">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                </div>
                
                <div className="space-y-3">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="text-primary font-mono text-xs">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="TrendingUp" size={14} />
              КЕЙС
            </div>
            <h2 className="text-4xl font-bold">Future Smile: -30% потерь</h2>
          </div>

          <Card className="bg-[#1A1F2C] border-primary p-10">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-6 bg-red-500/5 border border-red-500/20 rounded">
                <div className="text-5xl font-bold text-red-400 mb-2 font-mono">-30%</div>
                <div className="text-gray-400 text-sm">потерь пациентов</div>
                <div className="mt-3 h-2 bg-gradient-to-r from-red-500 to-red-500/20 rounded-full"></div>
              </div>
              <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded">
                <div className="text-5xl font-bold text-primary mb-2 font-mono">+56%</div>
                <div className="text-gray-400 text-sm">рост выручки</div>
                <div className="mt-3 h-2 bg-gradient-to-r from-primary to-primary/20 rounded-full"></div>
              </div>
              <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded">
                <div className="text-5xl font-bold text-primary mb-2 font-mono">18%</div>
                <div className="text-gray-400 text-sm">возврат спящих</div>
                <div className="mt-3 h-2 bg-gradient-to-r from-primary to-primary/20 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="AlertCircle" className="text-red-400" size={20} />
                  <span className="text-sm font-mono text-red-400">ПРОБЛЕМА</span>
                </div>
                <p className="text-gray-400 text-sm">Потери до 30% пациентов: Excel, без напоминаний, ручной учет</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Zap" className="text-primary" size={20} />
                  <span className="text-sm font-mono text-primary">РЕШЕНИЕ</span>
                </div>
                <p className="text-gray-400 text-sm">Future IT Dent: онлайн-запись + ИИ + автотриггеры + единое окно</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                  <span className="text-sm font-mono text-primary">ЭФФЕКТ</span>
                </div>
                <p className="text-gray-400 text-sm">Управляемая клиника с прозрачными процессами и стабильным ростом</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="Plug" size={14} />
              ИНТЕГРАЦИИ
            </div>
            <h2 className="text-4xl font-bold mb-2">Подключение в пару кликов</h2>
            <p className="text-gray-400">Телефония, агрегаторы, диагностика</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'Phone', title: 'IP-телефония' },
              { icon: 'Mail', title: 'Email' },
              { icon: 'MessageSquare', title: 'Мессенджеры' },
              { icon: 'Globe', title: 'Агрегаторы' },
              { icon: 'Camera', title: 'DENTOMO' },
              { icon: 'Scan', title: 'Diagnocat' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-primary/20 p-6 hover:border-primary/40 transition-all text-center">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} className="text-primary" size={24} />
                </div>
                <div className="text-sm font-medium">{item.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="Star" size={14} />
              ОТЗЫВЫ
            </div>
            <h2 className="text-4xl font-bold mb-2">400+ клиник по всей России</h2>
            <p className="text-gray-400">170+ отзывов от владельцев и врачей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна Петрова', role: 'Владелец клиники', text: 'Выручка +56% за полгода. Федя экономит врачам массу времени' },
              { name: 'Игорь Соколов', role: 'Главный врач', text: 'Больше не теряем пациентов. Автоматизация работает как часы' },
              { name: 'Мария Иванова', role: 'Администратор', text: '6 часов рутины → автоматизация. Всё делается само' }
            ].map((review, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-primary/20 p-6 hover:border-primary/40 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="border-t border-gray-800 pt-4">
                  <div className="font-medium text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500 font-mono">{review.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
              <Icon name="HelpCircle" size={14} />
              FAQ
            </div>
            <h2 className="text-4xl font-bold">Частые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: 'Сколько времени занимает внедрение?', a: 'От 1 до 3 недель в зависимости от размера клиники. Полное сопровождение процесса.' },
                { q: 'Нужно ли обучать персонал?', a: 'Да, бесплатное обучение для всех сотрудников. Интуитивный интерфейс.' },
                { q: 'Какая стоимость системы?', a: 'Зависит от количества врачей и модулей. Запишитесь на презентацию для расчёта.' },
                { q: 'Можно ли попробовать бесплатно?', a: 'Да, демо-доступ на 14 дней с полным функционалом.' },
                { q: 'Безопасны ли данные пациентов?', a: 'Серверы в РФ (ФСТЭК), соответствие 152-ФЗ, полная анонимизация.' }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-[#1A1F2C] border-primary/20 px-6 rounded">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors text-sm">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#1A1F2C] border-primary p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
                  <Icon name="Calendar" size={14} />
                  ДЕМО
                </div>
                <h2 className="text-3xl font-bold mb-4">Запишитесь на демо-версию</h2>
                <p className="text-gray-400">Покажем все возможности системы за 30 минут</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0F1419] border-primary/30 focus:border-primary"
                />
                <Input
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0F1419] border-primary/30 focus:border-primary"
                />
                <Input
                  placeholder="Название клиники"
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  className="bg-[#0F1419] border-primary/30 focus:border-primary"
                />
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0F1419] border-primary/30 focus:border-primary"
                  rows={3}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                  Записаться на презентацию
                </Button>
              </form>

              <p className="text-center text-gray-500 text-xs mt-6 font-mono">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-primary/20 bg-[#0A0E1A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 border border-primary rounded flex items-center justify-center">
                <Icon name="Activity" className="text-primary" size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">FUTURE IT DENT</span>
            </div>
            <div className="text-gray-500 text-sm font-mono">© 2024 Future IT Dent. Все права защищены.</div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
