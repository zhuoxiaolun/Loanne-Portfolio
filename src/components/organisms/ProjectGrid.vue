<template>
  <section class="project-grid">
    <div class="container">
      <div class="project-grid__list">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          variant="banner"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/molecules/ProjectCard.vue'
import type { Project } from '@/types'

withDefaults(defineProps<{
  projects: Project[]
  title?: string
  eyebrow?: string
  subtitle?: string
}>(), {})
</script>

<style scoped>
.project-grid__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl);
}
</style>
