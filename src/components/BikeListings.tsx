import { useState } from 'react';
import { BikeData } from '../App';
import { BikeCard } from './BikeCard';
import { Search, Filter } from 'lucide-react';

interface BikeListingsProps {
  bikes: BikeData[];
}

export function BikeListings({ bikes }: BikeListingsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = selectedSize === 'all' || bike.size === selectedSize;
    const matchesCondition = selectedCondition === 'all' || bike.condition === selectedCondition;
    
    return matchesSearch && matchesSize && matchesCondition;
  });

  const sizes = ['all', ...Array.from(new Set(bikes.map(b => b.size)))];
  const conditions = ['all', ...Array.from(new Set(bikes.map(b => b.condition)))];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Дугуй худалдаа</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Дугуй хайх..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="all">Бүх хэмжээ</option>
                {sizes.filter(s => s !== 'all').map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="all">Бүх төлөв байдал</option>
                {conditions.filter(c => c !== 'all').map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBikes.map(bike => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>

      {filteredBikes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Дугуй олдсонгүй</p>
        </div>
      )}
    </div>
  );
}
