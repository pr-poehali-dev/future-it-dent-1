import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1E2A3A] border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-3xl">₿</div>
              <div className="text-2xl font-bold text-white">CryptoEx</div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {['Рынки', 'Торговать', 'О нас', 'Поддержка'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Войти
              </Button>
              <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300">
                Регистрация
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-gray-700 rounded transition-colors"
                aria-label="Меню"
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></span>
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 bg-[#1E2A3A] z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col p-6 gap-4">
          {['Рынки', 'Торговать', 'О нас', 'Поддержка'].map((item, idx) => (
            <a
              key={item}
              href="#"
              className="text-white text-xl py-3 border-b border-gray-700 hover:text-primary transition-colors"
              style={{
                animation: isMenuOpen ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none',
              }}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="border-primary text-primary">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent">Регистрация</Button>
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
