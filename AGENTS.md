# AGENTS.md

## Project: Neel Madhav Organics (Inventory & Billing System)

### Architecture
- **Frontend:** React + TypeScript + TailwindCSS + Framer Motion.
- **Backend:** Rust (Tauri) + SQLite.
- **Goal:** 100-Year Robustness, "Pen Drive" Portability, "Never Seen Before" UI.

### Development Guidelines
1.  **Strict Typing:** Always use interfaces in `src/types/index.ts`.
2.  **UI Components:** Use `GlassCard`, `NeonButton` from `src/components/ui`.
3.  **State Management:** Use Local State for forms, React Query (or simple `useEffect`) for Data fetching.
4.  **Backend Logic:** All business logic (Pricing, Stock Deduction, Ledger) MUST live in Rust (`src-tauri/src/inventory.rs`). The Frontend is just a View.

### How to Run (Development)
1.  `npm install`
2.  `npm run dev` (Frontend only)
3.  `npm run tauri dev` (Full App)

### How to Build (Release)
1.  `npm run tauri build`
2.  Copy the output `.exe` (or App bundle) AND the `neel_madhav_data.sqlite` to the Pen Drive.

### Robustness Checklist
- [x] SQLite WAL Mode enabled (Prevents corruption).
- [x] Rust Decimal used for all currency (Prevents float errors).
- [ ] Automated Backup Logic (To be implemented).
