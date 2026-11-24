import { useState } from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* CABECERA */}
      <header className="sticky top-0 bg-white shadow-sm">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <span className="text-lg font-bold">MiMarca</span>

          <ul className="hidden gap-8 md:flex">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <button
            className="h-11 w-11 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <ul className="space-y-2 px-4 pb-4 md:hidden">
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Tu titular</h1>
          <p className="mt-4 text-slate-600">Subtítulo…</p>
        </div>
        <div className="h-64 rounded-2xl bg-indigo-500" />
      </section>

      {/* TARJETAS */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis'].map((t) => (
            <article key={t} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">Descripción…</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-slate-900 py-8 text-center text-sm text-slate-300">
        © 2026 MiMarca
      </footer>
    </div>
  );
};

export default Home;