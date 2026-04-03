export interface ProjectMeta {
  year: string
  projectType: string
  role: string
  client: string
  duration: string
}

export type ContentBlockType = 'text' | 'image'

export interface ContentBlockText {
  type: 'text'
  heading?: string
  body: string
}

export interface ContentBlockImage {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export type ContentBlock = ContentBlockText | ContentBlockImage

export interface ProcessPhase {
  phase: string
  description: string
}

export interface FounderFeedback {
  quote: string
  author: string
}

export interface ProjectDetail {
  metadata: ProjectMeta
  overview: string
  background: string
  process: ProcessPhase[]
  contentBlocks: ContentBlock[]
  founderFeedback?: FounderFeedback
}

export interface Project {
  id: string
  category: string
  title: string
  titleEn: string
  year: string
  type: string
  role: string
  client: string
  coverImage: string
  tags: string[]
  summary: string
  detail: ProjectDetail
}

export interface ProjectCategory {
  id: string
  label: string
  description: string
}

export interface ToolItem {
  name: string
  level: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export interface AwardItem {
  title: string
  year: string
  description: string
}
