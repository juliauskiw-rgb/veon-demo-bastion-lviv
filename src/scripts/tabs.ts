// Tabs «Дітям / Дорослим / Персонально» (WAI-ARIA tabs pattern) + wall bricks that open the right tab.
// Without JS every panel is shown one after another with its own heading.
export function initTabs(): void {
  const root = document.querySelector<HTMLElement>("[data-tabs]");
  if (!root) return;
  const list = root.querySelector<HTMLElement>('[role="tablist"]');
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
  if (!list || !tabs.length) return;
  list.hidden = false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const select = (id: string, focus = false): void => {
    tabs.forEach((t, i) => {
      const on = t.dataset.tab === id;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      if (on) {
        list.style.setProperty("--tab-index", String(i));
        if (focus) t.focus();
      }
    });
    panels.forEach((p) => {
      const on = p.dataset.panel === id;
      const wasHidden = p.hidden;
      p.hidden = !on;
      p.classList.remove("is-entering");
      if (on && wasHidden && !reduce.matches) {
        void p.offsetWidth; // restart the row animation
        p.classList.add("is-entering");
      }
    });
  };

  select(tabs[0].dataset.tab ?? "kids");

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t.dataset.tab ?? ""));
    t.addEventListener("keydown", (e) => {
      let next = -1;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next < 0) return;
      e.preventDefault();
      select(tabs[next].dataset.tab ?? "", true);
    });
  });

  // Bricks of the hero wall: open the tab where the discipline is and mark its row.
  document.querySelectorAll<HTMLAnchorElement>("a.brick[data-tab]").forEach((a) => {
    a.addEventListener("click", () => {
      const tab = a.dataset.tab ?? "";
      select(tab);
      root.querySelectorAll(".row.is-picked").forEach((r) => r.classList.remove("is-picked"));
      root.querySelector(`[data-panel="${tab}"] .row[data-disc="${a.dataset.disc ?? ""}"]`)?.classList.add("is-picked");
    });
  });
}
