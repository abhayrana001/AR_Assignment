import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['home','about', 'services', 'blog', 'development', 'contact'];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div><img src='/logo.jpg' className='h-[60px] w-[60px]'></img></div>
        <nav className="hidden md:flex gap-6">
          {links.map(link => (
            <a key={link} href={`#${link}`} className="hover:text-blue-500 capitalize font-semibold text-xl">
              {link}
            </a>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 bg-white capitalize">
          {links.map(link => (
            <a key={link} href={`#${link}`} className="py-2 text-center hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;