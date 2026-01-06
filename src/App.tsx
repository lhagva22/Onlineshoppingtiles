import { useState } from 'react';
import { BikeListings } from './components/BikeListings';
import { SellerDashboard } from './components/SellerDashboard';
import { Header } from './components/Header';

export type UserRole = 'buyer' | 'seller';

export interface BikeData {
  id: string;
  title: string;
  price: number;
  size: string;
  brand: string;
  condition: string;
  description: string;
  imageUrl: string;
  fitsCars: string[];
  sellerId: string;
  createdAt: string;
}

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>('buyer');
  const [bikes, setBikes] = useState<BikeData[]>([
    {
      id: '1',
      title: 'Giant Escape 3 City Bike',
      price: 850000,
      size: 'M (170-180cm)',
      brand: 'Giant',
      condition: 'Шинэ',
      description: 'Хотын замд тохиромжтой, хөнгөн дугуй',
      imageUrl: 'https://images.unsplash.com/photo-1607998527053-4c70fd6841b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmlrZSUyMHNhbGV8ZW58MXx8fHwxNzY3Njk5MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fitsCars: ['Седан', 'SUV', 'Хэтчбэк'],
      sellerId: 'seller1',
      createdAt: '2026-01-05'
    },
    {
      id: '2',
      title: 'Trek Mountain Bike X-Caliber',
      price: 1200000,
      size: 'L (180-190cm)',
      brand: 'Trek',
      condition: 'Сайн',
      description: 'Уулын дугуй, амьд явалттай',
      imageUrl: 'https://images.unsplash.com/photo-1607998527053-4c70fd6841b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmlrZSUyMHNhbGV8ZW58MXx8fHwxNzY3Njk5MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fitsCars: ['SUV', 'Пикап'],
      sellerId: 'seller2',
      createdAt: '2026-01-04'
    },
    {
      id: '3',
      title: 'Specialized Road Bike Allez',
      price: 950000,
      size: 'S (160-170cm)',
      brand: 'Specialized',
      condition: 'Маш сайн',
      description: 'Замын дугуй, хурдны уралдаанд тохиромжтой',
      imageUrl: 'https://images.unsplash.com/photo-1607998527053-4c70fd6841b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmlrZSUyMHNhbGV8ZW58MXx8fHwxNzY3Njk5MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fitsCars: ['Седан', 'Хэтчбэк'],
      sellerId: 'seller1',
      createdAt: '2026-01-03'
    }
  ]);

  const addBike = (bike: BikeData) => {
    setBikes([bike, ...bikes]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole={userRole} setUserRole={setUserRole} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {userRole === 'buyer' ? (
          <BikeListings bikes={bikes} />
        ) : (
          <SellerDashboard bikes={bikes} addBike={addBike} />
        )}
      </main>
    </div>
  );
}