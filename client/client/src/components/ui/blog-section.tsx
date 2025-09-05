import { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  published: boolean;
  category: 'ems' | 'strefa' | 'general';
}

interface BlogSectionProps {
  category?: 'ems' | 'strefa' | 'general';
  accentColor?: 'gold' | 'orange';
  maxPosts?: number;
}

export function BlogSection({ category = 'general', accentColor = 'gold', maxPosts = 3 }: BlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('maszynownia-blog-posts');
    if (savedPosts) {
      const allPosts: BlogPost[] = JSON.parse(savedPosts);
      
      // Filter published posts by category (or general)
      const filteredPosts = allPosts
        .filter(post => post.published && (post.category === category || post.category === 'general'))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, maxPosts);
      
      setPosts(filteredPosts);
    }
  }, [category, maxPosts]);

  if (posts.length === 0) {
    return null; // Don't render section if no posts
  }

  const accentColorClass = accentColor === 'gold' ? 'text-ems-gold' : 'text-gym-orange';
  const borderColorClass = accentColor === 'gold' ? 'border-ems-gold/20' : 'border-gym-orange/20';
  const hoverBorderColorClass = accentColor === 'gold' ? 'hover:border-ems-gold/40' : 'hover:border-gym-orange/40';

  return (
    <section className="py-20 px-6 bg-stone-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${accentColorClass}`}>
            Aktualności
          </h2>
          <p className="text-stone-300 text-lg">
            Najnowsze informacje i nowości
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-in slide-in-from-bottom-8 fade-in duration-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className={`bg-stone-800/50 border ${borderColorClass} ${hoverBorderColorClass} transition-all duration-300 hover:transform hover:scale-105 h-full`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-stone-400" />
                      <span className="text-sm text-stone-400">
                        {new Date(post.createdAt).toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${accentColorClass}`}>
                      {post.category === 'ems' ? 'EMS' : post.category === 'strefa' ? 'Strefa Gimnastyki' : 'Aktualności'}
                    </span>
                    
                    <button className={`flex items-center gap-1 text-sm ${accentColorClass} hover:underline transition-colors`}>
                      Czytaj więcej
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {posts.length >= maxPosts && (
          <div className="text-center mt-12">
            <button
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-md border ${borderColorClass} ${hoverBorderColorClass} ${accentColorClass} hover:bg-stone-800/50 transition-all duration-200 hover:scale-105 active:scale-95`}
            >
              Zobacz wszystkie aktualności
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}