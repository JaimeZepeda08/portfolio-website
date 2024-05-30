import Reveal from "./Reveal";

export default function NavBar() {
  const links = [
    { name: "Home", href: "." },
    { name: "Experience and Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Reveal down={true} width="w-full">
      <nav className="bg-emerald-900/50 text-white p-6 flex justify-between items-center shadow-2xl">
        <Reveal horizontal={true} delay={0.1}>
          <h1 className="text-2xl m-2">Jaime Zepeda Pina</h1>
        </Reveal>
        <ul className="flex">
          {links.map((link, index) => (
            <Reveal delay={0.2 + 0.1 * index} down={true}>
              <li key={index} className="mr-4 last:mr-0">
                <a
                  href={link.href}
                  className="m-4 text-xl hover:text-green-600 transition-colors duration-200 underline-effect"
                >
                  {link.name}
                </a>
              </li>
            </Reveal>
          ))}
          <Reveal delay={0.5} down={true}>
            <li className="mr-4 last:mr-0">
              <a
                href="/Resume.pdf"
                target="_blank"
                className="m-4 text-xl hover:text-green-600 transition-colors duration-200 underline-effect"
              >
                Resume
              </a>
            </li>
          </Reveal>
        </ul>
      </nav>
    </Reveal>
  );
}
