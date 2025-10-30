import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CryptoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cryptos = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$61,245.50',
      change: '+2.5%',
      isUp: true,
      emoji: '₿',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,402.18',
      change: '-1.2%',
      isUp: false,
      emoji: 'Ξ',
      color: 'from-purple-500 to-blue-500',
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$142.33',
      change: '+5.7%',
      isUp: true,
      emoji: '◎',
      color: 'from-cyan-500 to-purple-500',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cryptos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cryptos.length) % cryptos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E2A3A] to-[#151B28]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Топовые криптовалюты
          </h2>
          <p className="text-gray-400 text-lg">
            Торгуйте самыми популярными активами с минимальной комиссией
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cryptos.map((crypto, idx) => (
                <div key={idx} className="min-w-full px-4">
                  <Card className="bg-gradient-to-br from-card to-card/50 border border-gray-700 p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div
                        className={`w-32 h-32 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center text-6xl text-white shadow-2xl`}
                      >
                        {crypto.emoji}
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="text-sm text-gray-400 mb-2">{crypto.symbol}</div>
                        <h3 className="text-4xl font-bold text-white mb-4">{crypto.name}</h3>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                          <span className="text-3xl font-bold text-white">{crypto.price}</span>
                          <span
                            className={`flex items-center gap-1 text-xl font-semibold ${
                              crypto.isUp ? 'text-green-400' : 'text-red-400'
                            }`}
                          >
                            {crypto.isUp ? '↗' : '↘'}
                            {crypto.change}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300">
                            <Icon name="TrendingUp" size={18} className="mr-2" />
                            Купить {crypto.symbol}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-gray-600 text-white hover:bg-gray-700 transition-all duration-300"
                          >
                            <Icon name="BarChart3" size={18} className="mr-2" />
                            График
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-6 min-w-[200px]">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Объем 24ч:</span>
                            <span className="text-white font-semibold">$28.5B</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Макс. 24ч:</span>
                            <span className="text-white font-semibold">
                              {crypto.price.replace(/\d+,\d+/, (m) =>
                                String(Number(m.replace(',', '')) + 1234)
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Мин. 24ч:</span>
                            <span className="text-white font-semibold">
                              {crypto.price.replace(/\d+,\d+/, (m) =>
                                String(Number(m.replace(',', '')) - 1234)
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/80 backdrop-blur-sm border border-gray-700 text-white p-3 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg"
            aria-label="Предыдущий слайд"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/80 backdrop-blur-sm border border-gray-700 text-white p-3 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg"
            aria-label="Следующий слайд"
          >
            <Icon name="ChevronRight" size={24} />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {cryptos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Перейти к слайду ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
