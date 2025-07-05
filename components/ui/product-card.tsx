import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  chemical: string;
  applications: string[];
  link: string;
  purity: string;
}

export function ProductCard({
  name,
  description,
  image,
  imageAlt,
  chemical,
  applications,
  link,
  purity,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-4px]">
      <div className="relative h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-amber-700 font-mono mb-3">{chemical}</p>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-700">Purity: </span>
          <span className="text-sm text-gray-600">{purity}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {applications.map((app, index) => (
            <span
              key={index}
              className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
            >
              {app}
            </span>
          ))}
        </div>
        <Link href={link}>
          <Button 
            className="w-full bg-amber-700 hover:bg-amber-800"
            aria-label={`View details about ${name}`}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
