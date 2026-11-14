/**
 * Domain types for the CV data and editor rendering utilities.
 *
 * These types model the data living in the frontmatter of
 * `src/pages/index.astro` and the contracts between components.
 */

/** Academic education entry. */
export interface EducationItem {
  titulo: string;
  institucion: string;
  periodo: string;
}

/** Personal profile: general info and education. */
export interface Profile {
  nombre: string;
  rol: string;
  /** Presentation lines of the profile (one per sentence). */
  tagline: string[];
  ubicacion: string;
  educacion: EducationItem[];
}

/** Job position in the work experience. */
export interface JobPosition {
  empresa: string;
  rol: string;
  periodo: string;
  /** Description bullets of the role (one per line). */
  descripcion: string[];
  stack: string[];
}

/** Personal hobby or interest. */
export interface Hobby {
  nombre: string;
  descripcion: string;
}

/** Featured personal project. */
export interface Project {
  nombre: string;
  /** Description bullets of the project (one per line). */
  descripcion: string[];
  stack: string[];
  url?: string;
}

/** Professional social links. */
export interface SocialLinks {
  github: string;
  linkedin: string;
}

/** Contact information. */
export interface ContactInfo {
  email: string;
  sitio: string;
  ubicacion: string;
  /** Endpoint que sirve el CV en PDF como descarga. */
  cv: string;
  redes: SocialLinks;
}

/** Editor sections, identified as files of the "repository". */
export const SECTION_FILES = [
  "sobre-mi.ts",
  "experiencia.ts",
  "habilidades.ts",
  "hobbies.ts",
  "proyectos.ts",
  "contacto.ts",
] as const;

export type SectionFile = (typeof SECTION_FILES)[number];

/** Languages supported by the syntax highlighter. */
export type Language = "TypeScript";

/**
 * Code line already highlighted as safe HTML.
 * Lines may carry the `HTML_SENTINEL` prefix when they contain
 * their own markup (e.g. links).
 */
export type HighlightedLine = string;

/** Available site themes. */
export const THEMES = {
  dark: "catppuccin-mocha",
  light: "catppuccin-latte",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];
