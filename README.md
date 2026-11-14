# Lakshya Kumar Yadav — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite and custom CSS.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### Vercel
Import this repository into Vercel. Use the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
For a GitHub Pages project site, set `base` in `vite.config.ts` to `'/REPOSITORY-NAME/'`, then build and publish the `dist` directory using GitHub Actions. For a custom domain or user site, `/` is generally suitable.

## Before publishing — personal review

- Add a downloadable, current résumé and link it from the navigation.
- Confirm the exact role title, employment dates and project metrics against your latest approved résumé.
- Add public GitHub repository links only for projects that are safe to disclose.
- Add certification names and dates after verifying the Credly profile.
- Replace the monogram card with a professional headshot if desired.
- Confirm that all employer/client descriptions are approved for public use.

## Content notes

The OCR and cross-browser modules are described at a high level to protect professional confidentiality. No client names, internal architecture, proprietary implementation details or unverified metrics are included.


## Résumé download

The supplied résumé is included at `public/resume.pdf`. The navigation Download Resume link downloads it as `Lakshya_Kumar_Yadav_Resume.pdf`. Replace this file whenever you update your résumé.


## Interactive effects

- Warm amber/peach cursor spotlight on pointer devices.
- Subtle blue ripple trail following pointer movement.
- Both effects respect reduced-motion preferences and are disabled on coarse-pointer devices.
