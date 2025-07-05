import React from 'react';
import Head from 'next/head';
import { OrganizationSchema, ProductSchema, BreadcrumbSchema, LocalBusinessSchema } from './structured-data';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: {
    product?: {
      name: string;
      image: string;
      description: string;
      sku?: string;
    };
    organization?: boolean;
    localBusiness?: boolean;
    breadcrumbs?: Array<{ name: string; url: string }>;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Sulman Traders - Leading Chemical Manufacturer in Pakistan',
  description = 'Premium manufacturer of Copper Oxide, Silver Nitrate, Silver Chloride, and Copper Sulphate in Pakistan. High-purity chemicals for industrial applications.',
  canonicalUrl = 'https://www.sulmantraders.com',
  ogImage = 'https://www.sulmantraders.com/og-image.jpg',
  ogType = 'website',
  structuredData = {},
}) => {
  const companyInfo = {
    name: 'Sulman Traders',
    url: 'https://www.sulmantraders.com',
    logo: 'https://www.sulmantraders.com/logo.png',
    address: 'Lahore, Pakistan',
    telephone: '+92 123 4567890'
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sulman Traders" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile Specific */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData.organization && (
        <OrganizationSchema {...companyInfo} />
      )}

      {structuredData.localBusiness && (
        <LocalBusinessSchema 
          {...companyInfo}
          geo={{ latitude: 31.5204, longitude: 74.3587 }} // Coordinates for Lahore
        />
      )}

      {structuredData.product && (
        <ProductSchema
          name={structuredData.product.name}
          image={structuredData.product.image}
          description={structuredData.product.description}
          sku={structuredData.product.sku}
          brand="Sulman Traders"
          offers={{ availability: "https://schema.org/InStock" }}
        />
      )}

      {structuredData.breadcrumbs && (
        <BreadcrumbSchema items={structuredData.breadcrumbs} />
      )}
    </Head>
  );
};

export default SEOHead; 