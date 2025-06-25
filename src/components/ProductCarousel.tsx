
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Professional Camera",
    price: 45,
    type: "rent",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Mountain Bike",
    price: 25,
    type: "rent",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    category: "Sports"
  },
  {
    id: 3,
    name: "Gaming Console",
    price: 35,
    type: "rent",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    category: "Gaming"
  },
  {
    id: 4,
    name: "Designer Dress",
    price: 20,
    type: "rent",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    category: "Fashion"
  }
];

const ProductCarousel = () => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-gray-600">
            Most popular items in our community
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className={`absolute top-2 right-2 ${
                    likedProducts.includes(product.id)
                      ? 'text-red-500 bg-white/80'
                      : 'text-gray-600 bg-white/80'
                  } hover:bg-white/90`}
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      likedProducts.includes(product.id) ? 'fill-current' : ''
                    }`} 
                  />
                </Button>
                <div className="absolute bottom-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-emerald-600">
                    ${product.price}/day
                  </div>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                    Rent Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
