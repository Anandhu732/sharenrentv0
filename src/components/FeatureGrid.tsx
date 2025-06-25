
import { Share, DollarSign, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Share,
    title: "Share Easily",
    description: "List your unused items in minutes and start earning passive income from your existing belongings.",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50"
  },
  {
    icon: DollarSign,
    title: "Rent Affordably",
    description: "Access expensive items for a fraction of their cost. Perfect for one-time use or trying before buying.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Buy with Trust",
    description: "Purchase pre-owned items with confidence. All sellers are verified and products are quality-checked.",
    color: "bg-purple-500",
    lightColor: "bg-purple-50"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How ShareNRent Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple ways to maximize our sharing economy platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className={`w-16 h-16 ${feature.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 text-gray-700`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
