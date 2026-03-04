import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ExternalLink, Sparkles, ClipboardList, ArrowLeftRight, FileText, PenLine, ShieldCheck, CreditCard } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import TechChip from "@/components/ui/TechChip";
import ImageCarousel from "@/components/ui/ImageCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEUM(이음) · 조민택",
  description: "프리랜서·소규모 사업자를 위한 견적·계약·청구 올인원 SaaS",
};

const features = [
  {
    icon: Sparkles,
    title: "AI 견적서 초안 생성",
    description: "프로젝트 내용을 자유롭게 설명하면 AI가 항목·단가·수량을 자동으로 구성합니다. 초안을 바탕으로 빠르게 수정·확정할 수 있어 견적 작성 시간을 크게 줄여줍니다.",
  },
  {
    icon: ClipboardList,
    title: "견적·계약·청구 올인원",
    description: "견적 작성부터 계약서 서명, 청구서 발행까지 단 하나의 플랫폼에서 처리합니다. 이메일·엑셀 없이 클라이언트와 업무를 깔끔하게 연결합니다.",
  },
  {
    icon: ArrowLeftRight,
    title: "클라이언트 역제안",
    description: "클라이언트가 공유 링크로 견적서를 확인한 뒤, 항목별로 수량·단가 조정을 직접 역제안할 수 있습니다. 협상 과정이 문서로 기록되어 이메일 없이도 합의에 도달할 수 있습니다.",
  },
  {
    icon: FileText,
    title: "PDF 출력 및 공유",
    description: "전문적인 디자인의 견적서·계약서·청구서를 원클릭으로 PDF 출력합니다. 토큰 기반 공유 링크로 클라이언트에게 안전하게 전달할 수 있습니다.",
  },
  {
    icon: PenLine,
    title: "전자 서명",
    description: "계약서에 전자 서명을 통합하여 별도 도구 없이 계약을 완결합니다. 서명 이벤트는 타임스탬프·IP와 함께 기록되어 법적 증거 자료로 보존됩니다.",
  },
  {
    icon: ShieldCheck,
    title: "보안 설계",
    description: "Row Level Security(RLS)로 사용자는 자신의 데이터에만 접근 가능합니다. 공유 링크는 서명된 단기 토큰을 사용하여 만료 후 자동 차단됩니다. 민감 정보는 서버 사이드 암호화로 저장합니다.",
  },
  {
    icon: CreditCard,
    title: "구독 결제",
    description: "Polar를 통해 구독 플랜을 관리합니다. 웹훅 이벤트로 플랜 업·다운그레이드, 결제 실패, 해지 상태를 실시간으로 동기화합니다.",
  },
];

const techStack = ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Polar", "Claude API", "Tailwind CSS", "Vercel"];

const challenges = [
  {
    title: "PDF 렌더링 일관성 확보",
    body: "클라이언트에서 직접 PDF를 생성하면서 브라우저·OS별로 폰트·레이아웃이 달라지는 문제가 있었습니다. CSS-in-JS를 제거하고 인라인 스타일만 사용하도록 구조를 바꾸고, 폰트 로딩 완료 이벤트를 감지한 뒤 렌더링을 시작하는 방식으로 안정적인 출력을 구현했습니다.",
  },
  {
    title: "역제안 동시성 처리",
    body: "클라이언트가 역제안을 제출하는 사이 프리랜서가 견적서를 수정할 경우 충돌이 발생할 수 있었습니다. 낙관적 잠금(optimistic lock) 패턴과 버전 컬럼을 활용하여 수정 시 버전 불일치를 감지하고 사용자에게 명확한 안내를 제공했습니다.",
  },
  {
    title: "RLS와 공유 링크 보안",
    body: "Supabase RLS만으로는 비인증 클라이언트의 공유 링크 접근을 제어하기 어려웠습니다. 서버 사이드에서 서명된 단기 JWT 토큰을 발급하고, Next.js API Route에서 토큰을 검증한 뒤 제한된 데이터만 노출하는 방식으로 해결했습니다.",
  },
  {
    title: "Polar 웹훅 멱등성",
    body: "결제 실패·재시도 시 동일 웹훅이 여러 번 도달하는 상황에서 구독 상태가 중복 처리되는 문제를 방지하기 위해, 이벤트 ID를 DB에 기록하고 중복 수신 시 즉시 200 응답 후 처리를 건너뛰는 멱등 처리 로직을 적용했습니다.",
  },
];

export default function IeumPage() {
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
              <Badge variant="success">SaaS · 운영 중</Badge>
              <a
                href="https://singium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
              >
                singium.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              IEUM <span className="text-gray-400 font-normal text-2xl">(이음)</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mt-3">
              나와 클라이언트를 잇다. 프리랜서·소규모 사업자를 위한 견적·계약·청구 올인원 솔루션.
            </p>
            <div className="mt-6 p-5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                프리랜서로 일하면서 견적서는 엑셀, 계약서는 이메일, 청구서는 또 다른 도구로 관리하는
                비효율을 직접 겪은 것이 시작이었습니다. <strong className="text-gray-900">기획·디자인·개발·배포·운영을 혼자 담당</strong>하며
                실제 사용자 피드백을 제품에 반영하는 전 과정을 경험했습니다.
              </p>
              <p>
                단순 문서 생성 도구를 넘어, 클라이언트가 견적서를 받고 <strong className="text-gray-900">항목별로 역제안</strong>하는 기능을 통해
                협상 과정 전체를 플랫폼 안에서 완결할 수 있도록 설계했습니다.
                현재 Pro 플랜 유료 구독자를 보유하며 운영 중입니다.
              </p>
            </div>
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">스크린샷</p>
            <ImageCarousel
              images={[
                { src: "/images/ieum-thumbnail.png", alt: "IEUM 랜딩 페이지", caption: "랜딩 페이지" },
                { src: "/images/ieum-estimate-editor.png", alt: "견적서 작성 화면", caption: "견적서 작성 화면 — 실시간 PDF 미리보기" },
                { src: "/images/ieum-estimate-pdf.png", alt: "견적서 PDF 출력", caption: "견적서 PDF 출력" },
                { src: "/images/ieum-ai-prompt.png", alt: "AI 견적서 초안 생성 — 프롬프트 입력", caption: "AI 견적서 초안 생성 — 프로젝트 내용 입력" },
                { src: "/images/ieum-ai-result.png", alt: "AI 견적서 초안 생성 — 결과", caption: "AI 견적서 초안 생성 — 항목 자동 구성 결과" },
              ]}
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (<TechChip key={tech} label={tech} />))}
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
            <div className="rounded-xl bg-gray-900 text-white p-6 space-y-5">
              {challenges.map((c, i) => (
                <div key={i} className={i !== 0 ? "pt-5 border-t border-gray-700" : ""}>
                  <h3 className="text-sm font-semibold mb-1.5">{c.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">배운 것들</p>
            <blockquote className="border-l-4 border-gray-900 pl-5 py-1">
              <p className="text-gray-700 leading-relaxed text-sm">
                &ldquo;혼자서 기획, 디자인, 개발, 배포, 운영, 고객 응대까지 모든 것을 경험하면서
                개발자가 제품을 &apos;만드는&apos; 것과 &apos;운영하는&apos; 것이 얼마나 다른지 체감했습니다.
                보안은 완성 후 추가하는 것이 아니라 설계 단계부터 고려해야 한다는 것도
                실제 사용자 데이터를 다루면서 몸으로 배웠습니다.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
