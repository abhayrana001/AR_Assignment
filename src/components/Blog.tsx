import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'React Tips & Tricks',
    excerpt: 'Learn how to boost your productivity with lesser-known React techniques.',
     slug: 'react-tips-tricks',
    link: '#blog'
  },
  {
    title: 'Why TypeScript?',
    excerpt: 'Discover how TypeScript improves your code safety and scalability.',
     slug: 'why-typescript',
    link: '#blog'
  },
  {
    title: 'CSS vs Tailwind',
    excerpt: 'Which one should you choose for modern web apps?',
     slug: 'css-vs-tailwind',
    link: '#blog'
  },
  {
    title: 'State Management in React',
    excerpt: 'State Management using Context API, Redux, and other popular state tools.',
     slug: 'state-management-react',
    link: '#blog'
  },
  {
    title: 'Hadoop Ecosystem',
    excerpt: 'Hadoop is a framework which comprised of set of tools and technologies. They combine together to make a Eco System. Different tools can be used at different parts of projects based on its implementations and features. ',
     slug: 'hadoop-ecosystem',
    link: '#blog'
  },
];

const Blog: React.FC = () => {
  return (
    <section className=" p-8  text-center scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <div
            key={post.title}
            className="bg-purple-200  p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
             <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
