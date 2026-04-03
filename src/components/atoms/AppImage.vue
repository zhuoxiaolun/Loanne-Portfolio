<template>
  <figure :class="['app-image', { 'app-image--rounded': rounded }]">
    <img
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      @error="onError"
    />
    <figcaption v-if="caption" class="app-image__caption text-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  caption?: string
  rounded?: boolean
  lazy?: boolean
}>(), {
  rounded: true,
  lazy: true,
})

function onError(e: Event) {
  const img = e.target as HTMLImageElement
  img.style.background = 'var(--neutral-50)'
  img.style.minHeight = '200px'
}
</script>

<style scoped>
.app-image {
  width: 100%;
}

.app-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  background: var(--neutral-50);
}

.app-image--rounded img {
  border-radius: var(--radius-l);
}

.app-image__caption {
  margin-top: var(--spacing-xs);
  text-align: center;
  color: var(--neutral-600);
}
</style>
