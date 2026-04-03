<template>
  <main>
    <HeroSection :data="home.hero" />

    <section class="section">
      <ProjectGrid
        :projects="featuredProjects"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import ProjectGrid from '@/components/organisms/ProjectGrid.vue'
import homeData from '@/data/home.json'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'

const home = homeData
const allProjects = projectsData.projects as Project[]

const featuredProjects = computed(() =>
  home.featuredProjects.ids
    .map(id => allProjects.find(p => p.id === id))
    .filter((p): p is Project => Boolean(p))
)
</script>

<style scoped>
.section {
  padding-bottom: var(--spacing-6xl);
}
</style>
