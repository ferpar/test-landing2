import { NextResponse } from 'next/server'

// Placeholder data (replace with actual database query in production)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "2023-06-15",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "Optimizing Website Performance",
    date: "2023-06-22",
    excerpt: "Learn essential techniques to boost your website's speed and performance.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

export async function GET() {
  // In a real application, you would fetch this data from a database
  return NextResponse.json(blogPosts)
}