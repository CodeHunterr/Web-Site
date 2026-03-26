"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const VISIBLE_CLASS_NAME = "is-visible";
const READY_CLASS_NAME = "reveal-ready";
const PENDING_CLASS_NAME = "reveal-pending";

function getRevealDelay(element: HTMLElement) {
  if (element.dataset.reveal !== "stagger") {
    return "0ms";
  }

  const siblings = Array.from(element.parentElement?.children ?? []).filter(
    (node): node is HTMLElement =>
      node instanceof HTMLElement && node.dataset.reveal === "stagger",
  );
  const index = siblings.indexOf(element);

  return `${Math.max(index, 0) * 90}ms`;
}

function markVisible(element: HTMLElement) {
  element.classList.add(READY_CLASS_NAME, VISIBLE_CLASS_NAME);
  element.classList.remove(PENDING_CLASS_NAME);
}

function markPending(element: HTMLElement) {
  element.classList.add(READY_CLASS_NAME, PENDING_CLASS_NAME);
  element.classList.remove(VISIBLE_CLASS_NAME);
}

export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const pendingReveal: HTMLElement[] = [];
    const viewportHeight = window.innerHeight || 1;

    revealElements.forEach((element) => {
      element.style.setProperty("--reveal-delay", getRevealDelay(element));

      if (
        reduceMotion ||
        element.getBoundingClientRect().top < viewportHeight * 0.88
      ) {
        markVisible(element);
        return;
      }

      markPending(element);
      pendingReveal.push(element);
    });

    root.dataset.motionReady = "true";

    let revealObserver: IntersectionObserver | null = null;
    let revealFallback = 0;

    if (!reduceMotion && pendingReveal.length > 0) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!(entry.target instanceof HTMLElement) || !entry.isIntersecting) {
              return;
            }

            markVisible(entry.target);
            revealObserver?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -10% 0px",
        },
      );

      pendingReveal.forEach((element) => {
        revealObserver?.observe(element);
      });

      revealFallback = window.setTimeout(() => {
        pendingReveal.forEach((element) => {
          markVisible(element);
        });
      }, 2200);
    }

    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    let frame = 0;
    const updateParallax = () => {
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        const offset = Math.max(-28, Math.min(28, progress * -24));

        element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });

      frame = 0;
    };

    const requestParallaxUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    if (!reduceMotion && parallaxElements.length > 0) {
      updateParallax();
      window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
      window.addEventListener("resize", requestParallaxUpdate);
    }

    return () => {
      revealObserver?.disconnect();

      if (revealFallback !== 0) {
        window.clearTimeout(revealFallback);
      }

      if (!reduceMotion && parallaxElements.length > 0) {
        window.removeEventListener("scroll", requestParallaxUpdate);
        window.removeEventListener("resize", requestParallaxUpdate);
      }

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname]);

  return null;
}
