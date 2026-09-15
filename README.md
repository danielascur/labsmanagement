# Scientific Labs Management Project – labsmanagement.org

Static replica of the WordPress/Elementor site for GitHub Pages. Images, the FAQ PDF and fonts come from the site backup, and colours and sizes come from the original Elementor stylesheets.

## Publish
1. Create a GitHub repo and upload everything in this folder, including the hidden `.nojekyll` file.
2. Repo → Settings → Pages → Source: "Deploy from a branch", `main`, `/ (root)`.
3. The `CNAME` file already contains `labsmanagement.org`. At your DNS provider, add A records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, plus a CNAME record for `www` pointing to `<your-github-username>.github.io`. Then tick "Enforce HTTPS".

## Contact form
GitHub Pages can't process forms. Create a free form at formspree.io and replace `YOUR_FORM_ID` in `contact-us/index.html`.

## Structure
Each page lives at `<page>/index.html`, so the original URLs (e.g. `/project-team/`) keep working. Styles are in `assets/css/style.css`.
