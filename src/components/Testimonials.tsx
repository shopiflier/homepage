import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStyle',
      avatar: 'SC',
      avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
      content: 'Shopifly transformed our e-commerce operations. The seamless integration and powerful analytics helped us increase our conversion rate by 40% in just 3 months.',
      rating: 5,
      company: 'TechStyle'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GreenMarket',
      avatar: 'MR',
      avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      content: 'The omni-channel capabilities are game-changing. We can now manage our online store, marketplace listings, and social commerce from one unified platform.',
      rating: 5,
      company: 'GreenMarket'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director, FashionForward',
      avatar: 'EW',
      avatarColor: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      content: 'The CRM features and customer insights have revolutionized how we approach customer retention. Our repeat purchase rate has doubled since switching to Shopifly.',
      rating: 5,
      company: 'FashionForward'
    },
    {
      name: 'David Kim',
      role: 'E-commerce Manager, SportZone',
      avatar: 'DK',
      avatarColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
      content: 'The themes are not just beautiful, they\'re optimized for performance. Our page load times improved by 60%, and our mobile conversion rates are through the roof.',
      rating: 5,
      company: 'SportZone'
    },
    {
      name: 'Lisa Thompson',
      role: 'Owner, ArtisanCrafts',
      avatar: 'LT',
      avatarColor: 'bg-gradient-to-br from-orange-500 to-red-500',
      content: 'As a small business owner, I needed something powerful yet easy to use. Shopifly delivered exactly that. The support team is incredible too!',
      rating: 5,
      company: 'ArtisanCrafts'
    },
    {
      name: 'James Wilson',
      role: 'CTO, ElectroHub',
      avatar: 'JW',
      avatarColor: 'bg-gradient-to-br from-teal-500 to-blue-500',
      content: 'The technical capabilities and API integrations are outstanding. We were able to connect all our existing tools seamlessly. Highly recommended for tech-savvy teams.',
      rating: 5,
      company: 'ElectroHub'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">{t('testimonials.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">150+</div>
            <div className="text-gray-600">Integrations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;