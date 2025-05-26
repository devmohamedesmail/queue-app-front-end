import React from 'react';
import {
  ClockIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const advantages = [
  {
    title: 'Save Time',
    description: 'Optimize your waiting experience with smart queue management',
    icon: SparklesIcon,
  },
  {
    title: 'Real-time Queue Updates',
    description: 'Get instant notifications about your position and estimated wait time',
    icon: ClockIcon,
  },
  {
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is always ready to help you',
    icon: ChatBubbleLeftRightIcon,
  },
];

const Advantages = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Queue Management System?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the future of queue management with our innovative features
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="p-2 bg-green-600 rounded-lg">
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 