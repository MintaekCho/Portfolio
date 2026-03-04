import TechChip from "@/components/ui/TechChip";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    category: "Backend · DB",
    items: ["Node.js", "Supabase", "PostgreSQL", "Prisma", "REST API"],
  },
  {
    category: "AI · Tools",
    items: ["Claude API", "OpenAI API", "LangChain", "Cursor", "GitHub Copilot"],
  },
  {
    category: "DevOps",
    items: ["Vercel", "GitHub Actions", "Docker", "AWS S3"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">About</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">소개</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                프론트엔드 개발자로서 단순히 UI를 구현하는 것을 넘어, 제품 기획부터
                배포·운영까지 전체 사이클을 경험했습니다.
              </p>
              <p>
                IEUM(이음)을 직접 기획·운영하며 고객 피드백을 제품에 반영하는 과정을
                겪으면서, 비즈니스 관점에서 개발을 바라보는 시각을 키웠습니다.
              </p>
              <p>
                AI 개발 도구를 적극 활용하여 혼자서도 빠르게 제품을 설계하고
                구현할 수 있습니다. 새로운 기술을 빠르게 습득하고 실무에 적용하는 것을
                즐깁니다.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 md:mt-8">Skills</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:hidden">기술 스택</h2>
            <div className="space-y-5 mt-[2px] md:mt-[34px]">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold text-gray-400 mb-2">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechChip key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
