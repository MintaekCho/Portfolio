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
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number, dir: "left" | "right") => {
    if (animating || next === current) return;
    setDirection(dir);
    setAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  const prev = useCallback(() => go((current - 1 + length) % length, "left"), [go, current, length]);
  const next = useCallback(() => go((current + 1) % length, "right"), [go, current, length]);
  const goTo = useCallback((i: number) => go(i, i > current ? "right" : "left"), [go, current]);

  return { current, animating, direction, prev, next, goTo };
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
        transition-all duration-150 ease-out z-10"
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

function Lightbox({ images, initial, onClose }: {
  images: CarouselImage[];
  initial: number;
  onClose: () => void;
}) {
  const { current, animating, direction, prev, next, goTo } = useCarousel(images.length);
  const [initialized, setInitialized] = useState(false);
  const goToRef = useRef(goTo);
  goToRef.current = goTo;

  useEffect(() => {
    if (!initialized) {
      goToRef.current(initial);
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

  const slideClass = animating
    ? direction === "right" ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0";

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
        <div className={`relative flex-1 h-full max-w-5xl transition-all duration-300 ease-out ${slideClass}`}>
          <Image src={images[current].src} alt={images[current].alt} fill className="object-contain" sizes="100vw" priority />
        </div>
        {images.length > 1 && (
          <NavButton onClick={next} label="다음 이미지"><ChevronRight className="w-4 h-4" /></NavButton>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 px-6 py-5 shrink-0" onClick={(e) => e.stopPropagation()}>
        {images[current].caption && <p className="text-xs text-white/60 text-center">{images[current].caption}</p>}
        {images.length > 1 && <Dots total={images.length} current={current} goTo={goTo} />}
      </div>
    </div>
  );
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { current, animating, direction, prev, next, goTo } = useCarousel(images.length);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) return null;

  const slideClass = animating
    ? direction === "right" ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0";

  return (
    <>
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 aspect-video group/carousel">
          <div className="absolute inset-0 cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
            <div className={`absolute inset-0 transition-all duration-300 ease-out ${slideClass}`}>
              <Image src={images[current].src} alt={images[current].alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-medium">전체화면으로 보기</span>
              </div>
            </div>
          </div>

          {images.length > 1 && (
            <>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10" onClick={(e) => e.stopPropagation()}>
                <NavButton onClick={prev} label="이전 이미지"><ChevronLeft className="w-4 h-4" /></NavButton>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10" onClick={(e) => e.stopPropagation()}>
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

      {lightboxOpen && <Lightbox images={images} initial={current} onClose={() => setLightboxOpen(false)} />}
    </>
  );
}
