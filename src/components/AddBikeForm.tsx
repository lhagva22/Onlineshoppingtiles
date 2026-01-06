import { useState } from 'react';
import { BikeData } from '../App';
import { X } from 'lucide-react';

interface AddBikeFormProps {
  onSubmit: (bike: BikeData) => void;
  onCancel: () => void;
}

export function AddBikeForm({ onSubmit, onCancel }: AddBikeFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    size: '',
    brand: '',
    condition: 'Шинэ',
    description: '',
    imageUrl: '',
    fitsCars: [] as string[]
  });

  const [carInput, setCarInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newBike: BikeData = {
      id: Date.now().toString(),
      title: formData.title,
      price: parseFloat(formData.price),
      size: formData.size,
      brand: formData.brand,
      condition: formData.condition,
      description: formData.description,
      imageUrl: formData.imageUrl,
      fitsCars: formData.fitsCars,
      sellerId: 'seller1',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onSubmit(newBike);
  };

  const addCar = () => {
    if (carInput.trim() && !formData.fitsCars.includes(carInput.trim())) {
      setFormData({
        ...formData,
        fitsCars: [...formData.fitsCars, carInput.trim()]
      });
      setCarInput('');
    }
  };

  const removeCar = (car: string) => {
    setFormData({
      ...formData,
      fitsCars: formData.fitsCars.filter(c => c !== car)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Шинэ дугуй нэмэх</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Дугуйн нэр *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Giant Escape 3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Брэнд *
            </label>
            <input
              type="text"
              required
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Giant"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Үнэ (₮) *
            </label>
            <input
              type="number"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="850000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Хэмжээ *
            </label>
            <select
              required
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Сонгох</option>
              <option value="XS (150-160cm)">XS (150-160cm)</option>
              <option value="S (160-170cm)">S (160-170cm)</option>
              <option value="M (170-180cm)">M (170-180cm)</option>
              <option value="L (180-190cm)">L (180-190cm)</option>
              <option value="XL (190-200cm)">XL (190-200cm)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Төлөв байдал *
            </label>
            <select
              required
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Шинэ">Шинэ</option>
              <option value="Маш сайн">Маш сайн</option>
              <option value="Сайн">Сайн</option>
              <option value="Дунд">Дунд</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Зургийн URL
            </label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://example.com/bike.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тайлбар *
          </label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Дугуйн дэлгэрэнгүй мэдээлэл..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тохирох машин
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={carInput}
              onChange={(e) => setCarInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCar())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Машины төрөл нэмэх (жнь: Седан)"
            />
            <button
              type="button"
              onClick={addCar}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Нэмэх
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.fitsCars.map((car) => (
              <span
                key={car}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full flex items-center gap-2"
              >
                {car}
                <button
                  type="button"
                  onClick={() => removeCar(car)}
                  className="hover:text-green-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Зар нэмэх
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Болих
          </button>
        </div>
      </form>
    </div>
  );
}
