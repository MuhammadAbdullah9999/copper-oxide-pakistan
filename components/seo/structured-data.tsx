// Structured data component for JSON-LD implementation
import React from 'react';

interface OrganizationProps {
  name: string;
  url: string;
  logo: string;
  address?: string;
  telephone?: string;
}

interface ProductProps {
  name: string;
  image: string;
  description: string;
  sku?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export const OrganizationSchema = ({
  name,
  url,
  logo,
  address,
  telephone
}: OrganizationProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    ...(address && { address: {
      '@type': 'PostalAddress',
      streetAddress: address
    }}),
    ...(telephone && { telephone })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const ProductSchema = ({
  name,
  image,
  description,
  sku,
  brand = 'Sulman Traders',
  offers
}: ProductProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    ...(sku && { sku }),
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand
      }
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const BreadcrumbSchema = ({ 
  items 
}: { 
  items: { name: string; url: string }[] 
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const LocalBusinessSchema = ({
  name,
  url,
  logo,
  address,
  telephone,
  geo
}: OrganizationProps & { geo?: { latitude: number; longitude: number } }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    logo,
    ...(address && { address: {
      '@type': 'PostalAddress',
      streetAddress: address
    }}),
    ...(telephone && { telephone }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}; 