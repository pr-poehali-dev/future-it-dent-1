export default function TickerTape() {
  const cryptoData = [
    { symbol: 'BTC', price: '$61,245.50', change: '+2.5%', isUp: true },
    { symbol: 'ETH', price: '$3,402.18', change: '-1.2%', isUp: false },
    { symbol: 'XRP', price: '$0.52', change: '+0.8%', isUp: true },
    { symbol: 'ADA', price: '$0.46', change: '-0.3%', isUp: false },
    { symbol: 'SOL', price: '$142.33', change: '+5.7%', isUp: true },
    { symbol: 'DOT', price: '$6.88', change: '-2.1%', isUp: false },
    { symbol: 'DOGE', price: '$0.12', change: '+3.2%', isUp: true },
    { symbol: 'MATIC', price: '$0.89', change: '+1.5%', isUp: true },
  ];

  const duplicatedData = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="bg-[#151B28] border-b border-gray-800 overflow-hidden py-3">
      <div className="ticker-container">
        <div className="ticker-content">
          {duplicatedData.map((crypto, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 text-sm whitespace-nowrap"
            >
              <span className="font-bold text-white">{crypto.symbol}</span>
              <span className="text-gray-300">{crypto.price}</span>
              <span className={crypto.isUp ? 'text-green-400' : 'text-red-400'}>
                {crypto.isUp ? '↗' : '↘'} {crypto.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-container {
          width: 100%;
        }
        
        .ticker-content {
          display: inline-flex;
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .ticker-container:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
