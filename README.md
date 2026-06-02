# GS ConsultPro Static Site Workflow

This site uses a shared-template static workflow, not a deeply componentized app.

## Structure

- Each page has its own folder with an `index.html` file, such as `about/index.html` and `services/index.html`.
- The root folder contains only the homepage `index.html`; all other pages live in their own folders.
- Shared styling lives in `assets/styles.css`.
- Shared behavior and header/footer rendering live in `assets/site.js`.
- Shared media lives in `assets/images/`.

## Working Rules

- For content changes, edit the specific page folder's `index.html`.
- For anything reused across pages, update `assets/styles.css` or `assets/site.js` once.
- For page-specific visual fixes, scope CSS to that page or section so other pages do not move.
- For galleries, hero sections, cards, and reusable media, point HTML/CSS to images in `assets/images/`.
- The local server serves this folder as a normal static website, so changes show directly on the matching page URL.

Practical rule: page text lives in the page, shared design and behavior live in `assets`, and images are centrally reused.
