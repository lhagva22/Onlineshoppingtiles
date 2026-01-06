import { BikeData } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Package, Ruler, Car } from 'lucide-react';

interface BikeCardProps {
  bike: BikeData;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-gray-200 relative">
        <ImageWithFallback
          src={bike.imageUrl}
          alt={bike.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{bike.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ₮{bike.price.toLocaleString()}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Ruler className="w-4 h-4" />
            <span>Хэмжээ: {bike.size}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Package className="w-4 h-4" />
            <span>Төлөв: {bike.condition}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{bike.createdAt}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 line-clamp-2">{bike.description}</p>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex items-start gap-2">
            <Car className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Тохирох машин:</p>
              <div className="flex flex-wrap gap-1">
                {bike.fitsCars.map((car, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {car}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Дэлгэрэнгүй үзэх
        </button>
      </div>
    </div>
  );
}
