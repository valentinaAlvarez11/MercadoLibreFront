// components/organisms/DailyDeal.tsx
import React from 'react';
import CardProducts, { ProductCardInfo } from '../molecules/CardProducts';

interface DailyDealProps {
  product: ProductCardInfo;
}

const DailyDeal: React.FC<DailyDealProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-[280px]">
      <div className="font-bold text-lg text-gray-800 mb-3">Oferta del día</div>
      <CardProducts product={product} />
    </div>
  );
};

export default DailyDeal;