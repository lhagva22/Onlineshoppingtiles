import { useState } from 'react';
import { BikeData } from '../App';
import { AddBikeForm } from './AddBikeForm';
import { Plus, List } from 'lucide-react';

interface SellerDashboardProps {
  bikes: BikeData[];
  addBike: (bike: BikeData) => void;
}

export function SellerDashboard({ bikes, addBike }: SellerDashboardProps) {
  const [showForm, setShowForm] = useState(false);
  
  // Mock seller ID - in real app would come from auth
  const sellerId = 'seller1';
  const myBikes = bikes.filter(b => b.sellerId === sellerId);

  const handleAddBike = (bike: BikeData) => {
    addBike(bike);
    setShowForm(false);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Миний зарууд</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {showForm ? (
              <>
                <List className="w-5 h-5" />
                Зарууд үзэх
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Шинэ зар нэмэ��
              </>
            )}
          </button>
        </div>
      </div>

      {showForm ? (
        <AddBikeForm onSubmit={handleAddBike} onCancel={() => setShowForm(false)} />
      ) : (
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">{myBikes.length}</p>
                <p className="text-sm text-gray-600 mt-1">Нийт зар</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">
                  ₮{myBikes.reduce((sum, b) => sum + b.price, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">Нийт үнэ</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">0</p>
                <p className="text-sm text-gray-600 mt-1">Хүлээгдэж буй</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Дугуй</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Хэмжээ</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Төлөв</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Үнэ</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Огноо</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myBikes.map((bike) => (
                  <tr key={bike.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{bike.title}</p>
                        <p className="text-sm text-gray-500">{bike.brand}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{bike.size}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {bike.condition}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      ₮{bike.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{bike.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {myBikes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Танд одоогоор зар байхгүй байна</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
