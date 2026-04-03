<template>
  <main class="projects-page">
    <div class="container projects-page__body">
      <div
        v-for="category in categories"
        :key="category.id"
        class="projects-page__category"
      >
        <h2 class="projects-page__category-title">{{ category.label }}</h2>

        <div class="projects-page__list">
          <ProjectCard
            v-for="project in projectsByCategory(category.id)"
            :key="project.id"
            :project="project"
            variant="banner"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/molecules/ProjectCard.vue'
import projectsData from '@/data/projects.json'
import type { Project, ProjectCategory } from '@/types'

const categories = projectsData.categories as ProjectCategory[]
const allProjects = projectsData.projects as Project[]

function projectsByCategory(categoryId: string): Project[] {
  return allProjects.filter(p => p.category === categoryId)
}
</script>

<style scoped>
.projects-page__body {
  padding-top: calc(80px + var(--spacing-3xl));
  padding-bottom: var(--spacing-6xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.projects-page__category-title {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  color: var(--neutral-900);
  margin-bottom: var(--spacing-2xl);
}

.projects-page__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}
</style>
