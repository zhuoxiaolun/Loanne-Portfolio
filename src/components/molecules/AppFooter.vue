<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__contact">
        <span class="footer__contact-label">Get in touch</span
        ><span class="footer__contact-sep" aria-hidden="true"> - </span
        ><a href="mailto:loanne.design@gmail.com" class="footer__email">loanne.design@gmail.com</a>
      </p>

      <nav class="footer__nav" aria-label="底部導覽">
        <RouterLink to="/" class="footer__link">Home</RouterLink>
        <RouterLink to="/about" class="footer__link">About</RouterLink>
        <RouterLink to="/projects" class="footer__link">Projects</RouterLink>
        <a href="/resume.pdf" class="footer__link" target="_blank">Resume</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  /* Transparent — lets the .app background gradient show through seamlessly */
  background: transparent;
  padding: var(--spacing-5xl) 0 var(--spacing-3xl);
}

.footer__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

/* "Get in touch - loannezhuo@gmail.com" */
.footer__contact {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.75rem, 4.5vw, 4.5rem);
  line-height: 1.15;
  color: var(--neutral-900);
  margin: 0;
  display: inline;
  flex-wrap: wrap;
}

.footer__contact-sep {
  color: var(--neutral-400);
}

.footer__email {
  color: var(--burgundy-300);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer__email:hover {
  color: var(--burgundy-500);
}

/* Nav row */
.footer__nav {
  display: flex;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.footer__link {
  font-family: var(--font-serif-en);
  font-style: normal;
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--lake-blue-700);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer__link:hover {
  color: var(--neutral-900);
}

@media (max-width: 640px) {
  .footer__contact {
    font-size: clamp(1.25rem, 5.5vw, 1.5rem);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxs);
  }

  .footer__contact-sep {
    display: none;
  }

  .footer__nav {
    gap: var(--spacing-m);
    flex-wrap: wrap;
  }
}
</style>
