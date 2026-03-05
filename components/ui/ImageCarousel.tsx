"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

function useCarousel(length: number) {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number, dir: "left" | "right") => {
    if (animating || next === current) return;
    setLeaving(current);
    setDirection(dir);
    setAnimating(true);
    setCurrent(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setLeaving(null);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  const prev = useCallback(() => go((current - 1 + length) % length, "left"), [go, current, length]);
  const next = useCallback(() => go((current + 1) % length, "right"), [go, current, length]);
  const goTo = useCallback((i: number) => go(i, i > current ? "right" : "left"), [go, current]);

  return { current, leaving, animating, direction, prev, next, goTo };
}

// 각 이미지 슬롯의 CSS 상태 계산
function getImageStyle(
  i: number,
  current: number,
  leaving: number | null,
  direction: "left" | "right",
  animating: boolean,
): React.CSSProperties {
  const isCurrent = i === current;
  const isLeaving = i === leaving;

  if (isCurrent) {
    return {
      opacity: 1,
      transform: "translateX(0)",
      transition: animating ? "opacity 280ms ease-out, transform 280ms ease-out" : "none",
      zIndex: 2,
      pointerEvents: "auto",
    };
  }
  if (isLeaving) {
    return {
      opacity: 0,
      transform: direction === "right" ? "translateX(-16px)" : "translateX(16px)",
      transition: "opacity 280ms ease-out, transform 280ms ease-out",
      zIndex: 1,
      pointerEvents: "none",
    };
  }
  // 나머지: 미리 로드만 해두고 완전히 숨김
  return {
    opacity: 0,
    transform: "translateX(0)",
    transition: "none",
    zIndex: 0,
    pointerEvents: "none",
  };
}

function NavButton({ onClick, label, children }: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="group/btn w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-200
        flex items-center justify-center
        hover:bg-gray-900 hover:border-gray-900 hover:scale-110
        active:scale-95
        transition-all duration-150 ease-out"
    >
      <span className="text-gray-600 group-hover/btn:text-white transition-colors duration-150">
        {children}
      </span>
    </button>
  );
}

function Dots({ total, current, goTo }: { total: number; current: number; goTo: (i: number) => void }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`${i + 1}번째 이미지`}
          className={`rounded-full transition-all duration-300 hover:scale-125 ${
            i === current ? "bg-gray-700 w-3 h-1.5" : "bg-gray-300 hover:bg-gray-500 w-1.5 h-1.5"
          }`}
        />
      ))}
    </div>
  );
}

function ImageStack({ images, current, leaving, direction, animating, onImageClick }: {
  images: CarouselImage[];
  current: number;
  leaving: number | null;
  direction: "left" | "right";
  animating: boolean;
  onImageClick?: () => void;
}) {
  return (
    <>
      {images.map((img, i) => (
        <div
          key={i}
          style={getImageStyle(i, current, leaving, direction, animating)}
          className="absolute inset-0"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
            priority={i === 0}
          />
        </div>
      ))}
      {/* 클릭 레이어는 최상단 */}
      {onImageClick && (
        <div
          className="absolute inset-0 cursor-zoom-in"
          style={{ zIndex: 10 }}
          onClick={onImageClick}
        />
      )}
    </>
  );
}

function Lightbox({ images, initial, onClose }: {
  images: CarouselImage[];
  initial: number;
  onClose: () => void;
}) {
  const { current, leaving, animating, direction, prev, next, goTo } = useCarousel(images.length);
  const [initialized, setInitialized] = useState(false);
  const goToRef = useRef(goTo);
  goToRef.current = goTo;

  useEffect(() => {
    if (!initialized) {
      if (initial !== 0) goToRef.current(initial);
      setInitialized(true);
    }
  }, [initial, initialized]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs text-white/50 tabular-nums">{current + 1} / {images.length}</span>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all duration-150"
          aria-label="닫기"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 gap-4 min-h-0" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <NavButton onClick={prev} label="이전 이미지"><ChevronLeft className="w-4 h-4" /></NavButton>
        )}
        <div className="relative flex-1 h-full max-w-5xl">
          <ImageStack
            images={images}
            current={current}
            leaving={leaving}
            direction={direction}
            animating={animating}
          />
        </div>
        {images.length > 1 && (
          <NavButton onClick={next} label="다음 이미지"><ChevronRight className="w-4 h-4" /></NavButton>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 px-6 py-5 shrink-0" onClick={(e) => e.stopPropagation()}>
        {images[current].caption && (
          <p className="text-xs text-white/60 text-center">{images[current].caption}</p>
        )}
        {images.length > 1 && <Dots total={images.length} current={current} goTo={goTo} />}
      </div>
    </div>
  );
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { current, leaving, animating, direction, prev, next, goTo } = useCarousel(images.length);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) return null;

  return (
    <>
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 aspect-video group/carousel">
          {/* 모든 이미지를 DOM에 올려 preload — CSS로만 show/hide */}
          <ImageStack
            images={images}
            current={current}
            leaving={leaving}
            direction={direction}
            animating={animating}
            onImageClick={() => setLightboxOpen(true)}
          />

          {/* 줌 힌트 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ zIndex: 11 }}>
            <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-medium">전체화면으로 보기</span>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          {images.length > 1 && (
            <>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20" onClick={(e) => e.stopPropagation()}>
                <NavButton onClick={prev} label="이전 이미지"><ChevronLeft className="w-4 h-4" /></NavButton>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20" onClick={(e) => e.stopPropagation()}>
                <NavButton onClick={next} label="다음 이미지"><ChevronRight className="w-4 h-4" /></NavButton>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-between mt-3 px-1">
          <p className="text-xs text-gray-400">{images[current].caption ?? ""}</p>
          {images.length > 1 && <Dots total={images.length} current={current} goTo={goTo} />}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={images} initial={current} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}
