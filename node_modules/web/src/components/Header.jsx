import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black tracking-tight uppercase">
              MONTIER
            </h1>
            <span className="text-xs font-normal tracking-widest text-primary lowercase mt-1">
              caps
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#productos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Productos
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
