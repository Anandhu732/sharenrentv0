
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Eye, Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      product: 'iPhone 14 Pro',
      customer: 'Priya Sharma',
      renter: 'Rahul Kumar',
      amount: '₹2,500',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-01-22',
      duration: '7 days'
    },
    {
      id: 'ORD-002',
      product: 'MacBook Pro',
      customer: 'Anjali Gupta',
      renter: 'Vikram Singh',
      amount: '₹3,000',
      status: 'completed',
      startDate: '2024-01-10',
      endDate: '2024-01-17',
      duration: '7 days'
    },
    {
      id: 'ORD-003',
      product: 'Canon DSLR',
      customer: 'Meera Patel',
      renter: 'Arjun Reddy',
      amount: '₹1,500',
      status: 'pending',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      duration: '5 days'
    },
    {
      id: 'ORD-004',
      product: 'PlayStation 5',
      customer: 'Rohan Sharma',
      renter: 'Kavya Nair',
      amount: '₹2,000',
      status: 'cancelled',
      startDate: '2024-01-12',
      endDate: '2024-01-19',
      duration: '7 days'
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: { color: 'bg-blue-100 text-blue-700', icon: Clock },
      completed: { color: 'bg-green-100 text-green-700', icon: CheckCircle },
      pending: { color: 'bg-yellow-100 text-yellow-700', icon: Package },
      cancelled: { color: 'bg-red-100 text-red-700', icon: XCircle },
    };
    
    const variant = variants[status as keyof typeof variants];
    const Icon = variant.icon;
    
    return (
      <Badge className={`${variant.color} border-0`}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
        <p className="text-gray-600">Track and manage all rental orders</p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search orders, products, or customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Orders List */}
      <Card className="p-6">
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold text-gray-900">{order.id}</h3>
                  {getStatusBadge(order.status)}
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Product</p>
                  <p className="font-medium">{order.product}</p>
                </div>
                <div>
                  <p className="text-gray-500">Customer</p>
                  <p className="font-medium">{order.customer}</p>
                </div>
                <div>
                  <p className="text-gray-500">Renter</p>
                  <p className="font-medium">{order.renter}</p>
                </div>
                <div>
                  <p className="text-gray-500">Amount</p>
                  <p className="font-medium text-emerald-600">{order.amount}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  {order.startDate} to {order.endDate} ({order.duration})
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminOrders;
