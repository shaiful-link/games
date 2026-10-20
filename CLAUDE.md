# Coding guidelines for this project (games)

Follow these whenever writing or changing a game here (single-file HTML/JS/CSS, Capacitor wrapper).
Based on the Karpathy coding principles. For trivial fixes (typos, a wrong label), use judgment.

## 1. Think before coding
- Do not assume. If the request is unclear (which game, which level, which player), ask before building.
- State the assumptions you are making up front.
- If there is more than one reasonable way to do it, show the trade-off and let Shaiful choose.

## 2. Simplicity first
- Build only what was asked for. No extra features, menus or settings "just in case".
- No frameworks or libraries unless the task needs them — games stay single-file HTML.
- Prefer the plain, readable version over the clever one.

## 3. Surgical changes
- Change only the game and the parts the request covers. Do not touch other games or index.html unless asked.
- Keep existing controls, level logic, file names and saved-progress keys unless asked to change them.
- Say clearly what was changed and what was left untouched.

## 4. Goal-driven execution
- Before starting, state how we will know it worked (what to open, what to tap, what should happen).
- After the change, show that the check passed (open the file, test the change, report the result).

## Project rules (always apply)
- Always give the full replacement file, never partial snippets.
- Shaiful is vibe coding — explain each step in plain, practical language and guide hands-on.
- Games are played mainly on phones (iPhone and Android) by touch: controls must not block the play area.
- Content rules: no pig or dog pictures, no Christian cross, no copyrighted characters (original designs only).
- Claude may push changes straight to the GitHub repo (shaiful-link/games) when Shaiful asks — the Claude GitHub app is installed. Always pull or fetch the repo's current files first and change only the message/feature asked for: the repo versions have sound, confetti and styling that older local copies lack.
- The laptop clone is at C:\Users\ASU-A512F-LBQ588T\games (with the Capacitor android/www setup). Shaiful updates it with `git pull`; build-app.bat copies *.html into www before building the APK.
- Warn if a step should only be done on a personal laptop (Capacitor, Android Studio, etc.).
