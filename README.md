# Japan Phrase Kit

An offline Japanese phrasebook and flashcard app for travel and business. Built for real use — on planes, in airports, and anywhere without data.

**153 phrases** across two sections:
- **Personal** — everyday travel and conversation
- **Business** — startup, tech, and professional Japanese with three style levels

Works fully offline after first load. Installable on your phone home screen as a PWA.

No audio. No microphone. No internet required after setup. Pronunciation handled entirely through large, readable romaji.

---

## Files in This Folder

| File | Purpose |
|---|---|
| `index.html` | App shell and all views |
| `styles.css` | All styles — dark theme, mobile-first |
| `script.js` | All app logic + embedded 153-phrase fallback |
| `manifest.json` | PWA install configuration |
| `service-worker.js` | Offline caching |
| `icon.svg` | App icon (torii gate) |
| `japan_phrase_kit_seed.json` | Source of truth for all 153 phrases |
| `japan_phrase_kit_seed.csv` | CSV version of all phrases |

---

## How to Open Locally (Testing)

Open a terminal in this folder and run:

```
python -m http.server 8000
```

Then open: `http://localhost:8000`

Or double-click `index.html` — the app falls back to 153 embedded phrases in script.js if the JSON fetch is blocked by browser security.

---

## Personal Section

Travel and everyday conversation, organised into:

- **Conversation Repair** — Ask people to slow down, repeat, or simplify
- **Conversation Flow** — Filler words, reactions, agreement phrases
- **Intro** — Self-introduction, where you're from, Muay Thai
- **Recommendations** — Asking locals for food, places, tips
- **Restaurant** — Ordering, paying, dietary needs
- **Konbini** — Convenience store: payment, warming food, chopsticks
- **Directions** — Station, walking distance, trains
- **Airport/Plane** — Gate, boarding, seat changes
- **Hotel** — Check in, luggage, checkout, Wi-Fi
- **Shopping** — Prices, sizing, trying things on
- **Emergency** — Help, ambulance, lost items, police box (koban)
- **Family/Friends** — Meeting up, checking in

Use the filter chips to jump to a category. Use the search bar to find any phrase instantly.

---

## Business Section — Three Levels

Every business phrase comes in three versions. Use the **Simple / Startup / Formal** toggle at the top of the Business section to switch between them.

### Simple
Plain everyday Japanese that anyone can understand. No jargon. Avoids katakana loanwords. Best for casual introductions, general conversation, or when you're not sure of the audience's background.

Example: `インターネットを使って仕事をしています。`
*Intaanetto o tsukatte shigoto o shiteimasu.*

### Startup
Natural Japanese used in tech and startup environments. Mixes katakana (English loanwords) with native Japanese. This is how most people at Japanese startups, product teams, and tech companies actually speak.

Example: `オンラインで仕事をしています。`
*Onrain de shigoto o shiteimasu.*

### Formal
Mature business Japanese with kanji, native terms, and polite grammar patterns. For investor meetings, corporate clients, senior introductions, or any formal business context.

Example: `リモートで業務を行っています。`
*Rimooto de gyoumu o okonatte imasu.*

---

## How to Switch Business Levels

1. Go to the **Business** section (briefcase icon in the bottom nav)
2. Tap **Simple**, **Startup**, or **Formal** in the bar at the top
3. All cards instantly update to show that version of the phrase
4. The description bar below tells you what each level is for

To see all three versions of one phrase at the same time, tap **"Show all levels ▼"** on any business card. Tap again to collapse.

---

## How to Practice Business Phrases

1. Tap **Practice** in the bottom navigation
2. Choose a **Practice Mode**: English → Japanese, Hiragana → English, or Romaji → English
3. Choose a **Practice Set**: All, Personal, Business, or Favorites
4. Choose a **Business Level**: Simple, Startup, or Formal
5. Tap **Start Practice**

During a session:
- Tap the card to reveal the answer
- The answer uses the Japanese from your chosen business level
- Rate yourself: **Again**, **Good**, or **Easy**
- Your ratings are saved and tracked

Setting the business level in Practice also updates the level shown in the Business section view.

---

## How to Add Your Own Phrases

1. Tap **Add** in the bottom navigation
2. Fill in: Section, English, Hiragana, Romaji (required) — plus optional Japanese, Notes, Tags
3. Choose a Politeness level
4. Tap **Save Phrase**

Your phrases appear immediately in the correct section and are marked "My Phrase". They survive restarts.

To edit or delete a custom phrase: open the phrase card and tap Edit or Delete.

---

## Export and Import Backups

### Export JSON (full backup)
Settings → **Export All Data as JSON**

Saves your custom phrases, favorites, and practice stats. Use this before clearing app data or switching devices.

### Import JSON
Settings → **Import JSON Backup**

Restores a previous backup. Replaces current custom phrases and stats.

### Export CSV
Settings → **Export as CSV**

Exports all 153+ phrases as a spreadsheet file. Includes all three business level columns:
`simple_japanese`, `simple_reading`, `simple_romaji`, `simple_note`, and the same for startup and formal.

---

## How Offline Mode Works

1. Visit the app once in any browser while online
2. The service worker caches all files automatically
3. After that, the app works with no internet connection — full search, all phrases, practice, add/edit, export

An indicator at the top of the app shows "Online" or "Offline — app running from cache."

All data (custom phrases, favorites, stats, settings) is stored in your browser's `localStorage`. It stays on your device and is not sent anywhere.

---

## How to Deploy to GitHub Pages

### Step 1 — Create a GitHub account
If you don't have one: [github.com](https://github.com)

### Step 2 — Create a new repository
1. Go to: github.com/new
2. Repository name: `japan-phrase-kit`
3. Set to **Public**
4. Do NOT tick "Add a README file"
5. Click **Create repository**

### Step 3 — Upload the files
1. On your new repo page, click **"uploading an existing file"** (the link in the centre of the empty repo page)
2. Drag and drop these files into the upload area:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `manifest.json`
   - `service-worker.js`
   - `icon.svg`
   - `japan_phrase_kit_seed.json`
   - `japan_phrase_kit_seed.csv`
   - `README.md`
3. Scroll down and click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** (top tab)
2. Scroll down to **Pages** (in the left sidebar)
3. Under **Source**, select: **Deploy from a branch**
4. Branch: `main` / Folder: `/ (root)`
5. Click **Save**

### Step 5 — Wait 1–2 minutes
GitHub Pages will build and your app will be live at:

```
https://rtayl.github.io/japan-phrase-kit/
```

---

## How to Add to iPhone Home Screen

1. Open the live URL in **Safari** (must be Safari — Chrome on iPhone does not support PWA install)
2. Tap the **Share button** (box with arrow, at the bottom of the screen)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it `Japan Kit` and tap **Add**
5. The app icon appears on your home screen
6. Open it — it launches in full-screen mode with no browser bar
7. All 153 phrases work offline immediately

---

## How to Add to Android Home Screen

1. Open the live URL in **Chrome**
2. Tap the **three-dot menu** (top right)
3. Tap **"Add to Home Screen"** or **"Install App"**
4. Tap **Add**
5. The app icon appears on your home screen
6. It works offline after first load

---

## How to Test Airplane Mode

After installing on your phone:

1. Open the app while on Wi-Fi or data
2. Wait a few seconds for the service worker to cache everything
3. Turn on Airplane Mode
4. Close and reopen the app from the home screen icon
5. Everything should still work — all phrases, search, flashcards

The indicator at the top will say "Offline — app running from cache."

---

## How to Update the App Later

If you add new phrases or make code changes:

```
git add .
git commit -m "Update Japan Phrase Kit"
git push
```

GitHub Pages will automatically redeploy within 1–2 minutes.

If you don't use git on the command line, just go to your GitHub repo and upload the changed files manually (same drag-and-drop process as Step 3 above).

After any update, bump the cache version in `service-worker.js`:
- Change `japan-phrase-kit-v2` to `japan-phrase-kit-v3`

This forces phones to download the fresh version.

---

## Design Notes

- **No audio, no microphone, no text-to-speech** — pronunciation is handled through large readable romaji
- **Romaji is the largest text** on every card — that is what you actually say
- **Hiragana shows below** to help you learn the reading over time
- **Full Japanese text** (kanji/katakana) shows above hiragana as the written reference
- **No external dependencies** — no CDN, no React, pure HTML/CSS/JS
- **153 phrases embedded in script.js** so the app works even if the JSON file can't be fetched
- **Personal and Business clearly separated** so you never dig through startup vocabulary at 2am in Shinjuku
