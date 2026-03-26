import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '@/utils/whatsappUtils.js';

const CapCard = ({ cap }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleBuyClick = () => {
    openWhatsAppChat(cap.name);
  };

  return (
    <div className="group relative flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={cap.image}
          alt={cap.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold mb-2 leading-snug" style={{letterSpacing: '-0.01em'}}>
          {cap.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {cap.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(cap.price)}
          </span>
          <button
            onClick={handleBuyClick}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="h-4 w-4" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapCard;
