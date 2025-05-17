
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogPostCardProps {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

const BlogPostCard = ({ id, title, image, excerpt, date, slug }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 border border-t-0 rounded-b-lg">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="font-playfair font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{excerpt}</p>
        <div className="mt-4 inline-flex items-center text-chef-red font-medium">
          Ler mais
          <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
