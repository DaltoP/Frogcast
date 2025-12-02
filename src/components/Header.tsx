import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path: string) => {
    const baseClass = "font-bold transition-all px-4 py-2 rounded-lg";
    if (isActive(path)) {
      return `${baseClass} bg-white text-purple-900 shadow-lg scale-105`;
    }
    return `${baseClass} text-white hover:bg-purple-600 hover:scale-105`;
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-900 sticky top-0 z-50 backdrop-blur-sm shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
            <img
              src="/thumbnail_image.png"
              alt="Fear the Frogcast"
              className="w-12 h-12 rounded-lg border-2 border-white shadow-lg group-hover:rotate-12 transition-transform"
            />
            <div>
              <h2 className="text-xl font-black text-white">Fear the Frogcast</h2>
              <p className="text-xs text-yellow-300 font-bold">🐸 Ribbit-worthy conversations</p>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={getLinkClassName("/")}
            >
              Home
            </Link>
            <Link
              to="/episodes"
              className={getLinkClassName("/episodes")}
            >
              Episodes
            </Link>
            <Link
              to="/about"
              className={getLinkClassName("/about")}
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
