<template>
  <div class="content-block" :class="`content-block--${block.type}`">
    <!-- Text block -->
    <template v-if="block.type === 'text'">
      <h3 v-if="block.heading" class="content-block__heading text-h3">
        {{ block.heading }}
      </h3>
      <div class="content-block__body text-body" v-html="formattedBody" />
    </template>

    <!-- Image block -->
    <template v-else-if="block.type === 'image'">
      <AppImage
        :src="block.src"
        :alt="block.alt"
        :caption="block.caption"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppImage from '@/components/atoms/AppImage.vue'
import type { ContentBlock } from '@/types'

const props = defineProps<{
  block: ContentBlock
}>()

const formattedBody = computed(() => {
  if (props.block.type !== 'text') return ''
  // Convert newlines to <br> and numbered lists to styled HTML
  return props.block.body
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<p>${line}</p>`)
    .join('')
})
</script>

<style scoped>
.content-block {
  width: 100%;
}

/* Text block */
.content-block--text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.content-block__heading {
  color: var(--neutral-900);
}

.content-block__body {
  color: var(--neutral-800);
}

.content-block__body :deep(p) {
  margin-bottom: var(--spacing-m);
  line-height: 1.8;
}

.content-block__body :deep(p:last-child) {
  margin-bottom: 0;
}

/* Image block */
.content-block--image {
  /* inherits AppImage styles */
}
</style>
