import React from 'react';

interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'FAQPage' | 'Article' | 'BreadcrumbList';
  data: Record<string, any>;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}