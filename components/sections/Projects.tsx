import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "IEUM (이음)",
    description:
      "프리랜서·소규모 사업자를 위한 견적·계약·청구 올인원 SaaS. 클라이언트가 견적서를 받고 항목별로 역제안할 수 있는 협상 기능과 RLS·서명 토큰 기반 보안 설계가 특징입니다. 현재 유료 구독자 보유 중.",
    techStack: ["Next.js 16", "TypeScript", "Supabase", "Polar", "Tailwind CSS"],
    href: "/projects/ieum",
    externalUrl: "https://singium.com",
    status: "SaaS · 운영 중",
    statusVariant: "success" as const,
    thumbnail: "/images/ieum-thumbnail.png",
  },
  {
    title: "Task-Flow",
    description:
      "GitHub Actions 파이프라인 모니터링, 칸반 보드, Yjs 기반 실시간 공동 편집을 결합한 사내 업무 자동화 도구. AI 에이전트 오케스트레이션으로 반복 작업을 자동화합니다.",
    techStack: ["Electron", "React", "Yjs", "Node.js", "GitHub Actions API"],
    href: "/projects/task-flow",
    status: "사내 툴",
    statusVariant: "default" as const,
    thumbnail: "/images/taskflow-dashboard.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl font-bold text-gray-900">주요 프로젝트</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
