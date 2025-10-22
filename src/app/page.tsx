import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/ui/HeroBanner';
import CategoryRow from '@/components/ui/CategoryRow';
import { categories, featuredMovie } from '@/lib/data';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <HeroBanner movie={featuredMovie} />

      {/* Category Rows */}
      <div className="space-y-8 py-8">
        {categories.map((category) => (
          <CategoryRow
            key={category.id}
            title={category.title}
            movies={category.movies}
          />
        ))}
      </div>
    </MainLayout>
  );
}
