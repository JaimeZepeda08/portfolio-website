import Reveal from "./Reveal";

export default function NavBar() {
  const links = [
    { name: "Home", href: "." },
    { name: "Experience and Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full z-10 text-white p-6 flex justify-between items-center shadow-2xl"
      style={{
        backgroundColor: "rgb(15, 55, 0)",
      }}
    >
      <h1 className="text-2xl m-2">Jaime Zepeda Pina</h1>
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mr-4 last:mr-0">
            <a
              href={link.href}
              className="m-4 text-xl hover:text-green-600 transition-colors duration-200 underline-effect"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="mr-4 last:mr-0">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="m-4 text-xl hover:text-green-600 transition-colors duration-200 underline-effect cursor-alias"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
