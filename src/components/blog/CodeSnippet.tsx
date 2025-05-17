
import React from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeSnippet = ({ code, language = 'javascript', title }: CodeSnippetProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-chef-red my-6">
      {title && <h3 className="font-playfair font-semibold text-xl mb-2">{title}</h3>}
      <div className="font-sourcecode text-sm">
        <pre className="whitespace-pre-wrap overflow-x-auto">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
