import React from 'react'

export const Footer = () => {
  return (
    <footer className="text-white body-font bg-gray-950 mt-20">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Meharban Ali</span>
          </a>
          <p className="mt-2 text-sm text-gray-400">Passionate Java Full Stack Developer with expertise in Spring Boot, Hibernate, and modern web technologies.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-white">USEFUL LINKS</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#about">About Me</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#projects">Projects</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#contact">Contact</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#blog">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-white">SOCIAL LINKS</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://github.com/meharbanali" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://www.linkedin.com/in/meharbanali/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://twitter.com/meharbanali" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="https://medium.com/@meharbanali" target="_blank" rel="noopener noreferrer">Medium</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-white">TECHNOLOGIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-800">Java</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">Spring Boot</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">Hibernate</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800">React</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-white">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#faq">FAQ</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#terms">Terms</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#privacy">Privacy</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-800" href="#help">Help</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-900 text-sm text-center sm:text-left">© 2025 Meharban Ali — 
            <a href="https://github.com/meharbanali" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">GitHub</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://twitter.com/meharbanali" target="_blank" className="text-gray-900">
             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v22.35C0 23.406.594 24 1.325 24h11.495v-9.294h-3.12v-3.622h3.12v-2.667c0-3.1 1.852-4.768 4.669-4.768 1.354 0 2.513.1 2.85.144v3.24h-1.91c-1.497 0-1.794.711-1.794 1.757v2.303h3.588l-.462 3.622h-3.126v9.294h6.114c.73 0 1.325-.594 1.325-1.325V1.325c0-.73-.594-1.325-1.325-1.325z"></path>
          </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/meharbanali/" target="_blank" className="ml-3 text-gray-900">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12 2.003c-5.525 0-10 4.475-10 10s4.475 10 10 10c1.94 0 3.75-.56 5.25-1.5l4.334 1.31-1.31-4.334A9.95 9.95 0 0022 12c0-5.525-4.475-10-10-10zm-.338 15.522c-3.746 0-6.765-3.017-6.765-6.765 0-3.747 3.019-6.765 6.765-6.765 1.546 0 2.988.497 4.219 1.333.146.111.304.246.472.39.254.228.526.474.832.765 1.036 1.058 1.95 2.476 2.418 3.967-.324-.034-.646-.062-.973-.062-3.01 0-5.493 2.482-5.493 5.493 0 1.426.565 2.682 1.493 3.618-.684-.022-1.34-.226-1.937-.566-.276.28-.632.475-.992.616-.245-.13-.504-.236-.766-.33z"></path>
         </svg>
            </a>
      <a href="https://www.linkedin.com/in/meharbanali/" target="_blank" className="ml-3 text-gray-900">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.472.065-2.751.356-3.779 1.383C2.36 2.32 2.07 3.6 2.005 5.072 1.946 6.352 1.933 6.76 1.933 10.019s.013 3.667.072 4.947c.065 1.472.356 2.751 1.383 3.779.974.974 2.253 1.318 3.779 1.383 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.472-.065 2.751-.356 3.779-1.383.974-.974 1.318-2.253 1.383-3.779.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.065-1.472-.356-2.751-1.383-3.779-.974-.974-2.253-1.318-3.779-1.383C15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.999 3.999 3.999 0 010 7.999zm6.406-11.845a1.44 1.44 0 11-2.881-.001 1.44 1.44 0 012.881 0z"></path>
</svg>

            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
