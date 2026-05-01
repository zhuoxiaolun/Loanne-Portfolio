export interface ProjectMeta {
  year: string
  projectType: string
  role: string
  client: string
  duration: string
}

export type ContentBlockType = 'text' | 'image' | 'gallery' | 'strategy' | 'table'

export interface ContentBlockText {
  type: 'text'
  heading?: string
  subtitle?: string
  body: string
  large?: boolean
}

export interface ContentBlockImage {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export interface ContentBlockGallery {
  type: 'gallery'
  heading?: string
  images?: string[]
  placeholder?: boolean
}

export interface StrategyPoint {
  title: string
  body: string
}

export interface ContentBlockStrategy {
  type: 'strategy'
  heading?: string
  points: StrategyPoint[]
}

export interface ContentBlockTable {
  type: 'table'
  heading?: string
  columns: string[]
  rows: string[][]
}

export type ContentBlock = ContentBlockText | ContentBlockImage | ContentBlockGallery | ContentBlockStrategy | ContentBlockTable

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
  overviewSubtitle?: string
  background: string
  backgroundSubtitle?: string
  process: ProcessPhase[]
  processSubtitle?: string
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
  liveUrl?: string
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
