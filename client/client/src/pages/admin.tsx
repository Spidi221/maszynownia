import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Plus, Edit3, Trash2, Calendar, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  published: boolean;
  category: 'ems' | 'strefa' | 'general';
}

export default function Admin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'general' as BlogPost['category'],
    published: false
  });

  // Load posts from localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('maszynownia-blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage
  const savePosts = (newPosts: BlogPost[]) => {
    localStorage.setItem('maszynownia-blog-posts', JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentPost) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === currentPost.id 
          ? { ...post, ...formData }
          : post
      );
      savePosts(updatedPosts);
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      savePosts([...posts, newPost]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'general',
      published: false
    });
    setCurrentPost(null);
    setIsEditing(false);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      category: post.category,
      published: post.published
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      savePosts(updatedPosts);
    }
  };

  const togglePublished = (id: string) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, published: !post.published } : post
    );
    savePosts(updatedPosts);
  };

  const getCategoryColor = (category: BlogPost['category']) => {
    switch (category) {
      case 'ems': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'strefa': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-stone-500/10 text-stone-400 border-stone-500/20';
    }
  };

  const getCategoryLabel = (category: BlogPost['category']) => {
    switch (category) {
      case 'ems': return 'EMS';
      case 'strefa': return 'Strefa Gimnastyki';
      default: return 'Ogólne';
    }
  };

  return (
    <>
      <Helmet>
        <title>Panel Administracyjny - Maszynownia</title>
        <meta name="description" content="Panel administracyjny Maszynowni - zarządzanie treściami i aktualnościami." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div
      className="min-h-screen bg-stone-950 text-white p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <span>Powrót do strony</span>
            </Link>
            <h1 className="text-3xl font-bold">Panel Admin - Aktualności</h1>
          </div>
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-600 hover:bg-yellow-700 text-black"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nowy post
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Post Form */}
          {isEditing && (
            <div
              className="lg:col-span-1"
            >
              <Card className="bg-stone-900/50 border-stone-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {currentPost ? 'Edytuj post' : 'Nowy post'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Tytuł</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        className="bg-stone-800 border-stone-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="excerpt">Streszczenie</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                        className="bg-stone-800 border-stone-600 text-white"
                        rows={2}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Treść</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                        className="bg-stone-800 border-stone-600 text-white"
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Kategoria</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as BlogPost['category'] }))}
                        className="w-full p-2 bg-stone-800 border border-stone-600 rounded-md text-white"
                      >
                        <option value="general">Ogólne</option>
                        <option value="ems">EMS</option>
                        <option value="strefa">Strefa Gimnastyki</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={formData.published}
                        onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="published">Opublikowany</Label>
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-black">
                        {currentPost ? 'Zaktualizuj' : 'Utwórz'}
                      </Button>
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Anuluj
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Posts List */}
          <div className={isEditing ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <Card className="bg-stone-900/50 border-stone-700">
                  <CardContent className="text-center py-12">
                    <p className="text-stone-400">Brak postów. Utwórz pierwszy post!</p>
                  </CardContent>
                </Card>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                  >
                    <Card className="bg-stone-900/50 border-stone-700">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                              <span className={`px-2 py-1 rounded text-xs border ${getCategoryColor(post.category)}`}>
                                {getCategoryLabel(post.category)}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                post.published 
                                  ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                                  : 'bg-red-500/10 text-red-400 border-red-500/20'
                              } border`}>
                                {post.published ? 'Opublikowany' : 'Szkic'}
                              </span>
                            </div>
                            <p className="text-stone-300 mb-3">{post.excerpt}</p>
                            <div className="flex items-center gap-2 text-sm text-stone-400">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.createdAt).toLocaleDateString('pl-PL')}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => togglePublished(post.id)}
                              className="text-xs"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              {post.published ? 'Ukryj' : 'Publikuj'}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(post)}
                            >
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}