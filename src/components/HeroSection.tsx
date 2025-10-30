import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A202C] via-[#1E2A3A] to-[#1A202C] py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-pulse">
            <Icon name="TrendingUp" size={16} />
            <span>Криптовалютная биржа №1 в СНГ</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Торгуйте будущим
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              сегодня
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Безопасная и надежная платформа для торговли криптовалютой.
            Низкие комиссии. Высокая ликвидность. 24/7 поддержка.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Начать торговлю
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-white hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '$2.5B', label: 'Объем торгов за 24ч' },
              { value: '500K+', label: 'Активных пользователей' },
              { value: '200+', label: 'Криптовалют' },
              { value: '0.1%', label: 'Комиссия' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-card/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
