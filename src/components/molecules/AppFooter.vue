<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__contact">
        <span class="footer__contact-label">Get in touch</span>
        <span class="footer__contact-sep" aria-hidden="true"> - </span>
        <a href="mailto:loannezhuo@gmail.com" class="footer__email">loannezhuo@gmail.com</a>
      </p>

      <nav class="footer__nav" aria-label="底部導覽">
        <RouterLink to="/" class="footer__link text-small">project</RouterLink>
        <RouterLink to="/projects" class="footer__link text-small">work</RouterLink>
        <RouterLink to="/about" class="footer__link text-small">About</RouterLink>
        <a href="/resume.pdf" class="footer__link text-small" target="_blank">Resume</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--neutral-100);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  background: var(--neutral-0);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.footer__contact {
  font-family: var(--font-serif-en);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  color: var(--neutral-900);
  display: flex;
  align-items: baseline;
  gap: 0;
  flex-wrap: wrap;
}

.footer__contact-label {
  color: var(--neutral-900);
}

.footer__contact-sep {
  color: var(--neutral-400);
}

.footer__email {
  color: var(--cherry-600);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer__email:hover {
  color: var(--cherry-700);
}

.footer__nav {
  display: flex;
  gap: var(--spacing-l);
  flex-wrap: wrap;
}

.footer__link {
  color: var(--neutral-500);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer__link:hover {
  color: var(--neutral-900);
}

@media (max-width: 640px) {
  .footer__contact {
    font-size: 1.25rem;
  }
}
</style>
