import { ChevronDown, Download, Github, Mail, Phone } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <div className="mb-6">
            <Badge>Frontend Developer · 3년 6개월 경력</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            프로덕트를 설계하고
            <br />
            <span className="text-gray-600">AI를 활용하여 효율적으로</span>
            <br />
            제품을 개발합니다
          </h1>

          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
            React/Next.js를 중심으로 SaaS 서비스를 기획부터 배포·운영까지 경험했습니다.
            AI 개발 도구를 실무에 적극 활용하여 빠르게 제품을 만들어냅니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              프로젝트 보기
              <ChevronDown className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              이력서 다운로드
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/MintaekCho" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="mailto:mintaek5555@gmail.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <Mail className="w-4 h-4" />
              mintaek5555@gmail.com
            </a>
            <a href="tel:010-9446-3591" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <Phone className="w-4 h-4" />
              010-9446-3591
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
