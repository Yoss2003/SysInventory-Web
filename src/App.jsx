import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white font-sans selection:bg-purple-500/30 overflow-hidden relative">
      
      {/* Efecto de luz de fondo (Glow estilo Geode) */}
      <div className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Barra de Navegación */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          {/* Logo simulado */}
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-wide">Sys<span className="text-purple-400">Inventory</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Características</a>
          <a href="#" className="hover:text-white transition-colors">Documentación</a>
        </div>
      </nav>

      {/* Sección Principal (Hero) */}
      <main className="container mx-auto px-6 pt-24 pb-20 text-center relative z-10">
        <h2 className="text-purple-500 font-bold tracking-[0.2em] text-sm mb-4 uppercase">Versión Móvil Disponible</h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          El control de tu almacén, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            ahora en tu bolsillo.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Gestiona stock offline, audita movimientos mediante escaneo rápido y exporta reportes detallados. Una solución diseñada para escalar con tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* Botón Principal (Descarga) con efecto Neón */}
          <a 
            href="/ControlInventarioMovil.apk" 
            download="ControlInventarioMovil.apk"
            className="group w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar APK
          </a>

          {/* Botón Secundario */}
          <a href="#instrucciones" className="w-full sm:w-auto px-8 py-4 bg-[#15151A] hover:bg-[#1E1E24] text-gray-300 font-bold rounded-xl border border-gray-800 transition-all duration-300 flex items-center justify-center">
            Ver instrucciones
          </a>
        </div>
      </main>

      {/* Grid de Instrucciones estilo Tarjetas Geode */}
      <section id="instrucciones" className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-[#121216] border border-gray-800/80 p-8 rounded-2xl hover:border-purple-500/40 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <span className="text-purple-400 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Obtén el archivo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Descarga el archivo APK directamente desde nuestros servidores usando el botón principal.</p>
          </div>

          <div className="bg-[#121216] border border-gray-800/80 p-8 rounded-2xl hover:border-pink-500/40 transition-colors group">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
              <span className="text-pink-400 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Da Permisos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Ve a Configuración, Seguridad y permite la instalación desde "Orígenes desconocidos".</p>
          </div>

          <div className="bg-[#121216] border border-gray-800/80 p-8 rounded-2xl hover:border-purple-500/40 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <span className="text-purple-400 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Instala y usa</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Presiona "Instalar de todos modos", abre la aplicación y comienza a gestionar tu inventario.</p>
          </div>

        </div>
      </section>
      
      {/* Footer simple */}
      <footer className="border-t border-gray-800/50 mt-12 py-8 text-center text-gray-500 text-sm relative z-10">
        <p>© 2026 SysInventory. Creado para dominar el stock.</p>
      </footer>

    </div>
  );
}

export default App;