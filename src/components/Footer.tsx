function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-slate-600">
            &copy; {new Date().getFullYear()} Team Podcast. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Created with passion for our school project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
