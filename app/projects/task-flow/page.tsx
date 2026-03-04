import Link from "next/link";
import { ChevronLeft, LayoutDashboard, Map, Rocket, FileText, Bell, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import TechChip from "@/components/ui/TechChip";
import ImageCarousel from "@/components/ui/ImageCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task-Flow · 조민택",
  description: "사내 업무 자동화 Electron 데스크톱 앱",
};

const features = [
  {
    icon: LayoutDashboard,
    title: "칸반 보드",
    description:
      "마일스톤별 태스크를 대기·진행중·PR/리뷰·완료 컬럼으로 관리합니다. 프로젝트·우선순위·담당자·마감일 필터와 마일스톤뷰/프로젝트뷰 전환을 지원하여 팀원들의 작업 현황을 한눈에 파악할 수 있습니다.",
  },
  {
    icon: Map,
    title: "로드맵 (간트차트)",
    description:
      "마일스톤 전체 일정을 간트차트로 시각화합니다. 태스크별 시작·종료일, 진행률, 담당자를 한 화면에서 확인하고 해당 페이지에서 직접 태스크를 생성·수정할 수 있습니다.",
  },
  {
    icon: Rocket,
    title: "릴리즈 대시보드",
    description:
      "팀에 연결된 GitHub 프로젝트의 최신 배포 버전·상태·배포일·배포자를 한 화면에서 확인합니다. GitHub Releases API와 연동하여 별도 접속 없이 릴리즈 현황을 관리합니다.",
  },
  {
    icon: FileText,
    title: "실시간 협업 노트",
    description:
      "Yjs CRDT 기반으로 팀원들이 동시에 같은 문서를 편집할 수 있습니다. 커서 위치와 편집자 이름이 실시간으로 표시되며, 개인 공간·팀 공간·프로젝트별 노트를 계층 구조로 관리합니다.",
  },
  {
    icon: Bell,
    title: "실시간 알림",
    description:
      "태스크 생성·상태 변경, 노트에서 @멘션, 캘린더 일정 리마인더 등 주요 이벤트를 실시간 푸시 알림으로 수신합니다. Electron 네이티브 알림과 앱 내 알림 센터를 함께 제공합니다.",
  },
];

const techStack = ["Electron", "React", "TypeScript", "Yjs", "Node.js", "GitHub Releases API", "SQLite"];

export default function TaskFlowPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" />
            뒤로가기
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge>사내 툴</Badge>
              <Badge variant="outline">Electron 데스크톱 앱</Badge>
              <span className="text-xs text-gray-400">URL 비공개</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Task-Flow</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              칸반 보드·로드맵·릴리즈 관리·실시간 협업 노트·알림을 하나로 묶은 사내 업무 자동화 플랫폼.
            </p>
            <div className="mt-6 p-5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                팀 규모가 커지면서 GitHub Issues, Notion, Slack에 흩어진 업무 정보를 하나로 통합할 필요가 생겼습니다.
                <strong className="text-gray-900"> 기획·설계·개발을 단독으로 담당</strong>하며
                팀원들이 실제로 쓰는 툴을 만드는 경험을 했습니다.
              </p>
              <p>
                단순 태스크 관리를 넘어 GitHub 릴리즈 연동, Yjs 기반 실시간 편집,
                실시간 알림까지 포함한 올인원 개발팀 워크스페이스입니다.
              </p>
            </div>
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">스크린샷</p>
            <ImageCarousel
              images={[
                { src: "/images/taskflow-dashboard.png", alt: "대시보드", caption: "대시보드 — 마감 임박 태스크·마일스톤·캘린더" },
                { src: "/images/taskflow-board.png", alt: "칸반 보드", caption: "칸반 보드 — 마일스톤별 태스크 관리" },
                { src: "/images/taskflow-roadmap.png", alt: "로드맵", caption: "로드맵 — 간트차트 일정 시각화" },
                { src: "/images/taskflow-release.png", alt: "릴리즈 대시보드", caption: "릴리즈 대시보드 — GitHub 배포 버전 현황" },
                { src: "/images/taskflow-note.png", alt: "실시간 협업 노트", caption: "실시간 협업 노트 — Yjs 기반 동시 편집" },
              ]}
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">핵심 기능</p>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-xl border border-gray-200 p-5">
                    <Icon className="w-5 h-5 text-gray-700 mb-3" />
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">기술적 도전</p>
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Electron + Yjs 통합</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Electron의 멀티 프로세스 환경에서 Yjs CRDT 상태를 안정적으로 동기화하는 것이 도전이었습니다.
                  Main 프로세스를 Yjs 서버로 활용하고 IPC 통신으로 Renderer와 동기화하는 방식으로 해결했습니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">실시간 알림 신뢰성</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  앱이 백그라운드이거나 재시작된 경우에도 알림 누락 없이 전달해야 했습니다.
                  이벤트를 SQLite에 큐잉한 뒤 앱 실행 시 미전달 알림을 복구하는 방식으로 신뢰성을 확보했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Learnings */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">배운 것들</p>
            <blockquote className="border-l-4 border-gray-900 pl-5 py-1">
              <p className="text-gray-700 leading-relaxed text-sm">
                &ldquo;팀원들이 매일 쓰는 도구를 직접 만들면서, 사용자 피드백이 제품 방향을 어떻게 바꾸는지
                가장 가까이서 체험했습니다. 기능보다 신뢰성이 먼저라는 것을 실감했습니다.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
