
import React from 'react';

interface BlogContentProps {
  children: React.ReactNode;
}

const BlogContent = ({ children }: BlogContentProps) => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto prose lg:prose-lg">
      {children}
    </div>
  );
};

export default BlogContent;
