import type { Component } from 'svelte';

export interface imgData{
  img: {
    h: number,
    w: number,
    src: string
  },

  sources: {
    avif: string,
    jpeg: string,
    webp: string
  }
};

export interface articleData {
      slug: string;
      title: string;
      description: string;
      img: string;
      path: string;
    };

export type ArticleModule = { default: Component };