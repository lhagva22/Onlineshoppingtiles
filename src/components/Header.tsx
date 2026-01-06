import { UserRole } from '../App';
import { ShoppingCart, Store } from 'lucide-react';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export function Header({ userRole, setUserRole }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Дугуй Маркет</h1>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setUserRole('buyer')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                userRole === 'buyer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Худалдан авагч
            </button>
            <button
              onClick={() => setUserRole('seller')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                userRole === 'seller'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Store className="w-5 h-5" />
              Худалдагч
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
