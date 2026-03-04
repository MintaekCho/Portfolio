import Badge from "@/components/ui/Badge";

const careers = [
  {
    company: "키키아이",
    role: "Frontend Developer",
    period: "2024.08 ~ 현재",
    current: true,
    description:
      "AI 기반 서비스 개발 및 운영. 사내 업무 자동화 도구(Task-Flow) 설계 및 구현. Electron 기반 데스크톱 앱 개발.",
    highlights: ["Task-Flow 개발", "Electron 앱 개발", "사내 툴 설계"],
  },
  {
    company: "가온플랫폼",
    role: "Frontend Developer",
    period: "2023.09 ~ 2024.07",
    current: false,
    description:
      "B2B SaaS 플랫폼 프론트엔드 개발. React 기반 관리자 대시보드 구축 및 성능 최적화.",
    highlights: ["React 대시보드", "성능 최적화", "B2B SaaS"],
  },
  {
    company: "한화정밀기계",
    role: "기술팀 · 사원",
    period: "2021.06 ~ 2022.04",
    current: false,
    description:
      "반도체 후공정 패키징 장비(플립칩본더 SFM-3-FA) 트러블슈팅 및 캘리브레이션. 조립 작업지도서 작성, 설계 변경 관리, 자재 수급 관리 담당. 반도체 장비의 동작 원리와 정밀 공정 프로세스에 대한 도메인 이해를 보유.",
    highlights: ["반도체 장비 트러블슈팅", "플립칩본더 SFM-3-FA", "공정 캘리브레이션", "자재관리"],
    note: "개발직으로 전환하여 퇴사",
  },
];

export default function Career() {
  return (
    <section id="career" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-3xl font-bold text-gray-900">경력</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {careers.map((career, index) => (
              <div key={index} className="relative md:pl-12">
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-gray-300 bg-white hidden md:block" />

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{career.company}</h3>
                        {career.current && <Badge variant="success">재직 중</Badge>}
                      </div>
                      <p className="text-sm text-gray-600">{career.role}</p>
                    </div>
                    <span className="text-xs text-gray-400 font-medium shrink-0">{career.period}</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{career.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {career.highlights.map((item) => (
                      <span key={item} className="px-2.5 py-1 text-xs text-gray-600 bg-gray-100 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>

                  {"note" in career && career.note && (
                    <p className="mt-3 text-xs text-gray-400">{career.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
