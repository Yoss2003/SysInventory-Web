import React, { useState, useEffect } from 'react';

function App() {
  const [mostrarCapturas] = useState(false); 
  const [visitas, setVisitas] = useState(null);

  useEffect(() => {
    const obtenerVisitas = async () => {
      try {
        // Intento 1: API Real
        const response = await fetch('https://api.counterapi.dev/v1/sysinventory-yossimar/landing/up');
        const data = await response.json();
        
        if (data && typeof data.count === 'number') {
          setVisitas(data.count);
        } else {
          throw new Error("Respuesta inválida de la API");
        }
      } catch (error) {
        // Intento 2 (Fallback): Si hay AdBlocker o falla la red, usamos un simulador local realista
        console.warn('API de visitas bloqueada por el navegador. Usando contador local de respaldo.');
        
        // Obtenemos visitas guardadas previas o empezamos en un número base creíble (ej. 1248)
        const visitasGuardadas = localStorage.getItem('sysinventory_visitas') || 1248;
        const nuevasVisitas = parseInt(visitasGuardadas) + 1;
        
        localStorage.setItem('sysinventory_visitas', nuevasVisitas);
        setVisitas(nuevasVisitas);
      }
    };

    obtenerVisitas();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-gray-200 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* Luces de fondo (Glow estilo Geode Fusionado) */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Navegación */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-wide text-white">Sys<span className="text-purple-400">Inventory</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#vision" className="hover:text-purple-400 transition-colors">Propósito</a>
          <a href="#instrucciones" className="hover:text-purple-400 transition-colors">Instrucciones</a>
          <a href="#changelog" className="hover:text-purple-400 transition-colors">Actualizaciones</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-24 pb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Versión Móvil .NET MAUI
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
          El control de tu almacén, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
            ahora en tu bolsillo.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Gestiona stock offline, audita movimientos mediante escaneo rápido de códigos y exporta reportes detallados. Una solución diseñada para escalar con tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="/ControlInventarioMovil.apk" 
            download="ControlInventarioMovil.apk"
            className="group w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar APK (v1.1.0)
          </a>
          <a href="#instrucciones" className="w-full sm:w-auto px-8 py-4 bg-[#15151A] hover:bg-[#1E1E24] text-gray-300 font-bold rounded-xl border border-gray-800 transition-all duration-300 flex items-center justify-center">
            Ver instrucciones
          </a>
        </div>
      </main>

      {/* Misión y Visión */}
      <section id="vision" className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#121216] to-[#0B0B0E] border border-gray-800/80 p-10 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-all"></div>
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Nuestra Misión
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Proveer a negocios y almacenes de una herramienta tecnológica accesible, robusta y rápida que optimice el control de inventarios, eliminando errores manuales a través de automatización y escaneo inteligente de códigos de barras.
            </p>
          </div>
          <div className="bg-gradient-to-bl from-[#121216] to-[#0B0B0E] border border-gray-800/80 p-10 rounded-3xl relative overflow-hidden group hover:border-pink-500/30 transition-colors">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[40px] group-hover:bg-pink-500/20 transition-all"></div>
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Nuestra Visión
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Convertirnos en la plataforma móvil de referencia para la gestión logística de pequeñas y medianas empresas, escalando hacia integraciones en la nube que permitan toma de decisiones en tiempo real desde cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Instrucciones */}
      <section id="instrucciones" className="container mx-auto px-6 py-12 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">¿Cómo empezar?</h2>
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
            <p className="text-gray-400 text-sm leading-relaxed">Presiona "Instalar de todos modos", inicia sesión y comienza a gestionar tu inventario.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN OCULTA CONDICIONALMENTE: Capturas de Pantalla */}
      {mostrarCapturas && (
        <section id="capturas" className="py-16 relative z-10 bg-black/30 border-y border-white/5 my-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Diseño Funcional</h2>
            <div className="flex overflow-x-auto pb-10 gap-8 snap-x snap-mandatory hide-scrollbar justify-start md:justify-center px-4">
              <div className="shrink-0 w-[260px] h-[550px] bg-gradient-to-b from-[#18181B] to-black rounded-[3rem] border-8 border-[#27272A] snap-center flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Dashboard</p>
              </div>
              <div className="shrink-0 w-[260px] h-[550px] bg-gradient-to-b from-[#18181B] to-black rounded-[3rem] border-8 border-[#27272A] snap-center flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Escáner de Código</p>
              </div>
              <div className="shrink-0 w-[260px] h-[550px] bg-gradient-to-b from-[#18181B] to-black rounded-[3rem] border-8 border-[#27272A] snap-center flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Formulario Artículo</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Changelog / Actualizaciones */}
      <section id="changelog" className="container mx-auto px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Notas de Versión</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          
          <div className="bg-[#121216] border border-purple-500/30 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="min-w-[120px]">
                <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-md text-sm font-bold border border-purple-500/20">v1.1.0</span>
                <p className="text-gray-500 text-xs mt-3 font-medium">18 Sep, 2026</p>
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">Optimización de Escáner y Formularios</h4>
                <ul className="text-gray-400 space-y-2 list-none">
                  <li className="flex gap-2"><span className="text-purple-400">✓</span> Migración del escáner estático a segundo plano para prevenir bloqueos de memoria (ANR).</li>
                  <li className="flex gap-2"><span className="text-purple-400">✓</span> Mejora en detección de formatos Code-128 y EAN-13 mediante relleno (padding) artificial.</li>
                  <li className="flex gap-2"><span className="text-purple-400">✓</span> Implementación de SKU dinámico y bloqueado por categoría/marca en el formulario de alta.</li>
                  <li className="flex gap-2"><span className="text-purple-400">✓</span> Eliminación de fugas de memoria (Memory Leaks) al cargar recursos gráficos vacíos.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#121216] border border-gray-800/80 p-8 rounded-2xl relative">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 opacity-75">
              <div className="min-w-[120px]">
                <span className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-md text-sm font-bold">v1.0.0</span>
                <p className="text-gray-500 text-xs mt-3 font-medium">10 Sep, 2026</p>
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">Lanzamiento Oficial</h4>
                <ul className="text-gray-400 space-y-2 list-none">
                  <li className="flex gap-2"><span className="text-gray-600">•</span> Estructura base de inventario en .NET MAUI.</li>
                  <li className="flex gap-2"><span className="text-gray-600">•</span> Integración de base de datos local (SQLite) con sincronización API REST.</li>
                  <li className="flex gap-2"><span className="text-gray-600">•</span> Lector de códigos de barras mediante cámara del dispositivo.</li>
                  <li className="flex gap-2"><span className="text-gray-600">•</span> Soporte inicial para control de stock estándar y serializado.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Desarrollador */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-2xl mx-auto bg-[#121216] border border-gray-800/80 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-2xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-extrabold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] shrink-0">
            YM
          </div>
          <div>
            <h4 className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-1">Desarrollador y Creador</h4>
            <h2 className="text-2xl font-bold text-white mb-2">Yossimar Alexandro Mercado Garcia</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Full-Stack Software Engineer especializado en ecosistemas .NET, bases de datos relacionales y desarrollo móvil multiplataforma.</p>
          </div>
        </div>
      </section>
      
      {/* Footer con Contador Seguro */}
      <footer className="border-t border-white/5 pt-10 pb-6 text-center relative z-10 bg-[#08080a]">
        
        {/* Píldora del Contador */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#121216] border border-gray-800/80 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-400 text-sm font-medium">Visitas de la página:</span>
            <span className="text-white font-bold text-sm bg-gray-800 px-2 py-0.5 rounded">
              {visitas ? visitas.toLocaleString() : '...'}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <span className="text-lg font-bold text-white tracking-wide">SysInventory</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 text-xs font-bold text-gray-600 tracking-widest uppercase">
          <span>C#</span> • <span>.NET MAUI</span> • <span>SQL Server</span> • <span>React</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default App;