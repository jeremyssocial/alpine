<template>
    <div class="social-links">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <img :src="link.icon" :alt="link.name" class="social-icon" />
        <span>{{ link.name }}</span>
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    links: {
      name: string
      url: string
      icon: string
    }[]
  }>()
  </script>
  
  <style scoped>
  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  
  .social-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-bottom: 0.5rem;
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
    filter: grayscale(100%);
    opacity: 0.8;
  }
  
  .social-link:hover .social-icon {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
  
  .social-link span {
    font-size: 0.875rem;
    color: #333;
  }
  </style>
  