'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
  description?: string;
  year?: string;
  rating?: string;
}

const MovieCard = ({ id, title, imageUrl, category, description, year, rating }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group transition-all duration-300 ease-in-out cursor-pointer transform hover:z-30 hover:scale-105 hover:shadow-xl rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movie/${id}`}>
        <div className="relative aspect-video w-full">
          {/* Background Image */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-300 bg-black/70 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <h3 className="text-sm md:text-base font-semibold text-white line-clamp-1 font-netflix">{title}</h3>
            {(year || rating || category) && (
              <p className="text-xs md:text-sm text-gray-300 mt-1">
                {year && year} {rating && `• ${rating}`} {category && `• ${category}`}
              </p>
            )}
            {description && (
              <p className="text-xs text-gray-400 mt-2 line-clamp-2 hidden md:block">{description}</p>
            )}
          </div>
        </div>
      </Link>

      {/* Netflix N Logo */}
      <div className="absolute top-2 left-2 z-10">
        <span className="text-red-600 text-base font-bold font-netflix">C</span>
      </div>

    </div>
  );
};

export default MovieCard; 