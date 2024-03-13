export default function NavBar() {
  const links = [
    { name: "Home", href: "." },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-emerald-900/50 text-white p-6 flex justify-between items-center shadow-2xl">
      <h1 className="text-3xl m-2 font-bold">Jaime Zepeda Pina</h1>
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mr-4 last:mr-0">
            <a
              href={link.href}
              className="p-4 text-2xl hover:text-green-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="mr-4 last:mr-0">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="p-4 text-2xl hover:text-green-500 transition-colors duration-200"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
