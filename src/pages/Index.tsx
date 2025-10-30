import Header from '@/components/Header';
import TickerTape from '@/components/TickerTape';
import HeroSection from '@/components/HeroSection';
import CryptoSlider from '@/components/CryptoSlider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TickerTape />
      <HeroSection />
      <CryptoSlider />

      <section className="py-20 bg-[#1A202C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Почему выбирают CryptoEx
            </h2>
            <p className="text-gray-400 text-lg">
              Мы создаем лучший опыт торговли криптовалютой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Безопасность',
                description:
                  'Холодное хранение 95% средств, двухфакторная аутентификация и страхование депозитов',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: 'Zap',
                title: 'Быстрые транзакции',
                description:
                  'Мгновенное исполнение ордеров и вывод средств в течение 5 минут',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: 'DollarSign',
                title: 'Низкие комиссии',
                description: 'Всего 0.1% за сделку. Чем больше торгуете, тем меньше платите',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: 'BarChart3',
                title: 'Продвинутые графики',
                description:
                  'Профессиональные инструменты технического анализа от TradingView',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Русскоязычная поддержка готова помочь в любое время суток',
                color: 'from-red-500 to-rose-500',
              },
              {
                icon: 'Smartphone',
                title: 'Мобильное приложение',
                description: 'Торгуйте где угодно с приложениями для iOS и Android',
                color: 'from-indigo-500 to-blue-500',
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card border border-gray-700 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1E2A3A] to-[#151B28]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🚀</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Начните торговать за 2 минуты
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Зарегистрируйтесь, пройдите быструю верификацию и начните покупать
                  криптовалюту. Бонус $10 для новых пользователей!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-10 py-7 text-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Создать аккаунт бесплатно
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#0D1117] border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">₿</div>
                <div className="text-2xl font-bold text-white">CryptoEx</div>
              </div>
              <p className="text-gray-400 text-sm">
                Ведущая криптовалютная биржа для трейдеров и инвесторов
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Спотовая торговля
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Маржинальная торговля
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    P2P обмен
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Стейкинг
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Центр помощи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Комиссии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Связаться с нами
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Пресс-центр
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 CryptoEx. Все права защищены.</p>
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'Instagram', 'Youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social}
                >
                  <Icon name={social as any} size={20} fallback="Share2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
