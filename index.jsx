import React, { useState } from 'react';

// Componente para la página de detalles del proyecto
function ProjectDetailPage({ project, onBack }) {
  return (
    <div className="min-h-screen bg-[#f1dcdc] font-calibri text-gray-900 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <button
          onClick={onBack}
          className="mb-8 px-6 py-2 bg-[#c27f63] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
        >
          &larr; Volver al Portafolio
        </button>

        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">{project.title}</h2>
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          {project.role}
        </p>
        <p className="text-lg text-justify max-w-3xl mx-auto mb-10">
          {project.summary}
        </p>

        {/* Display skills for the project detail page */}
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 font-semibold rounded-full shadow-md text-sm ${
                  skill.type === 'soft' ? 'bg-[#c27f63] text-white' : 'bg-[#f1dcdc] text-[#c27f63]'
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}

        {/* Detalles del Proyecto */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mb-10">
          <div className="text-gray-700 text-base space-y-4">
            <div>
              <p className="font-semibold text-base mb-1">
                Modelado BIM:
              </p>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Diseño y desarrollo del proyecto.</li>
                <li>Creación y desarrollo de modelos 3D. Generar geometría arquitectónica en REVIT 2025.</li>
                <li>Gestión de familias y bibliotecas. Configurar y parametrizar familias estándar y específicas.</li>
                <li>Coordinación básica de proyecto. Insertar y vincular modelos de otras disciplinas (IFC / RVT).</li>
                <li>Documentación y planos. Generar vistas, secciones y alzados a partir del modelo 3D. Crear y actualizar tablas de planificación.</li>
                <li>Control de calidad del proyecto. Verificar la correcta aplicación de estándares. Revisar parámetros clave y corregir inconsistencias.</li>
                <li>Comunicación con el equipo. Reportar avances, dudas o problemas técnicos al equipo. Participar en reuniones de seguimiento y coordinación multidisciplinar.</li>
                <li>Seguimiento del presupuesto. Herramientas vinculadas de TCQ y IFC.</li>
                <li>Visualización del proyecto. Twinmotion.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-base mb-1">
                BIM Manager:
              </p>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Definición de estándares y metodología BIM. Elaboración y mantenimiento del BIM Execution Plan (BEP) y las guías internas de modelado y documentación. Adaptación de los ISO 19650 a la operativa del equipo.</li>
                <li>Gestión de entregables y entornos colaborativos: Configuración y supervisión do Common Data Environment (CDE) (Catenda Hub y BIM Collab…). Aseguramiento de que todos os arquivos (IFC, RVT, BCF…) estejam corretamente versionados e enlazados.</li>
                <li>Coordinación y control de calidad de modelos: Realización de detección de colisiones (clash detection) en BIM Collab. Revisión y validación de niveles de detalle (LOD) y limpieza de modelos antes de cada hito.</li>
                <li>Comunicación con el cliente y equipos interdisciplinarios: Interlocutor BIM frente al representante BIM do cliente. Facilitación do diálogo permanente entre arquitectura, ingeniería, instalaciones e construtores.</li>
                <li>Automatización y mejora continua: Diseño y mantenimiento de scripts (Dynamo, Python) para agilizar tareas repetitivas. Propuesta e implementación de novas tecnologias com Inteligencia Artificial.</li>
                <li>Seguimiento de proyecto y reporting: Generación de informes periódicos de avance BIM, cumplimiento de estándares y riesgos detectados.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Galería de Imágenes del Proyecto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {project.images.map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover rounded-md mb-3" />
              <p className="text-gray-700 text-sm text-center">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Main App component
function App() {
  // State to control which view is active: 'home' or 'projectDetail'
  const [currentView, setCurrentView] = useState('home');
  // State to hold the data of the currently selected project for the detail page
  const [selectedProject, setSelectedProject] = useState(null);

  // Define BIM Projects data here
  const bimProjectsData = [
    {
      id: 'universitario-22a',
      title: 'Proyecto Universitario y tres edificios de oficinas en el 22@',
      role: 'Modelador BIM, BIM Manager & BIM Coordinadora',
      summary: 'Proyecto de equipamiento universitario, tres edificios de oficinas en el 22@. Equipo multidisciplinar de 10 personas.',
      images: [
        { src: 'https://placehold.co/600x400/9b5c46/ffffff?text=Imagen+Proyecto+1.1', alt: 'Vista del modelo BIM principal del proyecto universitario.' },
        { src: 'https://placehold.co/600x400/9b5c46/ffffff?text=Imagen+Proyecto+1.2', alt: 'Detalle de coordinación entre disciplinas en el proyecto.' },
        { src: 'https://placehold.co/600x400/9b5c46/ffffff?text=Imagen+Proyecto+1.3', alt: 'Render o visualización del edificio de oficinas.' },
        { src: 'https://placehold.co/600x400/9b5c46/ffffff?text=Imagen+Proyecto+1.4', alt: 'Ejemplo de tabla de planificación generada en Revit.' },
      ],
      cardImage: 'https://placehold.co/600x400/9b5c46/ffffff?text=Proyecto+Universitario',
      skills: [
        { name: 'Coordinación de Equipos', type: 'soft' },
        { name: 'Optimización de procesos', type: 'soft' },
        { name: 'Liderazgo', type: 'soft' },
        { name: 'Visión estratégica', type: 'soft' },
        { name: 'Organización', type: 'soft' },
        { name: 'Proactividad', type: 'soft' },
        { name: 'Creatividad', type: 'soft' },
        { name: 'Trabajo en equipo multidisciplinar', type: 'soft' },
        { name: 'Comunicación efectiva', type: 'soft' },
        { name: 'Aprendizaje', type: 'soft' },
        { name: 'Investigación', type: 'soft' },
        { name: 'Innovación', type: 'soft' },
        { name: 'Gestión BIM', type: 'technical' },
        { name: 'Revit 2025', type: 'technical' },
        { name: 'Twinmotion', type: 'technical' },
        { name: 'TCQ', type: 'technical' },
        { name: 'Dynamo', type: 'technical' }
      ]
    }
  ];

  const archProjectsData = [
    {
      id: 'oficinas-corporativas',
      title: 'Diseño y Ejecución de Oficinas Corporativas',
      role: 'Arquitecta Principal',
      summary: 'Diseño integral y desarrollo de proyectos ejecutivos para espacios corporativos. Enfocado en la funcionalidad, la estética y la optimización del espacio. Utilicé AutoCAD y Photoshop para la documentación y visualización.',
      imageUrl: 'https://placehold.co/1200x800/c27f63/ffffff?text=Oficinas+Corporativas+Grande', // Link for the image
      skills: [
        { name: 'Liderazgo', type: 'soft' },
        { name: 'Visión estratégica', type: 'soft' },
        { name: 'Organización', type: 'soft' },
        { name: 'Proactividad', type: 'soft' },
        { name: 'Creatividad', type: 'soft' },
        { name: 'Trabajo en equipo multidisciplinar', type: 'soft' },
        { name: 'Comunicación efectiva', type: 'soft' },
        { name: 'AutoCAD', type: 'technical' },
        { name: 'Photoshop', type: 'technical' }
      ]
    },
    {
      id: 'rehabilitacion-historica',
      title: 'Rehabilitación de Edificio Histórico',
      role: 'Arquitecta de Rehabilitación',
      summary: 'Intervención y rehabilitación de un edificio público con valor patrimonial. Se priorizó la conservación y la adaptación a nuevos usos, aplicando un profundo conocimiento de la normativa vigente.',
      imageUrl: 'https://placehold.co/1200x800/c27f63/ffffff?text=Edificio+Publico+Rehabilitacion+Grande', // Link for the image
      skills: [
        { name: 'Liderazgo', type: 'soft' },
        { name: 'Visión estratégica', type: 'soft' },
        { name: 'Organización', type: 'soft' },
        { name: 'Proactividad', type: 'soft' },
        { name: 'Creatividad', type: 'soft' },
        { name: 'Trabajo en equipo multidisciplinar', type: 'soft' },
        { name: 'Comunicación efectiva', type: 'soft' },
        { name: 'AutoCAD', type: 'technical' },
        { name: 'Photoshop', type: 'technical' }
      ]
    }
  ];

  const automotiveProjectsData = [
    {
      id: 'zanini-llantas',
      title: 'Zanini – Diseño y modelado de superfícies clase A de llantas',
      role: 'Project Manager y Modelador 3D Principal',
      summary: 'Modelado superficies de alta calidad para llantas para diferentes empresas, asegurando precisión, estética y parámetros técnicos según los estándares de la industria. Comunicación directa con el cliente y gestión del equipo.',
      imageUrl: 'https://placehold.co/1200x800/63c27f/ffffff?text=Zanini+Llantas',
      images: [ // Specific images for the Zanini project detail page
        { src: 'https://placehold.co/600x400/63c27f/ffffff?text=Zanini+Detalle+1', alt: 'Detalle de la superficie de la llanta Zanini.' },
        { src: 'https://placehold.co/600x400/63c27f/ffffff?text=Zanini+Detalle+2', alt: 'Vista frontal de la llanta Zanini.' },
        { src: 'https://placehold.co/600x400/63c27f/ffffff?text=Zanini+Detalle+3', alt: 'Diseño CAD de la llanta Zanini.' },
      ],
      skills: [
        { name: 'Comunicación efectiva', type: 'soft' },
        { name: 'Precisión', type: 'soft' },
        { name: 'Control de Calidad', type: 'soft' },
        { name: 'Liderazgo', type: 'soft' },
        { name: 'Icem Surf', type: 'technical' },
        { name: 'Modelado 3D', type: 'technical' }
      ]
    },
    {
      id: 'qoros-lanzamiento',
      title: 'QOROS – Lanzamiento de los tres primeros modelos de la marca en Munich, Alemania',
      role: 'Modelador 3D y Product Owner',
      summary: 'Modelado superficies de alta calidad tanto de interior como exterior, asegurando precisión, y coordinación técnica y estética siguiendo los estándares más estrictos para conseguir lanzar los tres modelos al mercado. Qoros 3, Qoros 3 sedan y Qoros 3 Hatch. Diseñador: Gert Hilderbrand.',
      imageUrl: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-10.jpg?class=OG',
      images: [
        { src: 'https://www.diariomotor.com/imagenes/2013/02/posts/gama-qoros-ginebra-p2.jpg', alt: 'Vista lateral del Qoros 3' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/posts/gama-qoros-ginebra-p3.jpg', alt: 'Interior del Qoros 3' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/posts/gama-qoros-ginebra-p4.jpg', alt: 'Detalle frontal del Qoros 3 Hatch' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-2.jpg?class=OG', alt: 'Qoros 3 Sedan en exposición' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-3.jpg?class=OG', alt: 'Qoros 3 Hatch en exposición' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-4.jpg?class=OG', alt: 'Vista trasera del Qoros 3 Sedan' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-5.jpg?class=OG', alt: 'Vista frontal Qoros 3 Sedan' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-6.jpg?class=OG', alt: 'Qoros 3 en movimiento' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-7.jpg?class=OG', alt: 'Detalle de la parrilla del Qoros 3' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-8.jpg?class=OG', alt: 'Vista de la cabina del Qoros 3' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-9.jpg?class=OG', alt: 'Qoros 3 en entorno urbano' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-12.jpg?class=OG', alt: 'Vista trasera del Qoros 3 Hatch' },
        { src: 'https://www.diariomotor.com/imagenes/2013/02/gama-qoros-ginebra-23.jpg?class=OG', alt: 'Vista lateral del Qoros 3 Hatch' },
      ],
      skills: [
        { name: 'Modelado 3D', type: 'technical' },
        { name: 'Precisión', type: 'soft' },
        { name: 'Coordinación Técnica', type: 'soft' },
        { name: 'Estética', type: 'soft' },
        { name: 'Gestión de Proyectos', type: 'soft' },
        { name: 'Conocimiento de Estándares de la Industria', type: 'technical' }
      ]
    },
    {
      id: 'automotive-design-coordination',
      title: 'Coordinación de Equipos de Diseño en Proyecto de Componentes Automotrices',
      role: 'Coordinador de Diseño',
      summary: 'Gestión y coordinación de equipos multidisciplinares (diseñadores, ingenieros, modeladores) para el desarrollo integrado de nuevos componentes automotrices, desde el concepto hasta la producción.',
      imageUrl: 'https://placehold.co/1200x800/7f63c2/ffffff?text=Automocion+Coordinacion',
      skills: [
        { name: 'Liderazgo', type: 'soft' },
        { name: 'Trabajo en Equipo', type: 'soft' },
        { name: 'Gestión de Proyectos', type: 'soft' },
        { name: 'Comunicación', type: 'soft' },
        { name: 'Software de CAD', type: 'technical' }
      ]
    },
    {
      id: 'automotive-modeling-optimization',
      title: 'Optimización de Procesos de Modelado Digital en Automoción',
      role: 'Especialista en Optimización',
      summary: 'Análisis e implementación de metodologías y herramientas para mejorar la eficiencia y reducir los tiempos en los procesos de modelado digital, impactando directamente en la productividad del equipo.',
      imageUrl: 'https://placehold.co/1200x800/c2637f/ffffff?text=Automocion+Optimizacion',
      skills: [
        { name: 'Optimización', type: 'soft' },
        { name: 'Pensamiento Analítico', type: 'soft' },
        { name: 'Lean Manufacturing', type: 'technical' },
        { name: 'Python', type: 'technical' }
      ]
    },
    {
      id: 'automotive-technical-consulting',
      title: 'Consultoría Técnica para Integración de Superficies Automotrices',
      role: 'Consultor Técnico',
      summary: 'Asesoramiento experto en la integración de superficies complejas y ensamblajes en el desarrollo de vehículos, resolviendo desafíos técnicos y garantizando la compatibilidad entre diferentes sistemas.',
      imageUrl: 'https://placehold.co/1200x800/637fc2/ffffff?text=Automocion+Consultoria',
      skills: [
        { name: 'Resolución de Problemas', type: 'soft' },
        { name: 'Asesoramiento Técnico', type: 'soft' },
        { name: 'Integración de Sistemas', type: 'technical' },
        { name: 'Experiencia del Cliente', type: 'soft' }
      ]
    }
  ];

  // Function to handle clicking on a BIM project card
  const handleBimProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('projectDetail');
  };

  // Conditional rendering based on currentView state
  if (currentView === 'projectDetail' && selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={() => setCurrentView('home')} />;
  }

  // Render the main portfolio if not on a project detail page
  return (
    <div className="min-h-screen bg-[#f1dcdc] font-calibri text-gray-900">
      {/* Custom font definition (if not loaded via @import or build process) */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Calibri:wght@400;700&display=swap');
        .font-calibri {
          font-family: 'Calibri', sans-serif;
        }
        `}
      </style>

      {/* Header / Navigation */}
      <header className="py-6 px-4 md:px-8 shadow-md bg-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#c27f63]">Laura Pujades</h1>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li><a href="#about" className="hover:text-[#c27f63] transition-colors duration-300">Sobre Mí</a></li>
            <li><a href="#bim-projects" className="hover:text-[#c27f63] transition-colors duration-300">Proyectos BIM</a></li>
            <li><a href="#arch-projects" className="hover:text-[#c27f63] transition-colors duration-300">Arquitectura</a></li>
            <li><a href="#automotive-exp" className="hover:text-[#c27f63] transition-colors duration-300">Automoción</a></li>
            <li><a href="#skills" className="hover:text-[#c27f63] transition-colors duration-300">Habilidades</a></li>
            <li><a href="#contact" className="hover:text-[#c27f63] transition-colors duration-300">Contacto</a></li>
          </ul>
          {/* Mobile menu button (can be implemented with state for actual functionality) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#c27f63] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center rounded-b-lg shadow-lg"
               style={{backgroundImage: "url('https://placehold.co/1920x1080/c27f63/ffffff?text=Tu+Imagen+Destacada')"}}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-b-lg"></div>
        <div className="relative z-10 p-8 rounded-lg">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Laura Pujades
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-white">
            <span className="text-[#f1dcdc]">Arquitecta Superior | BIM Manager:</span> <br />Impulsando la excelencia digital y la colaboración en proyectos globales.
          </p>
          <a href="#bim-projects" className="mt-8 inline-block px-8 py-3 bg-[#c27f63] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-justify">
              Soy una <strong>Arquitecta y Project Manager</strong> con una sólida trayectoria en la gestión de proyectos digitales, atención al cliente y transformación tecnológica en sectores como la arquitectura y la automoción. A lo largo de mi carrera he liderado proyectos internacionales y multidisciplinares, integrando soluciones digitales centradas en el usuario y optimizando procesos mediante metodologías ágiles.
            </p>
            <p className="mb-4 text-justify">
              Cuento con más de 15 años de experiencia combinando habilidades técnicas (modelado 3D, entornos BIM), capacidades comunicativas en varios idiomas (catalán, español, inglés y alemán) y una fuerte orientación a la resolución de problemas. He trabajado estrechamente con clientes y equipos multidisciplinares para ofrecer soluciones efectivas en contextos complejos, garantizando tanto la satisfacción del cliente como la calidad de entrega.
            </p>
            <p className="text-justify">
              Actualmente estoy cursando un Máster en BIM Management en la UPC y estoy desarrollando mi enfoque de investigación e innovación en la implantación de Inteligencia Artificial personalizada. Mi objetivo es seguir aportando valor en entornos donde la tecnología, la experiencia de usuario y la excelencia operativa convergen.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Professional photo from LinkedIn */}
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQH1lDyv4uv1gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710197725591?e=1755129600&v=beta&t=fD8lrMuOVouqsu2D11qYttepwj8mxXiRgXzs_F-PEC4" alt="Laura Pujades Profile" className="rounded-full shadow-lg border-4 border-white object-cover w-64 h-64 md:w-80 md:h-80" />
          </div>
        </div>
      </section>

      {/* Projects - BIM & Coordination */}
      <section id="bim-projects" className="bg-white py-16 px-4 md:px-8 rounded-t-lg shadow-inner">
        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">Proyectos BIM & Coordinación</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Aquí presento mi experiencia liderando la implementación BIM, coordinando equipos multidisciplinares y optimizando procesos en proyectos de diversa complejidad.
        </p>

        <div className="flex justify-center items-center"> {/* Centering the single project */}
          {/* Project 1 - Made clickable */}
          <div
            className="bg-[#f1dcdc] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 max-w-2xl w-full cursor-pointer"
            onClick={() => handleBimProjectClick(bimProjectsData[0])} // Pass the first BIM project data
          >
            <img src={bimProjectsData[0].cardImage} alt={bimProjectsData[0].title} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{bimProjectsData[0].title}</h3>
            <p className="text-gray-700 text-sm mb-3">
              {bimProjectsData[0].role}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {bimProjectsData[0].summary}
            </p>
            {bimProjectsData[0].skills && bimProjectsData[0].skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {bimProjectsData[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 font-semibold rounded-full text-xs shadow-sm ${
                      skill.type === 'soft' ? 'bg-[#c27f63] text-white' : 'bg-white text-[#c27f63]'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects - Architecture / Design */}
      <section id="arch-projects" className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">Proyectos de Arquitectura / Diseño</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Mi trayectoria como arquitecta, destacando la creatividad en el diseño y la capacidad de resolver desafíos complejos en diversas tipologías.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Architecture Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Added link to image */}
            <a href={archProjectsData[0].imageUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://placehold.co/600x400/c27f63/ffffff?text=Oficinas+Corporativas" alt="Oficinas Corporativas" className="rounded-md mb-4 w-full h-48 object-cover" />
            </a>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{archProjectsData[0].title}</h3>
            <p className="text-gray-700 text-sm mb-3">
              **Rol:** {archProjectsData[0].role}
            </p>
            <p className="text-gray-700 text-base">
              {archProjectsData[0].summary}
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-3">
              <li>Gestión de permisos y cumplimiento normativo.</li>
              <li>Coordinación de contratistas y equipos técnicos.</li>
            </ul>
            {archProjectsData[0].skills && archProjectsData[0].skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {archProjectsData[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 font-semibold rounded-full text-xs shadow-sm ${
                      skill.type === 'soft' ? 'bg-[#c27f63] text-white' : 'bg-[#f1dcdc] text-[#c27f63]'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Architecture Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Added link to image */}
            <a href={archProjectsData[1].imageUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://placehold.co/600x400/c27f63/ffffff?text=Edificio+Publico+Rehabilitacion" alt="Edificio Publico Rehabilitacion" className="rounded-md mb-4 w-full h-48 object-cover" />
            </a>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{archProjectsData[1].title}</h3>
            <p className="text-gray-700 text-sm mb-3">
              **Rol:** {archProjectsData[1].role}
            </p>
            <p className="text-gray-700 text-base">
              {archProjectsData[1].summary}
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-3">
              <li>Dominio de las fases de redacción del proyecto.</li>
              <li>Colaboración con equipos especializados en patrimonio.</li>
            </ul>
            {archProjectsData[1].skills && archProjectsData[1].skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {archProjectsData[1].skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 font-semibold rounded-full text-xs shadow-sm ${
                      skill.type === 'soft' ? 'bg-[#c27f63] text-white' : 'bg-[#f1dcdc] text-[#c27f63]'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects - Automotive */}
      <section id="automotive-exp" className="bg-white py-16 px-4 md:px-8 rounded-b-lg shadow-inner">
        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">Proyectos de Automoción</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {automotiveProjectsData.map((project) => (
            <div key={project.id} className="bg-[#f1dcdc] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <a href={project.imageUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
              </a>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-gray-700 text-sm mb-3">
                **Rol:** {project.role}
              </p>
              <p className="text-gray-700 text-base mb-4">
                {project.summary}
              </p>
              {project.skills && project.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 font-semibold rounded-full text-xs shadow-sm ${
                        skill.type === 'soft' ? 'bg-[#c27f63] text-white' : 'bg-white text-[#c27f63]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills & Certifications */}
      <section id="soft-skills" className="bg-white py-16 px-4 md:px-8 rounded-b-lg shadow-inner">
        <h2 className="text-4xl font-bold text-[#c27f63] text-center mb-10">Habilidades Blandas & Certificaciones</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Trabajo en Equipo & Liderazgo</h3>
            <p className="text-gray-700">
              Amplia experiencia en la gestión de equipos multidisciplinares y multiculturales, promoviendo el diálogo y la colaboración para alcanzar objetivos comunes.
            </p>
          </div>
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Comunicación Efectiva</h3>
            <p className="text-gray-700">
              Habilidad demostrada en la negoción, presentación de propuestas y el trato fluido con clientes y colaboradores, asegurando una interlocución continua.
            </p>
          </div>
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Creatividad & Proactividad</h3>
            <p className="text-gray-700">
              Enfoque creativo en la resolución de problemas, organizado e independiente, siempre buscando nuevas formas de innovar y mejorar procesos.
            </p>
          </div>
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Inquietud por Aprender</h3>
            <p className="text-gray-700">
              Constante formación en BIM Management (Máster UPC) e Inteligencia Artificial aplicada a la Construcción, reflejando un espíritu de investigación y adaptación.
            </p>
          </div>
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Idiomas</h3>
            {/* Updated 'Idiomas' to a bulleted list */}
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Español (Nativo)</li>
              <li>Catalán (Nativo)</li>
              <li>Alemán (C1)</li>
              <li>Inglés (B2)</li>
              <li>Facilidad para trabajar en entornos internacionales.</li>
            </ul>
          </div>
          <div className="bg-[#f1dcdc] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Herramientas Digitales</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Revit (Modelado BIM)</li>
              <li>AutoCAD (Diseño 2D)</li>
              <li>Twinmotion (Visualización)</li>
              <li>BIM Collab (Coordinación BIM)</li>
              <li>Catenda Hub (CDE)</li>
              <li>ICEM Surf (Modelado 3D Automoción)</li>
              <li>Photoshop (Edición de imagen)</li>
              <li>Dynamo, Python (Automatización y Scripting)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Interests (Optional) */}
      <section id="interests" className="container mx-auto py-16 px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#c27f63] mb-8">Otros Intereses</h2>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Música</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Título profesional del Conservatorio del Liceo (Piano y Clarinete). He ganado varios concursos de piano "Jugend Musiziert" en España, Portugal y Alemania. Esta disciplina y pasión por la música se traducen en mi enfoque detallista y creativo en la arquitectura.
          </p>
          <img src="https://placehold.co/300x200/c27f63/ffffff?text=Música" alt="Música relacionada con el piano" className="rounded-md shadow-sm mx-auto" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#c27f63] py-16 px-4 md:px-8 text-white text-center rounded-t-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8">Contacto</h2>
        <p className="text-xl mb-4">
          Si mi perfil se alinea con lo que buscas, ¡me encantaría conocerte!
        </p>
        <p className="text-lg mb-2">
          <strong className="text-white">Email:</strong> <a href="mailto:laura.pujades.pm@gmail.com" className="underline hover:text-[#f1dcdc] transition-colors duration-300">laura.pujades.pm@gmail.com</a>
        </p>
        <p className="text-lg mb-2">
          <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/laurapujades" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f1dcdc] transition-colors duration-300">Tu Perfil de LinkedIn</a>
        </p>
        <p className="text-lg mb-2">
          <strong className="text-white">Teléfono:</strong> +34 XXX XXX XXX (Placeholder: tu número real aquí)
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        <p>&copy; 2025 Laura Pujades. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
