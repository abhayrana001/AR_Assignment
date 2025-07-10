import React from 'react';

const posts = [
  {
    title: 'React Tips & Tricks',
    excerpt: 'Learn how to boost your productivity with lesser-known React techniques.',
    link: '#blog'
  },
  {
    title: 'Why TypeScript?',
    excerpt: 'Discover how TypeScript improves your code safety and scalability.',
    link: '#blog'
  },
  {
    title: 'CSS vs Tailwind',
    excerpt: 'Which one should you choose for modern web apps?',
    link: '#blog'
  },
  {
    title: 'State Management in React',
    excerpt: 'State Management using Context API, Redux, and other popular state tools.',
    link: '#blog'
  },
  {
    title: 'Hadoop Ecosystem',
    excerpt: 'Hadoop is a framework which comprised of set of tools and technologies. They combine together to make a Eco System. Different tools can be used at different parts of projects based on its implementations and features. ',
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
            <a
              href={post.link}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
