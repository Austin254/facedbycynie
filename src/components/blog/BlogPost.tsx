import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {post.author}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button className="text-purple-600 font-medium hover:text-purple-700">
          Read More
        </button>
      </div>
    </div>
  );
}