
import React from 'react';

interface BlogStepProps {
  title: string;
  description: string;
}

const BlogStep = ({ title, description }: BlogStepProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
      <h4 className="font-playfair font-medium text-lg mb-2 text-chef-red">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BlogStep;
