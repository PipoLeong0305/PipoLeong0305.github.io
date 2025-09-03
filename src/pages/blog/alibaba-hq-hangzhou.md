---
title: "Visiting Alibaba HQ in Hangzhou"
description: "Notes and impressions from my visit to Alibaba’s headquarters in Hangzhou, China."
pubDate: 2024-12-12
author: "Pipo Leong"
tags: [china, travel, tech, alibaba, hangzhou]
layout: '@/layouts/BaseLayout.astro'
---

<p class="text-sm text-gray-500 dark:text-gray-400">Published Dec 2024</p>

I recently visited Alibaba’s headquarters in Hangzhou, China. Here are some quick takeaways from the trip.

<div id="alibaba-gallery" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <figure class="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
    <img src="/alibaba/4fe91bd3-1f4b-4147-b6ef-28f8ebb9425a.jpeg" alt="Alibaba HQ campus exterior" loading="lazy" class="w-full h-56 object-cover cursor-zoom-in" />
  </figure>
  <figure class="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
    <img src="/alibaba/734b3ba6-c710-4a2b-adc5-945301f5cdb6.jpeg" alt="Lobby and collaborative spaces" loading="lazy" class="w-full h-56 object-cover cursor-zoom-in" />
  </figure>
  <figure class="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
    <img src="/alibaba/db7e958d-0ac2-49de-9fcb-e401c46a5c07.jpeg" alt="Wayfinding and campus signage" loading="lazy" class="w-full h-56 object-cover cursor-zoom-in" />
  </figure>
  <figure class="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
    <img src="/alibaba/ef59dc75-4df8-40b5-b2b5-48ef235ac0d1.jpeg" alt="Views around the Hangzhou campus" loading="lazy" class="w-full h-56 object-cover cursor-zoom-in" />
  </figure>
  
</div>

<!-- Lightbox overlay -->
<div id="lb-overlay" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 p-4 md:p-8" role="dialog" aria-modal="true" aria-label="Image viewer">
  <button id="lb-close" class="absolute right-4 top-4 text-white/80 hover:text-white text-2xl" aria-label="Close">×</button>
  <img id="lb-img" src="" alt="" class="max-h-[90vh] max-w-[90vw] rounded shadow-2xl" />
  <p id="lb-caption" class="mt-4 text-center text-white/80"></p>
  <!-- Clicking backdrop closes -->
  <span id="lb-backdrop" class="absolute inset-0"></span>
  
</div>

<script>
  (function () {
    const gallery = document.getElementById('alibaba-gallery');
    const overlay = document.getElementById('lb-overlay');
    const imgEl = document.getElementById('lb-img');
    const captionEl = document.getElementById('lb-caption');
    const closeBtn = document.getElementById('lb-close');
    const backdrop = document.getElementById('lb-backdrop');

    if (!gallery || !overlay || !imgEl || !captionEl || !closeBtn || !backdrop) return;

    function openLightbox(src, alt) {
      imgEl.src = src;
      imgEl.alt = alt || '';
      captionEl.textContent = alt || '';
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
      imgEl.src = '';
      captionEl.textContent = '';
      document.body.style.overflow = '';
    }

    gallery.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.tagName === 'IMG') {
        e.preventDefault();
        const src = t.getAttribute('src');
        const alt = t.getAttribute('alt') || '';
        if (src) openLightbox(src, alt);
      }
    });

    [closeBtn, backdrop].forEach((el) => el.addEventListener('click', closeLightbox));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  })();
</script>

## First impressions
<ul class="list-disc pl-6 space-y-1">
  <li>Massive, modern campus purpose-built for collaboration.</li>
  <li>Lively public spaces—cafes, open plazas, real community energy.</li>
  
</ul>

## Tech and culture
<ul class="list-disc pl-6 space-y-1">
  <li>Platform-first, metrics-driven, and user-obsessed product thinking.</li>
  <li>Pragmatic engineering: ship fast, measure, scale.</li>
  <li>Heavy automation across CI/CD and observability; tooling feels polished.</li>
  
</ul>

## What stood out to me
<ul class="list-disc pl-6 space-y-1">
  <li>Design systems applied end-to-end—consistent inside and out.</li>
  <li>OKRs paired with rapid experimentation; execution feels fast and aligned.</li>
  <li>Ecosystem thinking in practice: payments, logistics, retail tightly integrated.</li>
  
</ul>

## Hangzhou vibes
<ul class="list-disc pl-6 space-y-1">
  <li>Beautiful, culture-rich city (West Lake!) with momentum.</li>
  <li>Deep talent pool and visible startup energy.</li>
  
</ul>

## Closing thoughts
The visit reinforced a bias for:
<ul class="list-disc pl-6 space-y-1">
  <li>Modular — clear interfaces, reusable components</li>
  <li>Measurable — metrics-first decisions</li>
  <li>Maintainable — automation and documentation by default</li>
</ul>

