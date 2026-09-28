---
name: polaris-2-app-home-design
description: Use this skill to generate well-branded interfaces and assets for Shopify embedded apps (Polaris 2.0 web components, App Home, new admin style), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files (`reference/DESIGN.md`, `reference/COMPONENTS.md`, `components/**/*.prompt.md`, `ui_kits/app-home/`).

Hard rules: only `s-*` Polaris web components plus App Bridge `ui-nav-menu`, `ui-title-bar`, `ui-save-bar`, `ui-modal` and `shopify.resourcePicker()`. Load `https://cdn.shopify.com/shopifycloud/polaris-2.0-rc.js`. No Polaris React, Tailwind, Material, shadcn or custom CSS for color/spacing/type/radius/shadow — use attributes (`gap="base"`, `tone="critical"`). Sentence case, Shopify admin terminology, works at 375px.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
