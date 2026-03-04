import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Badge from "./Badge";
import TechChip from "./TechChip";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  href: string;
  externalUrl?: string;
  status?: string;
  statusVariant?: "default" | "success" | "outline";
  thumbnail?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  href,
  externalUrl,
  status,
  statusVariant = "default",
  thumbnail,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      {thumbnail && (
        <div className="relative w-full aspect-video bg-white border-b border-gray-100">
          <Image src={thumbnail} alt={`${title} 썸네일`} fill className="object-contain p-3" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {status && <Badge variant={statusVariant}>{status}</Badge>}
          </div>
          {externalUrl && (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors shrink-0">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>

        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:gap-2.5 transition-all duration-200">
          자세히 보기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
