# Desserts by Clément — Tip Sharing

A private tool for calculating tip splits every 2 weeks, across 3 locations.

## How it works
- **15% → Kitchen Staff**, as one lump total (not split per person)
- **85% → everyone else**, split proportionally by hours worked
- Password: `3344` (tell me if you want this changed — easy to update)

## Deploying (same process as the ordering tool)

### 1. Put this project on GitHub
1. Go to github.com and create a new repository — e.g. `dbc-tips`. Keep it **Private**.
2. On the new repo's page, click "uploading an existing file."
3. Drag in everything from this folder — `public`, `netlify`, `package.json`,
   `netlify.toml` — keeping the folder structure intact.
4. Commit.

### 2. Connect it to Netlify
1. Go to netlify.com, "Add new site" → "Import an existing project."
2. Choose GitHub, select the `dbc-tips` repo.
3. Netlify reads `netlify.toml` automatically. Click "Deploy."

### 3. You're live
You'll get a link like `random-name.netlify.app` — rename it under Site
settings → General if you'd like something more memorable, e.g.
`dbc-tips.netlify.app`.

## First-time setup
1. Open the site, enter the password.
2. Go to Admin → add your 3 locations (or rename the seeded placeholders).
3. For each location, add the staff eligible for the 85% hours-based split.
4. You're ready to run your first pay period calculation.

## Making changes later
Come back to the same Claude conversation and ask — same as with the
ordering tool. I'll hand you an updated `index.html` to re-upload to this
repo's `public` folder.
