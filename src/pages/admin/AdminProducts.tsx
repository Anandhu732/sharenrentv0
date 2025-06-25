
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Edit, Trash2, Eye, Plus } from 'lucide-react';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 'PROD-001',
      name: 'iPhone 14 Pro',
      category: 'Electronics',
      owner: 'Rahul Kumar',
      price: '₹2,500/day',
      status: 'active',
      rating: 4.8,
      totalRentals: 45,
      image: 'https://images.unsplash.com/photo-1592910147690-33023cc6ba46?w=60&h=60&fit=crop'
    },
    {
      id: 'PROD-002',
      name: 'MacBook Pro',
      category: 'Electronics',
      owner: 'Priya Sharma',
      price: '₹3,000/day',
      status: 'active',
      rating: 4.9,
      totalRentals: 32,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=60&h=60&fit=crop'
    },
    {
      id: 'PROD-003',
      name: 'Canon DSLR Camera',
      category: 'Photography',
      owner: 'Anjali Gupta',
      price: '₹1,500/day',
      status: 'rented',
      rating: 4.7,
      totalRentals: 28,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=60&h=60&fit=crop'
    },
    {
      id: 'PROD-004',
      name: 'Mountain Bike',
      category: 'Sports',
      owner: 'Vikram Singh',
      price: '₹800/day',
      status: 'inactive',
      rating: 4.5,
      totalRentals: 15,
      image: 'https://images.unsplash.com/photo-1544191696-15693bd5af5f?w=60&h=60&fit=crop'
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-700',
      rented: 'bg-blue-100 text-blue-700',
      inactive: 'bg-gray-100 text-gray-700',
      pending: 'bg-yellow-100 text-yellow-700',
    };
    
    return (
      <Badge className={`${variants[status as keyof typeof variants]} border-0`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Listings</h1>
          <p className="text-gray-600">Manage all products on the platform</p>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products, owners, or IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="photography">Photography</option>
              <option value="sports">Sports</option>
              <option value="furniture">Furniture</option>
            </select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="p-6">
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  {getStatusBadge(product.status)}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">ID</p>
                    <p className="font-medium">{product.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Owner</p>
                    <p className="font-medium">{product.owner}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Category</p>
                    <p className="font-medium">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-medium text-emerald-600">{product.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>⭐ {product.rating} rating</span>
                    <span>• {product.totalRentals} rentals</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
