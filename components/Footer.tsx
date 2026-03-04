import { Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2026 조민택. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="https://github.com/MintaekCho" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="mailto:mintaek5555@gmail.com" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <Mail className="w-4 h-4" />
            mintaek5555@gmail.com
          </a>
          <a href="tel:010-9446-3591" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <Phone className="w-4 h-4" />
            010-9446-3591
          </a>
        </div>
      </div>
    </footer>
  );
}
