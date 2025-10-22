'use client';

import { Movie } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner = ({ movie }: HeroBannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video autoplay failed:', error);
        // Autoplay might be blocked, user needs to interact
      });
    }
  }, [movie.videoUrl]);

  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Media (Video or Image) */}
      <div className="absolute inset-0">
        {movie.videoUrl ? (
          <video
            ref={videoRef}
            src={movie.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
        ) : movie.imageUrl ? (
          <Image
            src={movie.imageUrl}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-800" /> // Fallback background color
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content - Positioned for left and vertical alignment */}
      <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-8 lg:pl-16">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          {/* Optional: Netflix Original text */}
          <p className="text-sm md:text-base text-gray-200 font-semibold mb-1">
            Made by your lovely boy, Faten
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-netflix">
            {movie.title}
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-8 line-clamp-3">
            {movie.description}
          </p>
          <div className="flex gap-3 md:gap-4">
            <Link
              href={`/movie/${movie.id}`}
              className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-opacity-80 transition-all flex items-center"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              Play
            </Link>
            <button className="bg-gray-500/50 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-opacity-80 transition-all flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      {movie.videoUrl && (
        <button
          className="absolute bottom-8 right-8 bg-black/50 p-2 rounded-full text-white focus:outline-none"
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.293 13.707L19 12l-2.707-2.707m-9.586-1.586L6 10m3.914-2.828l1.414 1.414M4 12h.01M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072L12 19.071l-3.536-3.535a5 5 0 117.072-7.072zm-.536-.536L12 15.071l-3.536-3.535m-3.914 2.828l1.414 1.414m2.828-9.586l1.414 1.414M21 12h.01M6 12H2a1 1 0 00-1 1v.01a1 1 0 001 1h3.99a1 1 0 001-1v-.01a1 1 0 00-1-1z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default HeroBanner; 