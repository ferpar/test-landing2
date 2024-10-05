import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default async function BlogPage() {
  const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' })
  const posts = await res.json()

  return (
    <div className="min-h-screen max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="space-y-6">
        {posts.map((post: any) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}