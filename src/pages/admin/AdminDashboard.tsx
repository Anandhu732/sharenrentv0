
import { Card } from '@/components/ui/card';
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  ShoppingCart,
  Clock,
  Star,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '2,847', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', change: '+12%' },
    { label: 'Active Listings', value: '1,423', icon: Package, color: 'text-emerald-600', bg: 'bg-emerald-50', change: '+8%' },
    { label: 'Revenue', value: '₹4,56,789', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50', change: '+18%' },
    { label: 'Growth', value: '+24%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50', change: '+3%' },
  ];

  const recentActivity = [
    { type: 'User Registration', user: 'Priya Sharma', time: '2 minutes ago', status: 'success' },
    { type: 'Product Listed', user: 'Rahul Kumar', time: '15 minutes ago', status: 'success' },
    { type: 'Payment Received', user: 'Anjali Gupta', time: '1 hour ago', status: 'success' },
    { type: 'Dispute Reported', user: 'Vikram Singh', time: '2 hours ago', status: 'warning' },
    { type: 'Product Rented', user: 'Meera Patel', time: '3 hours ago', status: 'success' },
  ];

  const topProducts = [
    { name: 'iPhone 14 Pro', rentals: 45, revenue: '₹89,500' },
    { name: 'MacBook Pro', rentals: 32, revenue: '₹1,25,000' },
    { name: 'Canon DSLR', rentals: 28, revenue: '₹67,200' },
    { name: 'PlayStation 5', rentals: 24, revenue: '₹52,800' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening on ShareNRent.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 
                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-600">by {activity.user}</p>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Products */}
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.rentals} rentals</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-600">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Manage Users</h3>
              <p className="text-sm text-gray-600">View and manage user accounts</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <Package className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Product Listings</h3>
              <p className="text-sm text-gray-600">Review and manage products</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <AlertCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Reports & Analytics</h3>
              <p className="text-sm text-gray-600">View detailed reports</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
