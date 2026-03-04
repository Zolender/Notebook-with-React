# Notebook (React + Vite)

A simple note-taking app built with **React** and **Tailwind CSS**, with data persisted in **localStorage**.

This project is still in progress. The goal is to ship a clean “MVP notebook” first, then iterate on features like favorites, recents sorting, and a more complete trash/restore workflow.

## Tech stack

- React (Vite)
- Tailwind CSS
- lucide-react (icons)
- localStorage (persistence)

## Quick start

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Current features (what works now)

- Create a new note (defaults to **Untitled Note**)
- Edit note title and body
- Auto-save to **localStorage**
- Search notes by title or body
- Mark / unmark notes as favorite (⭐) from the editor
- Soft-delete notes (move to “trash”) and restore them
- Permanently delete notes from the list (when viewing deleted notes)

## How it’s structured

```text
src/
├─ App.jsx                  # state + filtering + persistence
├─ Components/
│  ├─ SideBar.jsx           # navigation (all/favorites/recents/trash) + new note
│  ├─ NoteList.jsx          # list + search + restore/permanent delete controls
│  └─ Editor.jsx            # editor view + favorite + trash controls
├─ index.css
└─ main.jsx
```

## Known issues / unfinished parts

These are intentionally listed so the next work session is clear.

- **View keys mismatch**: `SideBar` uses view names like `Favorites`, `Recents`, `Deleted`, while the active styles and initial state use lowercase values (e.g. `favorites`, `recents`, `deleted`). This can make filtering/highlighting inconsistent.
- **Recents behavior is not final**: current implementation treats “recent” as “edited within the last 24 hours”, but the intended behavior is “sort by last modified and limit to top 20”.
- **Favorites view behavior needs refining**: decide whether deleted favorites should appear under favorites or only under trash.
- Search input styling could be improved for the dark theme.

## Next steps checklist

### UI / UX
- [ ] Add favorite toggle in **NoteList** (not only in Editor)
- [ ] Improve search bar styling (bg/text/placeholder)
- [ ] Add empty states (no notes, no selection, no matches)

### Views & filtering
- [ ] Standardize `currentView` values to one convention (recommended: `all`, `favorites`, `recents`, `deleted`)
- [ ] Implement Recents as: sort by `lastModified` desc + limit to 20
- [ ] Decide whether Favorites should exclude deleted notes

### Trash workflow
- [ ] Add `deletedAt` timestamp
- [ ] Add “Restore” / “Delete forever” actions in the Editor when viewing deleted notes
- [ ] Add an “Empty trash” button (optional)

### Maintenance
- [ ] Add screenshots / GIF to README
- [ ] Add a license file (none in the repo yet)

---

### Notes

This app stores notes in the browser using `localStorage`. Clearing browser storage will remove notes.