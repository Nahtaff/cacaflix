'use client';

import { useRef } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl?: string;
  category?: string;
  description?: string;
  year?: string;
  rating?: string;
}

interface CategoryRowProps {
  title: string;
  movies: Movie[];
}

const CategoryRow = ({ title, movies }: CategoryRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-8 font-netflix">{title}</h2>
      
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Scroll left"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Scroll right"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Movie row */}
      <div
        ref={rowRef}
        className="flex space-x-2 overflow-x-scroll scrollbar-hide px-4 md:px-8 py-2"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[200px] md:w-[330px]">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRow; 