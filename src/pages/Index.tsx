import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🦷</div>
            <div>
              <div className="text-2xl font-bold text-green-600">ЛАЙМ</div>
              <div className="text-xs text-gray-500">Стоматология с душой</div>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="tel:+79629498797" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
              <Icon name="Phone" size={18} />
              <span className="font-medium">8 (962) 949-87-97</span>
            </a>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Записаться на приём
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-green-100/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Icon name="Heart" size={16} />
              <span>Забота прежде всего</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Люди лечат людей
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Мы — команда врачей, для которых забота и внимание важнее, чем просто лечение.
              Клиника «ЛАЙМ» — место, где стоматология становится добрым делом.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
                Узнать о клинике
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Почему пациенты выбирают «ЛАЙМ»
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Опытные врачи',
                description: 'Каждый специалист регулярно повышает квалификацию',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: 'Sparkles',
                title: 'Современное оборудование',
                description: 'Диагностика и лечение без боли и страха',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: 'Home',
                title: 'Уютная атмосфера',
                description: 'У нас спокойно и чисто, как дома',
                color: 'bg-pink-100 text-pink-600'
              },
              {
                icon: 'HeartHandshake',
                title: 'Забота о каждом пациенте',
                description: 'Мы объясняем каждый шаг и всегда рядом',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: 'Users',
                title: 'Работаем для всей семьи',
                description: 'Взрослые и дети получают одинаково тёплое внимание',
                color: 'bg-orange-100 text-orange-600'
              },
              {
                icon: 'Shield',
                title: 'Прозрачность и честность',
                description: 'Понятные цены и план лечения без скрытых платежей',
                color: 'bg-cyan-100 text-cyan-600'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={item.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Всё, что нужно для здоровья вашей улыбки
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы оказываем полный спектр стоматологических услуг — от профилактики и лечения до протезирования и эстетической стоматологии.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: 'Stethoscope',
                title: 'Терапевтическая стоматология',
                description: 'Лечение кариеса, пульпита, периодонтита. Профессиональная гигиена полости рта.',
                emoji: '🦷'
              },
              {
                icon: 'Crown',
                title: 'Ортопедическая стоматология',
                description: 'Коронки, мосты, виниры. Восстановление зубного ряда с высокой эстетикой.',
                emoji: '👑'
              },
              {
                icon: 'Scissors',
                title: 'Хирургическая стоматология',
                description: 'Удаление зубов, имплантация. Операции проводятся максимально бережно.',
                emoji: '🔬'
              },
              {
                icon: 'Sparkles',
                title: 'Ортодонтическая стоматология',
                description: 'Брекеты, элайнеры, пластинки. Исправление прикуса в любом возрасте.',
                emoji: '✨'
              },
              {
                icon: 'Baby',
                title: 'Детская стоматология',
                description: 'Лечение молочных и постоянных зубов. Дружелюбный подход без стресса.',
                emoji: '👶'
              },
              {
                icon: 'Smile',
                title: 'Эстетическая стоматология',
                description: 'Отбеливание, виниры, реставрация. Создаём улыбку вашей мечты.',
                emoji: '😊'
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-xl transition-all border-2 border-transparent hover:border-green-300">
                <div className="text-5xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
                  Подробнее →
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              Узнать подробнее о всех услугах
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Врачи, которым можно доверять
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              В клинике «ЛАЙМ» работают специалисты, для которых важно не только качество лечения, но и ваше спокойствие.
              Мы верим, что хороший стоматолог — это человек, который умеет слушать.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Щолокова Олеся Сергеевна',
                role: 'Главный врач, стоматолог-терапевт',
                experience: '15 лет опыта',
                emoji: '👩‍⚕️'
              },
              {
                name: 'Иванов Дмитрий Петрович',
                role: 'Стоматолог-ортопед',
                experience: '12 лет опыта',
                emoji: '👨‍⚕️'
              },
              {
                name: 'Петрова Анна Викторовна',
                role: 'Детский стоматолог',
                experience: '8 лет опыта',
                emoji: '👩‍⚕️'
              }
            ].map((doctor, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200">
                <div className="h-64 bg-gradient-to-br from-green-100 to-purple-100 flex items-center justify-center text-8xl">
                  {doctor.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-green-600 font-medium mb-1">{doctor.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{doctor.experience}</p>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Записаться к врачу
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Что говорят наши пациенты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Благодарим за доверие и каждое доброе слово.
              Для нас нет большей награды, чем ваши улыбки после лечения.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Смирнова',
                text: 'Боялась стоматологов всю жизнь. Но в ЛАЙМ меня приняли так тепло, что страх прошел. Олеся Сергеевна — настоящий профессионал и очень добрый человек!',
                rating: 5
              },
              {
                name: 'Михаил Петров',
                text: 'Лечили всей семьей зубы. Дети были в восторге от приёма — никакого стресса! Спасибо за чуткое отношение и качественную работу.',
                rating: 5
              },
              {
                name: 'Анна Королёва',
                text: 'Делала имплантацию. Всё прошло быстро и безболезненно. Врачи объясняли каждый шаг, я чувствовала себя в безопасности. Рекомендую!',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-purple-200 rounded-full flex items-center justify-center text-2xl">
                    😊
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Пациент клиники</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Мы рядом — приходите на консультацию
            </h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Building2" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 text-sm mb-1">Организация</div>
                    <div className="text-gray-900 font-medium">ООО «ЛАЙМ»</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="UserCheck" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 text-sm mb-1">Главный врач</div>
                    <div className="text-gray-900 font-medium">Щолокова Олеся Сергеевна</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 text-sm mb-1">Телефон</div>
                    <a href="tel:+79629498797" className="text-gray-900 font-medium hover:text-green-600 transition-colors">
                      8 (962) 949-87-97
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 text-sm mb-1">Email</div>
                    <a href="mailto:sos13@internet.ru" className="text-gray-900 font-medium hover:text-green-600 transition-colors">
                      sos13@internet.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-500 text-sm mb-1">Адрес</div>
                    <div className="text-gray-900 font-medium">
                      МО, г. Пушкино,<br />
                      Ярославское шоссе, дом 116а
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                  <Icon name="Clock" size={20} />
                  <span>Режим работы</span>
                </div>
                <div className="text-gray-700 text-sm">
                  Пн-Пт: 9:00 — 20:00<br />
                  Сб: 10:00 — 18:00<br />
                  Вс: выходной
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-purple-50 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Записаться на приём</h3>
              <p className="text-gray-600 mb-6">Заполните форму, и мы свяжемся с вами в ближайшее время</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-green-200 focus:border-green-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-green-200 focus:border-green-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Комментарий (необязательно)</label>
                  <Textarea
                    placeholder="Опишите ваш вопрос или пожелания"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-green-200 focus:border-green-400"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg">
                  Отправить заявку
                </Button>

                <p className="text-center text-gray-500 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden border-2 border-green-100">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Map" size={48} className="mx-auto mb-2" />
                  <p>Карта Яндекс / Google Maps</p>
                  <p className="text-sm">МО, г. Пушкино, Ярославское шоссе, 116а</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🦷</div>
                <div>
                  <div className="text-2xl font-bold text-white">ЛАЙМ</div>
                  <div className="text-xs text-gray-400">Стоматология с душой</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Клиника, где забота о пациентах — на первом месте
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Наши услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Терапевтическая стоматология</li>
                <li>Ортопедическая стоматология</li>
                <li>Хирургическая стоматология</li>
                <li>Детская стоматология</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p>📞 8 (962) 949-87-97</p>
                <p>✉️ sos13@internet.ru</p>
                <p>📍 МО, г. Пушкино, Ярославское шоссе, 116а</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 ООО «ЛАЙМ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
