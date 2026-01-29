import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  // --- INFORMASI DASAR WEBSITE ---
  title: "Abqory Learning Path",
  tagline: "Dokumentasi Perjalanan Belajar Web Development",
  favicon: "img/favicon.ico",

  // --- KONFIGURASI DEPLOY (GITHUB PAGES) ---
  // Ganti 'username' dengan username GitHub asli Anda nanti saat deploy
  url: "https://learning-path-qfyq8alft-faqihqoys-projects.vercel.app",
  baseUrl: "/", // Sesuaikan dengan nama repo GitHub Anda nanti
  organizationName: "username",
  projectName: "learning-path",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // --- BAHASA (INDONESIA) ---
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Hapus baris 'editUrl' di bawah ini jika tidak ingin ada tombol "Edit this page"
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css", // File CSS custom kita
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Kartu sosial media (saat link dibagikan di WA/Twitter)
    image: "img/docusaurus-social-card.jpg",

    navbar: {
      title: "Abqory Learning Path", // Nama di pojok kiri atas
      logo: {
        alt: "Logo Abqory Learning Path",
        src: "img/react.png", // Pastikan file logo.svg ada di folder static/img
      },
      items: [
        // --- MENU 1: HTML 5 ---
        {
          type: "docSidebar",
          sidebarId: "htmlSidebar", // Wajib sama dengan di sidebars.ts
          position: "left",
          label: "HTML 5",
          className: "header-html-link", // Class khusus untuk CSS Icon
        },

        // --- MENU 2: CSS 3 ---
        {
          type: "docSidebar",
          sidebarId: "cssSidebar", // Wajib sama dengan di sidebars.ts
          position: "left",
          label: "CSS 3",
          className: "header-css-link", // Class khusus untuk CSS Icon
        },

        {
          type: "docSidebar",
          sidebarId: "jsSidebar", // Harus sama dengan di sidebars.ts
          position: "left",
          label: "JavaScript",
          className: "header-js-link", // Class khusus untuk Icon
        },

        {
          type: "docSidebar",
          sidebarId: "tailwindSidebar", // Harus sama dengan sidebars.ts
          position: "left",
          label: "Tailwind",
          className: "header-tailwind-link", // Class khusus untuk Icon
        },

        {
          type: "docSidebar",
          sidebarId: "tsSidebar",
          position: "left",
          label: "TypeScript",
          className: "header-ts-link", // Class icon baru
        },
        
        {
          type: "docSidebar",
          sidebarId: "reactSidebar",
          position: "left",
          label: "React",
          className: "header-react-link",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Modul Belajar",
          items: [
            {
              label: "HTML Dasar",
              // Pastikan path ini sesuai dengan file yang sudah Anda buat
              to: "/docs/html/pengenalan/apa-itu-html",
            },
            {
              label: "CSS Dasar",
              to: "/docs/css/pengenalan-css/apa-itu-css",
            },
          ],
        },
        {
          title: "Media Sosial",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/faqih-abqory",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/ahfary_",
            },
            {
              label: "Portfolio",
              href: "https://ahmadfaqihabqory.my.id",
            },
          ],
        },
        {
          title: "Lainnya",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub Repo",
              href: "https://github.com/ahfary",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abqory Learning Path. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
