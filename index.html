/* =========================================================================
   Mind Loops — MVP
   אימון מנטלי יומי קצר לשינוי דפוסי חשיבה ובניית זהות.
   Vanilla JS SPA. כל הנתונים נשמרים ב-localStorage (ללא backend).
   ========================================================================= */

(() => {
  "use strict";

  /* ----------------------------- Constants ----------------------------- */

  const LS_SESSION = "mlos.session";          // אימייל המשתמש המחובר
  const userKey = (email) => `mlos.user.${email.toLowerCase()}`;

  // דפוסים נפוצים שמוצעים אוטומטית (אפשר גם להקליד חופשי)
  const COMMON_PATTERNS = [
    "השוואה לאחרים",
    "דחיית שיחות מכירה",
    "פחד מתמחור",
    "דחיינות",
    "ספק עצמי",
    "פרפקציוניזם",
    "פחד מדחייה",
    "תסמונת המתחזה",
    "התפזרות / חוסר פוקוס",
    "פחד מחשיפה",
  ];

  // משפטי חיזוק זהות מתחלפים — מותאמים למגדר (נקבה / זכר / ניטרלי)
  const AFFIRMATIONS = {
    f: [
      "אני פועלת גם בלי ודאות.",
      "אני בונה ביטחון דרך עשייה.",
      "אני לא מחכה להרגיש מוכנה.",
      "כל פעולה קטנה היא הצבעה לזהות החדשה שלי.",
      "אני בוחרת אומץ על פני נוחות.",
      "התקדמות חשובה יותר משלמות.",
      "אני מרשה לעצמי להיות לא מושלמת ולהתקדם בכל זאת.",
    ],
    m: [
      "אני פועל גם בלי ודאות.",
      "אני בונה ביטחון דרך עשייה.",
      "אני לא מחכה להרגיש מוכן.",
      "כל פעולה קטנה היא הצבעה לזהות החדשה שלי.",
      "אני בוחר אומץ על פני נוחות.",
      "התקדמות חשובה יותר משלמות.",
      "אני מרשה לעצמי להיות לא מושלם ולהתקדם בכל זאת.",
    ],
    n: [
      "לפעול גם בלי ודאות.",
      "לבנות ביטחון דרך עשייה.",
      "לא לחכות עד שמרגישים מוכנים.",
      "כל פעולה קטנה היא הצבעה לזהות החדשה שלי.",
      "לבחור אומץ על פני נוחות.",
      "התקדמות חשובה יותר משלמות.",
      "מותר להיות לא מושלמים ולהתקדם בכל זאת.",
    ],
  };

  // רמזים מתחלפים לשדות ההכרת תודה — מותאמים למגדר
  const GRAT_PROMPTS = {
    f: [
      "משהו קטן שהרגיש טוב היום…",
      "מישהו שאני מודה לו…",
      "משהו בעצמי שאני מעריכה…",
      "רגע שגרם לי לחייך…",
      "משהו שהשתפר לאחרונה…",
    ],
    m: [
      "משהו קטן שהרגיש טוב היום…",
      "מישהו שאני מודה לו…",
      "משהו בעצמי שאני מעריך…",
      "רגע שגרם לי לחייך…",
      "משהו שהשתפר לאחרונה…",
    ],
    n: [
      "משהו קטן שהרגיש טוב היום…",
      "מישהו שמגיע לו תודה…",
      "משהו בעצמי שכדאי להעריך…",
      "רגע שגרם לי לחייך…",
      "משהו שהשתפר לאחרונה…",
    ],
  };

  const STEPS = 5;

  // הצעות ל"הזהות שלי" (כוכב צפון) — ניסוח ניטרלי, ניתן לעריכה חופשית
  const IDENTITY_SUGGESTIONS = [
    "מי שפועל בלי לחכות להרגיש מוכן",
    "האדם הרגוע והממוקד שאני נהיה",
    "מי שגובה מחיר מלא בלי להתנצל",
    "מי שמפרסם לפני שזה מושלם",
    "האדם שבוחר אומץ על פני נוחות",
  ];

  // מיקרו-אתגרים בני 3 ימים לשבירת דפוס חוזר (ניסוח אינפיניטיבי ניטרלי)
  const CHALLENGE_TASKS = {
    "השוואה לאחרים": [
      "יום אחד בלי להציץ בפרופילים של אחרים בתחום",
      "לפרסם משהו משלך — בלי להשוות אותו לאף אחד",
      "לכתוב 3 דברים שרק את/ה מביא/ה לשולחן",
    ],
    "דחיית שיחות מכירה": [
      "ליזום שיחת מכירה אחת היום",
      "לשלוח הצעת מחיר שנדחתה",
      "לבקש מלקוח מרוצה המלצה",
    ],
    "פחד מתמחור": [
      "לשלוח הצעה במחיר מלא, בלי הנחה",
      "להעלות מחיר אחד ב-10%",
      "לומר את המחיר בקול — בלי להתנצל",
    ],
    "דחיינות": [
      "לעבוד 25 דקות על המשימה הכי נדחית",
      "לפצל את המשימה ל-3 צעדים ולעשות את הראשון",
      "לסיים דבר אחד לפני הצהריים",
    ],
    "פרפקציוניזם": [
      "לשלוח משהו ב-80% מוכן",
      "להגדיר טיימר — ולעצור כשהוא מצלצל",
      "לפרסם בלי לערוך יותר מפעם אחת",
    ],
    "ספק עצמי": [
      "לכתוב 3 הצלחות מהשבוע האחרון",
      "לעשות דבר אחד שמפחיד קצת",
      "לבקש פידבק מאדם אחד",
    ],
  };
  const CHALLENGE_DEFAULT = [
    "לזהות את הרגע שבו הדפוס מופיע — ולעצור",
    "לבחור פעולה הפוכה לדפוס, קטנה אך אמיתית",
    "לחגוג שעשית את זה — ולכתוב מה הרגשת",
  ];
  const challengeTasksFor = (pattern) => CHALLENGE_TASKS[pattern] || CHALLENGE_DEFAULT;

  /* ----------------------- Gender-aware text ---------------------------- */
  // מגדר נוכחי: 'f' נקבה · 'm' זכר · 'n' ניטרלי
  const G = () => (state.user && state.user.gender) || "f";
  // בחירת מחרוזת לפי מגדר; חוסר ערך נופל לניטרלי ואז לנקבה
  const gx = (variants) => variants[G()] || variants.n || variants.f;
  const affirmations = () => AFFIRMATIONS[G()] || AFFIRMATIONS.f;
  const gratPrompts = () => GRAT_PROMPTS[G()] || GRAT_PROMPTS.f;
  const randAffirmation = () => {
    const a = affirmations();
    return a[Math.floor(Math.random() * a.length)];
  };

  /* ----------------------------- Utilities ----------------------------- */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const tpl = (id) => $(`#${id}`).content.cloneNode(true);

  const todayKey = (d = new Date()) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const fmtDate = (key) => {
    const [y, m, d] = key.split("-");
    return new Date(y, m - 1, d).toLocaleDateString("he-IL", {
      weekday: "long", day: "numeric", month: "long",
    });
  };

  const daysBetween = (a, b) =>
    Math.round((new Date(a) - new Date(b)) / 86400000);

  let _toastTimer;
  const toast = (msg) => {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add("is-show"));
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => el.classList.remove("is-show"), 2200);
  };

  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const reducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // חגיגה כיפית ומעודדת בסיום משימה — קונפטי + כרטיס עידוד
  function celebrate({ emoji = "🎉", title = "כל הכבוד!", sub = "" } = {}) {
    const overlay = document.createElement("div");
    overlay.className = "celebrate";
    overlay.innerHTML = `
      <div class="celebrate__card">
        <div class="celebrate__emoji">${emoji}</div>
        <div class="celebrate__title">${esc(title)}</div>
        ${sub ? `<div class="celebrate__sub">${esc(sub)}</div>` : ""}
      </div>`;
    document.body.appendChild(overlay);

    if (!reducedMotion()) {
      const colors = ["#0284c7", "#0ea5e9", "#10b981", "#14b8a6", "#22d3ee", "#34d399", "#f7b32b"];
      for (let i = 0; i < 90; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.insetInlineStart = Math.random() * 100 + "vw";
        c.style.background = colors[i % colors.length];
        c.style.animationDuration = (1.6 + Math.random() * 1.5) + "s";
        c.style.animationDelay = (Math.random() * 0.4) + "s";
        c.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        if (Math.random() < 0.5) c.style.borderRadius = "50%";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3600);
      }
    }
    const done = () => { overlay.classList.add("is-out"); setTimeout(() => overlay.remove(), 400); };
    overlay.addEventListener("click", done);
    setTimeout(done, 2600);
  }

  /* ------------------------------ Storage ------------------------------ */

  const Store = {
    getSession: () => localStorage.getItem(LS_SESSION),
    setSession: (email) => localStorage.setItem(LS_SESSION, email),
    clearSession: () => localStorage.removeItem(LS_SESSION),

    loadUser(email) {
      const raw = localStorage.getItem(userKey(email));
      if (raw) {
        try {
          const u = JSON.parse(raw);
          if (!Array.isArray(u.entries)) u.entries = [];
          if (!Array.isArray(u.gratitude)) u.gratitude = [];
          if (!Array.isArray(u.challenges)) u.challenges = [];
          if (!u.reminder) u.reminder = { enabled: false, time: "20:00" };
          if (!u.gender) u.gender = "f";
          if (typeof u.identity !== "string") u.identity = "";
          if (typeof u.onboardDone !== "boolean") u.onboardDone = true; // משתמשים קיימים
          return u;
        } catch (_) { /* fallthrough */ }
      }
      return {
        email, name: "", createdAt: todayKey(), gender: "f",
        identity: "", onboardDone: false,
        entries: [], gratitude: [], challenges: [],
        reminder: { enabled: false, time: "20:00" },
      };
    },

    saveUser(user) {
      localStorage.setItem(userKey(user.email), JSON.stringify(user));
    },
  };

  /* --------------------------- App State ------------------------------- */

  const state = {
    user: null,
    view: "daily",
    draft: null,   // טיוטת התרגול היומי הנוכחי
    step: 0,
  };

  /* --------------------------- Domain logic ---------------------------- */

  const getEntry = (dateKey) =>
    state.user.entries.find((e) => e.date === dateKey) || null;

  const blankDraft = () => ({
    date: todayKey(),
    pattern: "",
    trigger: "",
    thought: "",
    oldAction: "",
    identityAction: "",
    oneAction: "",
    affirmation: randAffirmation(),
    completed: false,
    actionDone: false,
    createdAt: new Date().toISOString(),
  });

  function saveEntry(entry) {
    const idx = state.user.entries.findIndex((e) => e.date === entry.date);
    if (idx >= 0) state.user.entries[idx] = entry;
    else state.user.entries.push(entry);
    state.user.entries.sort((a, b) => (a.date < b.date ? 1 : -1));
    Store.saveUser(state.user);
  }

  // חישוב streak — ימים רצופים עם תרגול שהושלם
  function computeStreak() {
    const done = new Set(
      state.user.entries.filter((e) => e.completed).map((e) => e.date)
    );
    let streak = 0;
    let cursor = new Date();
    // אם היום עדיין לא בוצע — מתחילים לספור מאתמול
    if (!done.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (done.has(todayKey(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  // Pattern Tracker — ספירת דפוסים בחלון זמן (ברירת מחדל: 7 ימים)
  function patternStats(days = 7) {
    const since = todayKey(new Date(Date.now() - (days - 1) * 86400000));
    const counts = {};
    state.user.entries
      .filter((e) => e.completed && e.pattern && e.date >= since)
      .forEach((e) => { counts[e.pattern] = (counts[e.pattern] || 0) + 1; });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  function weeklySummary() {
    const since = todayKey(new Date(Date.now() - 6 * 86400000));
    const week = state.user.entries.filter((e) => e.date >= since);
    const completed = week.filter((e) => e.completed);
    const actionsDone = completed.filter((e) => e.actionDone);
    const stats = patternStats(7);
    const top = stats[0] || null;
    return {
      practiced: completed.length,
      actionsDone: actionsDone.length,
      topPattern: top,
      lastAction: completed[0] ? completed[0].oneAction : "",
      allStats: stats,
    };
  }

  /* ----- Gratitude ----- */
  const getGratitude = (dateKey) =>
    state.user.gratitude.find((g) => g.date === dateKey) || null;

  function saveGratitude(items) {
    const clean = items.map((s) => s.trim()).filter(Boolean);
    const date = todayKey();
    const idx = state.user.gratitude.findIndex((g) => g.date === date);
    if (clean.length === 0) {
      if (idx >= 0) state.user.gratitude.splice(idx, 1);
    } else {
      const rec = { date, items: clean, createdAt: new Date().toISOString() };
      if (idx >= 0) state.user.gratitude[idx] = rec;
      else state.user.gratitude.push(rec);
    }
    state.user.gratitude.sort((a, b) => (a.date < b.date ? 1 : -1));
    Store.saveUser(state.user);
  }

  function gratitudeStreak() {
    const done = new Set(state.user.gratitude.map((g) => g.date));
    let streak = 0;
    let cursor = new Date();
    if (!done.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (done.has(todayKey(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  const gratitudeTotal = () =>
    state.user.gratitude.reduce((s, g) => s + g.items.length, 0);

  /* ----------------------- Micro-challenges ---------------------------- */

  const activeChallenge = () =>
    state.user.challenges.find((c) => c.status === "active") || null;

  // דפוס שחזר 3+ פעמים (3 שבועות אחרונים) וטרם טופל באתגר
  function suggestedChallengePattern() {
    if (activeChallenge()) return null; // אתגר אחד בכל פעם
    const handled = new Set(
      state.user.challenges
        .filter((c) => c.status === "active" || c.status === "done")
        .map((c) => c.pattern)
    );
    const dismissedToday = new Set(
      state.user.challenges
        .filter((c) => c.status === "dismissed" && c.dismissedOn === todayKey())
        .map((c) => c.pattern)
    );
    const top = patternStats(21).find(
      (p) => p.count >= 3 && !handled.has(p.name) && !dismissedToday.has(p.name)
    );
    return top ? top.name : null;
  }

  function startChallenge(pattern) {
    state.user.challenges.push({
      id: "c" + Date.now(),
      pattern,
      tasks: challengeTasksFor(pattern),
      done: [false, false, false],
      status: "active",
      startedOn: todayKey(),
    });
    Store.saveUser(state.user);
  }

  function toggleChallengeDay(ch, i) {
    ch.done[i] = !ch.done[i];
    if (ch.done.every(Boolean)) {
      ch.status = "done";
      ch.completedOn = todayKey();
    } else if (ch.status === "done") {
      ch.status = "active";
      delete ch.completedOn;
    }
    Store.saveUser(state.user);
  }

  function dismissChallenge(pattern) {
    state.user.challenges.push({
      id: "c" + Date.now(), pattern, status: "dismissed", dismissedOn: todayKey(),
    });
    Store.saveUser(state.user);
  }

  const challengesDone = () =>
    state.user.challenges.filter((c) => c.status === "done").length;

  /* ---------------------------- Reminders ------------------------------ */

  let reminderTimer = null;
  let lastNudgeDate = null;

  const notifSupported = () => "Notification" in window;

  // הצגת התראה — מעדיף את ה-Service Worker (אמין במובייל), אחרת Notification, אחרת toast
  function showNotify(title, body) {
    if (notifSupported() && Notification.permission === "granted") {
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready
          .then((reg) => reg.active && reg.active.postMessage({ type: "show-reminder", title, body }))
          .catch(() => { try { new Notification(title, { body }); } catch (_) { toast(body); } });
        return;
      }
      try { new Notification(title, { body, tag: "mlos-daily" }); return; }
      catch (_) { /* fall through */ }
    }
    toast(body);
  }

  function msUntilNext(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    const now = new Date();
    const next = new Date();
    next.setHours(h, m, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1); // היום כבר עבר → מחר
    return next - now;
  }

  function fireReminder() {
    // לא להציק אם כבר השלימה את האימון היום
    const doneToday = !!(getEntry(todayKey()) || {}).completed;
    if (doneToday) { scheduleReminder(); return; }
    if (lastNudgeDate === todayKey()) { scheduleReminder(); return; }
    lastNudgeDate = todayKey();

    const body = `${state.user.name ? state.user.name + ", " : ""}5 דקות לגרסה הבאה שלך. בואי נעשה Daily Reset 🔁`;
    showNotify("Mind Loops", body);
    scheduleReminder();
  }

  function scheduleReminder() {
    if (reminderTimer) { clearTimeout(reminderTimer); reminderTimer = null; }
    const r = state.user && state.user.reminder;
    if (!r || !r.enabled) return;
    // setTimeout מוגבל ל-~24.8 ימים — מספיק טוב לתזכורת יומית
    reminderTimer = setTimeout(fireReminder, msUntilNext(r.time));
  }

  /* ----- Calendar sync (always-on reminders, no backend) ----- */
  const pad2 = (n) => String(n).padStart(2, "0");

  // טווח האירוע (5 דק') מתוך שעת התזכורת — זמן מקומי "צף"
  function calRange(time) {
    const [h, m] = (time || "20:00").split(":").map(Number);
    const s = new Date(); s.setHours(h, m, 0, 0);
    const e = new Date(s.getTime() + 5 * 60000);
    const fmt = (d) =>
      `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}T${pad2(d.getHours())}${pad2(d.getMinutes())}00`;
    return { start: fmt(s), end: fmt(e) };
  }

  const CAL_TITLE = "Mind Loops — אימון יומי 🔁";
  const CAL_DETAILS = "5 דקות לגרסה הבאה שלך. פִתחו את Mind Loops ועשו Daily Reset.";

  function googleCalUrl(time) {
    const { start, end } = calRange(time);
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone) || "UTC";
    const q = new URLSearchParams({
      action: "TEMPLATE",
      text: CAL_TITLE,
      details: CAL_DETAILS,
      dates: `${start}/${end}`,
      ctz: tz,
      recur: "RRULE:FREQ=DAILY",
    });
    return "https://calendar.google.com/calendar/render?" + q.toString();
  }

  function downloadICS(time) {
    const { start, end } = calRange(time);
    const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Mind Loops//HE//", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:mlos-${Date.now()}@mindloops`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      "RRULE:FREQ=DAILY",
      `SUMMARY:${CAL_TITLE}`,
      `DESCRIPTION:${CAL_DETAILS}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:Mind Loops", "TRIGGER:PT0M", "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "mind-loops-reminder.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function ensureNotifyPermission() {
    if (!notifSupported()) return false;
    if (Notification.permission === "granted") return true;
    if (Notification.permission === "denied") return false;
    try { return (await Notification.requestPermission()) === "granted"; }
    catch (_) { return false; }
  }

  function openReminderModal() {
    if ($(".modal-overlay")) return;
    const node = tpl("tpl-reminder");
    document.body.appendChild(node);
    const overlay = $(".modal-overlay");
    requestAnimationFrame(() => overlay.classList.add("is-show"));

    const r = state.user.reminder;
    const enabledEl = $("[data-rem-enabled]", overlay);
    const timeEl = $("[data-rem-time]", overlay);
    const statusEl = $("[data-rem-status]", overlay);
    enabledEl.checked = !!r.enabled;
    timeEl.value = r.time || "20:00";

    const refreshStatus = () => {
      if (!notifSupported()) {
        statusEl.textContent = "הדפדפן לא תומך בהתראות — נשתמש בתזכורת בתוך האפליקציה.";
      } else if (Notification.permission === "denied") {
        statusEl.textContent = "התראות חסומות בדפדפן — נציג תזכורת בתוך האפליקציה.";
      } else if (enabledEl.checked && r.enabled) {
        statusEl.textContent = `התזכורת פעילה ל-${r.time} בכל יום ✓`;
      } else {
        statusEl.textContent = "";
      }
    };
    refreshStatus();

    const close = () => {
      overlay.classList.remove("is-show");
      setTimeout(() => overlay.remove(), 180);
    };
    $("[data-close]", overlay).addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

    $("[data-rem-test]", overlay).addEventListener("click", async () => {
      await ensureNotifyPermission();
      const body = `${state.user.name ? state.user.name + ", " : ""}5 דקות לגרסה הבאה שלך 🔁`;
      showNotify("Mind Loops", body);
    });

    $("[data-rem-save]", overlay).addEventListener("click", async () => {
      const enabled = enabledEl.checked;
      if (enabled) await ensureNotifyPermission();
      state.user.reminder = { enabled, time: timeEl.value || "20:00" };
      Store.saveUser(state.user);
      scheduleReminder();
      updateBell();
      toast(enabled ? `תזכורת נקבעה ל-${state.user.reminder.time} ⏰` : "התזכורת בוטלה");
      close();
    });

    $("[data-cal-google]", overlay).addEventListener("click", () => {
      window.open(googleCalUrl(timeEl.value || "20:00"), "_blank", "noopener");
      toast("נפתח אירוע יומי ב-Google Calendar 📅");
    });
    $("[data-cal-ics]", overlay).addEventListener("click", () => {
      downloadICS(timeEl.value || "20:00");
      toast("הורד קובץ יומן — פתחי אותו כדי להוסיף אירוע יומי 📅");
    });
  }

  function updateBell() {
    const dot = $("[data-bell-dot]");
    if (dot) dot.hidden = !(state.user && state.user.reminder && state.user.reminder.enabled);
  }

  /* ----- Identity edit modal ----- */
  function openIdentityModal(onSaved) {
    if ($(".modal-overlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-label="הזהות שלי">
        <button class="modal__close" data-close aria-label="סגירה">✕</button>
        <div class="modal__icon">⭐</div>
        <h2 class="modal__title">הזהות שלי</h2>
        <p class="modal__sub">כוכב הצפון שאליו כל פעולה יומית מקרבת אותך.</p>
        <label class="field">
          <span>הזהות שאני בונה לעצמי</span>
          <input type="text" data-id-input value="${esc(state.user.identity || "")}" placeholder="לדוגמה: היזם/ית הבטוח/ה שגובה מחיר מלא" />
        </label>
        <div class="chip-group">
          ${IDENTITY_SUGGESTIONS.map((s) => `<button type="button" class="chip" data-id-pick="${esc(s)}">${esc(s)}</button>`).join("")}
        </div>
        <div class="step-actions">
          <button type="button" class="btn btn--primary btn--block" data-id-save>שמירה 🌟</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("is-show"));
    const input = $("[data-id-input]", overlay);
    const close = () => { overlay.classList.remove("is-show"); setTimeout(() => overlay.remove(), 180); };
    $$("[data-id-pick]", overlay).forEach((c) =>
      c.addEventListener("click", () => { input.value = c.dataset.idPick; input.focus(); })
    );
    $("[data-close]", overlay).addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    $("[data-id-save]", overlay).addEventListener("click", () => {
      state.user.identity = input.value.trim();
      Store.saveUser(state.user);
      toast("הזהות שלך עודכנה 🌟");
      close();
      if (onSaved) onSaved();
    });
  }

  /* ----- Daily extras: North-star identity + micro-challenge ----- */
  function northStarHtml() {
    const id = state.user.identity;
    if (id) {
      return `<button class="northstar" data-identity-edit>
        <span class="northstar__star">⭐</span>
        <span class="northstar__text"><span class="northstar__label">בדרך אל</span>
        <span class="northstar__val">«${esc(id)}»</span></span>
        <span class="northstar__edit">✎</span></button>`;
    }
    return `<button class="northstar northstar--empty" data-identity-edit>
      <span class="northstar__star">⭐</span> להגדיר את הזהות שאליה אני חותר/ת</button>`;
  }

  function challengeCardHtml() {
    const ch = activeChallenge();
    if (ch) {
      const doneN = ch.done.filter(Boolean).length;
      return `<div class="challenge">
        <div class="challenge__head">
          <span class="challenge__badge">🎯 אתגר 3 ימים</span>
          <span class="challenge__pattern">${esc(ch.pattern)}</span>
        </div>
        <div class="challenge__tasks">
          ${ch.tasks.map((t, i) => `
            <button type="button" class="challenge__task ${ch.done[i] ? "is-done" : ""}" data-ch-day="${i}">
              <span class="challenge__check">${ch.done[i] ? "✓" : i + 1}</span>
              <span class="challenge__tasktext">${esc(t)}</span>
            </button>`).join("")}
        </div>
        <div class="challenge__foot">${doneN}/3 הושלמו${doneN === 3 ? " — כל הכבוד! 🎉" : ""}</div>
      </div>`;
    }
    const sp = suggestedChallengePattern();
    if (sp) {
      return `<div class="challenge challenge--suggest" data-suggest="${esc(sp)}">
        <span class="challenge__badge challenge__badge--alert">⚡ דפוס חוזר</span>
        <p class="challenge__msg">הדפוס «${esc(sp)}» חזר 3 פעמים לאחרונה. רוצה אתגר קצר של 3 ימים כדי לשבור אותו?</p>
        <div class="step-actions">
          <button type="button" class="btn btn--ghost" data-ch-dismiss>לא עכשיו</button>
          <button type="button" class="btn btn--primary" data-ch-start>מתחילים 🎯</button>
        </div>
      </div>`;
    }
    return "";
  }

  function wireDailyExtras(root) {
    const ed = $("[data-identity-edit]", root);
    if (ed) ed.addEventListener("click", () => openIdentityModal(() => renderShell()));

    const start = $("[data-ch-start]", root);
    if (start) start.addEventListener("click", () => {
      const sp = $("[data-suggest]", root).dataset.suggest;
      startChallenge(sp);
      toast("יצאנו לדרך — אתגר 3 ימים 🎯");
      renderDaily($("[data-view]"));
    });
    const dismiss = $("[data-ch-dismiss]", root);
    if (dismiss) dismiss.addEventListener("click", () => {
      dismissChallenge($("[data-suggest]", root).dataset.suggest);
      renderDaily($("[data-view]"));
    });
    $$("[data-ch-day]", root).forEach((btn) => btn.addEventListener("click", () => {
      const ch = activeChallenge();
      if (!ch) return;
      toggleChallengeDay(ch, Number(btn.dataset.chDay));
      if (ch.status === "done") {
        celebrate({ emoji: "💪", title: "אתגר הושלם!", sub: "שברת את הדפוס. זה אתֿ/ה החדש/ה." });
      }
      $("[data-streak]").textContent = `🔥 ${computeStreak()}`;
      renderDaily($("[data-view]"));
    }));
  }

  /* ------------------------------ Render ------------------------------- */

  const app = $("#app");

  function render() {
    if (!state.user) return renderLogin();
    if (!state.user.onboardDone) return renderOnboarding();
    renderShell();
  }

  /* ----- Onboarding: define "My Identity" ----- */
  function renderOnboarding() {
    app.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "screen screen--center";
    wrap.innerHTML = `
      <div class="brand">
        <div class="brand__logo">⭐</div>
        <h1 class="brand__name">מי את/ה נהיֶה?</h1>
        <p class="brand__tag">זה כוכב הצפון שלך. כל פעולה יומית היא צעד קטן לעבר הזהות הזו.</p>
      </div>
      <div class="card">
        <label class="field">
          <span>הזהות שאני בונה לעצמי</span>
          <input type="text" data-identity-input placeholder="לדוגמה: היזם/ית הבטוח/ה שגובה מחיר מלא" />
        </label>
        <div class="chip-group" data-identity-chips>
          ${IDENTITY_SUGGESTIONS.map((s) => `<button type="button" class="chip" data-identity-pick="${esc(s)}">${esc(s)}</button>`).join("")}
        </div>
        <div class="step-actions">
          <button type="button" class="btn btn--ghost" data-identity-skip>דלג/י לעכשיו</button>
          <button type="button" class="btn btn--primary" data-identity-save>זו אני 🌟</button>
        </div>
      </div>`;
    app.appendChild(wrap);

    const input = $("[data-identity-input]", wrap);
    $$("[data-identity-pick]", wrap).forEach((c) =>
      c.addEventListener("click", () => { input.value = c.dataset.identityPick; input.focus(); })
    );
    const finish = (identity) => {
      state.user.identity = identity;
      state.user.onboardDone = true;
      Store.saveUser(state.user);
      state.view = "daily";
      renderShell();
    };
    $("[data-identity-save]", wrap).addEventListener("click", () => {
      const v = input.value.trim();
      if (!v) { toast("כתבו משפט אחד — או דלגו"); return; }
      finish(v);
      toast("נהדר. בנינו לך כוכב צפון 🌟");
    });
    $("[data-identity-skip]", wrap).addEventListener("click", () => finish(""));
  }

  /* ----- Login ----- */
  function renderLogin() {
    app.innerHTML = "";
    app.appendChild(tpl("tpl-login"));
    const form = $("#login-form");

    // בחירת מגדר (פנייה)
    let gender = "f";
    $$("[data-gender]", form).forEach((chip) => {
      chip.addEventListener("click", () => {
        gender = chip.dataset.gender;
        $$("[data-gender]", form).forEach((c) => c.classList.toggle("is-selected", c === chip));
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const email = String(fd.get("email")).trim();
      const name = String(fd.get("name")).trim();
      if (!email || !name) return;
      const user = Store.loadUser(email);
      user.name = name;
      user.gender = gender;
      Store.saveUser(user);
      Store.setSession(email);
      state.user = user;
      state.view = "daily";
      render();
      scheduleReminder();
    });
  }

  /* ----- Shell ----- */
  function renderShell() {
    app.innerHTML = "";
    app.appendChild(tpl("tpl-shell"));

    $("[data-username]").textContent = state.user.name;
    $("[data-streak]").textContent = `🔥 ${computeStreak()}`;
    $("[data-reminder-open]").addEventListener("click", openReminderModal);
    updateBell();
    $("[data-logout]").addEventListener("click", () => {
      Store.clearSession();
      state.user = null;
      render();
    });

    $$(".navbtn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.nav === state.view);
      btn.addEventListener("click", () => {
        state.view = btn.dataset.nav;
        if (state.view === "daily") { state.draft = null; state.step = 0; }
        renderShell();
      });
    });

    const views = {
      daily: renderDaily,
      gratitude: renderGratitude,
      patterns: renderPatterns,
      weekly: renderWeekly,
      history: renderHistory,
    };
    (views[state.view] || renderDaily)($("[data-view]"));
  }

  /* ----- Daily Flow ----- */
  function renderDaily(root) {
    const existing = getEntry(todayKey());

    // אם כבר הושלם היום — מציגים מסך "בוצע"
    if (existing && existing.completed && !state.draft) {
      return renderDailyDone(root, existing);
    }

    if (!state.draft) {
      state.draft = existing ? { ...existing } : blankDraft();
      state.step = 0;
    }

    const d = state.draft;
    const extras = state.step === 0 ? northStarHtml() + challengeCardHtml() : "";
    root.innerHTML = `
      <div class="view-head">
        <h2>Daily Reset</h2>
        <p>${esc(fmtDate(d.date))} · 5 דקות לגרסה הבאה שלך</p>
      </div>
      ${extras}
      <div class="progress">
        ${Array.from({ length: STEPS }, (_, i) =>
          `<div class="progress__dot ${i < state.step ? "is-done" : ""} ${i === state.step ? "is-current" : ""}"></div>`
        ).join("")}
      </div>
      <div class="card" data-step-card></div>
    `;
    renderStep($("[data-step-card]", root));
    if (state.step === 0) wireDailyExtras(root);
  }

  function renderStep(card) {
    const d = state.draft;
    const steps = [
      // 0 — זיהוי דפוס
      () => `
        <div class="step__badge">🔍</div>
        <div class="step__kicker">שלב 1 מתוך 5</div>
        <h3 class="step__title">זיהוי דפוס</h3>
        <p class="step__hint">מה הדפוס שהיום עצר אותי?</p>
        <div class="chip-group" data-chips>
          ${COMMON_PATTERNS.map((p) =>
            `<button type="button" class="chip ${d.pattern === p ? "is-selected" : ""}" data-pattern="${esc(p)}">${esc(p)}</button>`
          ).join("")}
        </div>
        <label class="field">
          <span>או אפשר לכתוב דפוס משלך</span>
          <input type="text" data-input="pattern" value="${esc(d.pattern)}" placeholder="לדוגמה: דחיית פוסט" />
        </label>
      `,
      // 1 — ניתוח לופ
      () => `
        <div class="step__badge">🔄</div>
        <div class="step__kicker">שלב 2 מתוך 5</div>
        <h3 class="step__title">ניתוח הלופ</h3>
        <p class="step__hint">נפרק את הדפוס "${esc(d.pattern || "")}" לשלושה חלקים.</p>
        <div class="loop-grid">
          <label class="field"><span>⚡ טריגר — מה הפעיל את זה?</span>
            <textarea data-input="trigger" placeholder="מה קרה רגע לפני?">${esc(d.trigger)}</textarea></label>
          <label class="field"><span>💭 מחשבה — מה עבר לי בראש?</span>
            <textarea data-input="thought" placeholder="המחשבה האוטומטית">${esc(d.thought)}</textarea></label>
          <label class="field"><span>🔁 פעולה — מה עשיתי בפועל?</span>
            <textarea data-input="oldAction" placeholder="התגובה הרגילה">${esc(d.oldAction)}</textarea></label>
        </div>
      `,
      // 2 — שבירת זהות
      () => `
        <div class="step__badge">🦋</div>
        <div class="step__kicker">שלב 3 מתוך 5</div>
        <h3 class="step__title">שבירת זהות</h3>
        <p class="step__hint">איך הייתה פועלת הגרסה הבטוחה שלך באותו רגע?</p>
        <label class="field">
          <span>הגרסה הבטוחה שלי הייתה…</span>
          <textarea data-input="identityAction" placeholder="תארי בדיוק מה היא הייתה עושה אחרת">${esc(d.identityAction)}</textarea>
        </label>
      `,
      // 3 — פעולה אחת
      () => `
        <div class="step__badge">🎯</div>
        <div class="step__kicker">שלב 4 מתוך 5</div>
        <h3 class="step__title">פעולה אחת</h3>
        <p class="step__hint">מה הפעולה האחת שאני עושה היום בפועל?</p>
        <label class="field">
          <span>הפעולה שלי להיום</span>
          <textarea data-input="oneAction" placeholder="קונקרטי, קטן, בר-ביצוע היום">${esc(d.oneAction)}</textarea>
        </label>
      `,
      // 4 — חיזוק זהות
      () => `
        <div class="step__badge">💪</div>
        <div class="step__kicker">שלב 5 מתוך 5</div>
        <h3 class="step__title">חיזוק זהות</h3>
        <p class="step__hint">${gx({ f: "קחי נשימה. קראי את המשפט הזה לעצמך.", m: "קח נשימה. קרא את המשפט הזה לעצמך.", n: "רגע של נשימה. קריאת המשפט הזה לעצמך." })}</p>
        <div class="affirm-card">
          <div class="affirm-card__quote">“${esc(d.affirmation)}”</div>
          <div class="affirm-card__by">${gx({ f: "— הזהות שאת בונה", m: "— הזהות שאתה בונה", n: "— הזהות שבונים" })}</div>
        </div>
        <button type="button" class="btn btn--ghost btn--block" data-shuffle>🔀 משפט אחר</button>
      `,
    ];

    card.innerHTML = steps[state.step]() + navHtml();
    wireStep(card);
  }

  function navHtml() {
    const last = state.step === STEPS - 1;
    return `
      <div class="step-actions">
        ${state.step > 0 ? `<button type="button" class="btn btn--ghost" data-back>חזרה</button>` : ""}
        <button type="button" class="btn btn--primary" data-next>${last ? "סיום וסיכום ✓" : "הבא →"}</button>
      </div>
    `;
  }

  function syncInputs(card) {
    $$("[data-input]", card).forEach((el) => {
      state.draft[el.dataset.input] = el.value;
    });
  }

  function wireStep(card) {
    // chips (step 0)
    $$("[data-pattern]", card).forEach((chip) => {
      chip.addEventListener("click", () => {
        state.draft.pattern = chip.dataset.pattern;
        renderStep(card);
      });
    });
    // live sync
    $$("[data-input]", card).forEach((el) => {
      el.addEventListener("input", () => { state.draft[el.dataset.input] = el.value; });
    });
    // shuffle affirmation
    const sh = $("[data-shuffle]", card);
    if (sh) sh.addEventListener("click", () => {
      let a;
      do { a = randAffirmation(); }
      while (a === state.draft.affirmation && affirmations().length > 1);
      state.draft.affirmation = a;
      renderStep(card);
    });

    const back = $("[data-back]", card);
    if (back) back.addEventListener("click", () => {
      syncInputs(card);
      state.step--;
      renderDaily($("[data-view]"));
    });

    $("[data-next]", card).addEventListener("click", () => {
      syncInputs(card);
      if (!validateStep()) return;
      if (state.step < STEPS - 1) {
        state.step++;
        renderDaily($("[data-view]"));
      } else {
        state.draft.completed = true;
        saveEntry({ ...state.draft });
        const id = state.user.identity;
        celebrate({
          emoji: "🎉",
          title: "כל הכבוד! סיימת להיום",
          sub: id ? `עוד צעד אל «${id}»` : "עוד צעד אל הגרסה הבאה שלך",
        });
        state.draft = null;
        state.step = 0;
        renderShell();
      }
    });
  }

  function validateStep() {
    const d = state.draft;
    const need = (val, msg) => { if (!String(val).trim()) { toast(msg); return false; } return true; };
    switch (state.step) {
      case 0: return need(d.pattern, "כדאי לבחור או לכתוב דפוס אחד");
      case 1:
        if (!need(d.trigger, "מה היה הטריגר?")) return false;
        if (!need(d.thought, "מה הייתה המחשבה?")) return false;
        return need(d.oldAction, "מה עשית בפועל?");
      case 2: return need(d.identityAction, "איך הגרסה הבטוחה הייתה פועלת?");
      case 3: return need(d.oneAction, "מה הפעולה האחת להיום?");
      default: return true;
    }
  }

  function renderDailyDone(root, entry) {
    root.innerHTML = `
      <div class="view-head">
        <h2>Daily Reset</h2>
        <p>${esc(fmtDate(entry.date))}</p>
      </div>
      ${northStarHtml()}
      ${challengeCardHtml()}
      <div class="card done">
        <div class="done__emoji">✅</div>
        <div class="done__title">סיימת את האימון להיום</div>
        <p class="done__sub">🔥 ${computeStreak()} ימים רצופים. נתראה מחר.</p>
        <div class="affirm-card">
          <div class="affirm-card__quote">“${esc(entry.affirmation)}”</div>
        </div>
        <div class="history-item__row" style="text-align:right;margin-top:18px">
          <b>הפעולה שלך להיום:</b><br>${esc(entry.oneAction)}
        </div>
        <div class="step-actions">
          <label class="btn btn--ghost" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
            <input type="checkbox" data-action-done ${entry.actionDone ? "checked" : ""} style="width:auto;margin:0">
            ביצעתי את הפעולה
          </label>
          <button type="button" class="btn btn--primary" data-edit>עריכה</button>
        </div>
      </div>
    `;
    $("[data-action-done]", root).addEventListener("change", (e) => {
      entry.actionDone = e.target.checked;
      saveEntry(entry);
      toast(entry.actionDone ? "מעולה — פעולה בוצעה 💪" : "סומן כלא בוצע");
    });
    $("[data-edit]", root).addEventListener("click", () => {
      state.draft = { ...entry };
      state.step = 0;
      renderDaily(root);
    });
    wireDailyExtras(root);
  }

  /* ----- Gratitude ----- */
  function renderGratitude(root) {
    const todayRec = getGratitude(todayKey());
    const past = state.user.gratitude.filter((g) => g.date !== todayKey());
    const items = todayRec ? [...todayRec.items, "", ""].slice(0, Math.max(3, todayRec.items.length + 1)) : ["", "", ""];

    root.innerHTML = `
      <div class="view-head">
        <h2>הכרת תודה</h2>
        <p>רגע קטן של תודה ביום משנה את מה שאת רואה. ✨</p>
      </div>

      <div class="grat-hero">
        <p class="grat-hero__title">${todayRec ? "התודות שלך להיום 🌼" : gx({ f: "על מה את אסירת תודה היום?", m: "על מה אתה אסיר תודה היום?", n: "על מה כדאי להגיד תודה היום?" })}</p>
        <p class="grat-hero__sub">שלושה דברים — קטנים או גדולים, הכול נחשב.</p>
      </div>

      <div class="card">
        <div class="grat-fields" data-grat-fields>
          ${items.map((v, i) => `
            <div class="grat-input-wrap" data-num="${i + 1}">
              <input type="text" data-grat value="${esc(v)}" placeholder="${esc(gratPrompts()[i % gratPrompts().length])}" />
            </div>`).join("")}
        </div>
        <div class="step-actions">
          <button type="button" class="btn btn--ghost" data-grat-add>+ עוד שורה</button>
          <button type="button" class="btn btn--gold" data-grat-save>${todayRec ? "עדכון" : "שמירה"} 🌟</button>
        </div>
      </div>

      <div class="stat-row" style="margin-top:24px">
        <div class="stat"><div class="stat__num">${gratitudeStreak()}</div><div class="stat__label">ימים רצופים 🌼</div></div>
        <div class="stat"><div class="stat__num">${gratitudeTotal()}</div><div class="stat__label">תודות שנכתבו</div></div>
        <div class="stat"><div class="stat__num">${state.user.gratitude.length}</div><div class="stat__label">ימים של תודה</div></div>
      </div>

      <h3 style="margin:6px 0 14px">קיר ההכרת תודה</h3>
      ${past.length === 0
        ? emptyHtml("הקיר עוד ריק", "כל מה שכותבים כאן יישמר ויצטבר לקיר תודה אישי.")
        : `<div class="grat-wall">
            ${past.flatMap((g) => g.items.map((it) => `
              <div class="grat-note">
                <div class="grat-note__pin">📌</div>
                <div class="grat-note__text">${esc(it)}</div>
                <div class="grat-note__date">${esc(fmtDate(g.date))}</div>
              </div>`)).join("")}
          </div>`}
    `;

    $("[data-grat-add]", root).addEventListener("click", () => {
      const wrap = $("[data-grat-fields]", root);
      const n = $$("[data-grat]", wrap).length + 1;
      const div = document.createElement("div");
      div.className = "grat-input-wrap";
      div.setAttribute("data-num", n);
      div.innerHTML = `<input type="text" data-grat placeholder="${esc(gratPrompts()[(n - 1) % gratPrompts().length])}" />`;
      wrap.appendChild(div);
      div.querySelector("input").focus();
    });

    $("[data-grat-save]", root).addEventListener("click", () => {
      const vals = $$("[data-grat]", root).map((el) => el.value);
      if (vals.every((v) => !v.trim())) { toast("כדאי לכתוב לפחות דבר אחד 🙂"); return; }
      saveGratitude(vals);
      $("[data-streak]").textContent = `🔥 ${computeStreak()}`;
      toast("נשמר. תודה היא שריר — וכל יום מאמנים אותו 🌟");
      renderGratitude(root);
    });
  }

  /* ----- Pattern Tracker ----- */
  function renderPatterns(root) {
    const stats = patternStats(7);
    const total = stats.reduce((s, p) => s + p.count, 0);
    const allTime = patternStats(3650);
    const max = stats[0] ? stats[0].count : 1;

    root.innerHTML = `
      <div class="view-head">
        <h2>Pattern Tracker</h2>
        <p>הדפוסים שמנהלים אותך השבוע — בלי לשפוט, רק לראות.</p>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="stat__num">${total}</div><div class="stat__label">תרגולים השבוע</div></div>
        <div class="stat"><div class="stat__num">${stats.length}</div><div class="stat__label">דפוסים שונים</div></div>
        <div class="stat"><div class="stat__num">${computeStreak()}</div><div class="stat__label">רצף ימים 🔥</div></div>
      </div>
      <h3 style="margin:0 0 14px">Top 3 דפוסים השבוע</h3>
      ${stats.length === 0 ? emptyHtml("עוד אין מספיק נתונים", "השלימי כמה ימים של אימון כדי לזהות דפוסים חוזרים.") : `
        <div class="pattern-list">
          ${stats.slice(0, 3).map((p, i) => patternRow(p, i, max)).join("")}
        </div>`}
      ${allTime.length > 3 ? `
        <h3 style="margin:28px 0 14px">כל הדפוסים (מאז ומתמיד)</h3>
        <div class="pattern-list">
          ${allTime.map((p) => patternRow(p, -1, allTime[0].count)).join("")}
        </div>` : ""}
    `;
  }

  function patternRow(p, rank, max) {
    const medals = ["🥇", "🥈", "🥉"];
    const pct = Math.max(8, Math.round((p.count / max) * 100));
    return `
      <div class="pattern-item">
        <div class="pattern-item__top">
          <div class="pattern-item__name">${rank >= 0 ? `<span class="rank">${medals[rank] || ""}</span>` : ""}${esc(p.name)}</div>
          <div class="pattern-item__count">${p.count} ${p.count === 1 ? "פעם" : "פעמים"}</div>
        </div>
        <div class="bar"><div class="bar__fill" style="width:${pct}%"></div></div>
      </div>`;
  }

  /* ----- Weekly Summary ----- */
  function renderWeekly(root) {
    const s = weeklySummary();
    root.innerHTML = `
      <div class="view-head">
        <h2>סיכום שבועי</h2>
        <p>7 הימים האחרונים — מה השתנה.</p>
      </div>
      <div class="summary-hero">
        <h3>הדפוס הכי חזק השבוע</h3>
        <div class="big">${s.topPattern ? esc(s.topPattern.name) : "— עוד אין נתונים —"}</div>
        ${s.topPattern ? `<p style="margin:6px 0 0;color:var(--muted)">הופיע ${s.topPattern.count} פעמים. זה המקום למקד בו תשומת לב.</p>` : ""}
      </div>
      <div class="stat-row">
        <div class="stat"><div class="stat__num">${s.practiced}</div><div class="stat__label">ימי תרגול</div></div>
        <div class="stat"><div class="stat__num">${s.actionsDone}</div><div class="stat__label">פעולות שבוצעו</div></div>
        <div class="stat"><div class="stat__num">${s.practiced ? Math.round((s.actionsDone / s.practiced) * 100) : 0}%</div><div class="stat__label">אחוז ביצוע</div></div>
      </div>
      ${s.lastAction ? `
        <div class="card">
          <h3 style="margin:0 0 8px;font-size:15px;color:var(--muted)">מה השתנה בפעולה — הצעד האחרון שלך</h3>
          <div style="font-size:17px;line-height:1.6">${esc(s.lastAction)}</div>
        </div>` : ""}
      ${s.practiced === 0 ? emptyHtml("השבוע עוד לא התחיל", "השלימי את האימון של היום כדי שהסיכום יתמלא.") : ""}
    `;
  }

  /* ----- History ----- */
  function renderHistory(root) {
    const entries = state.user.entries.filter((e) => e.completed);
    root.innerHTML = `
      <div class="view-head">
        <h2>היסטוריה</h2>
        <p>${entries.length} תרגולים שהשלמת. כל אחד הוא הצבעה לזהות שלך.</p>
      </div>
      ${entries.length === 0
        ? emptyHtml("עוד אין היסטוריה", "האימון הראשון שלך יופיע כאן.")
        : entries.map(historyItem).join("")}
    `;
  }

  function historyItem(e) {
    return `
      <div class="history-item">
        <div class="history-item__date">
          <span>${esc(fmtDate(e.date))}</span>
          <span class="${e.actionDone ? "badge-done" : "badge-skip"}">${e.actionDone ? "✓ פעולה בוצעה" : "○ פעולה לא סומנה"}</span>
        </div>
        <span class="history-item__pattern">🔁 ${esc(e.pattern)}</span>
        <div class="history-item__row"><b>טריגר:</b> ${esc(e.trigger)}</div>
        <div class="history-item__row"><b>מחשבה:</b> ${esc(e.thought)}</div>
        <div class="history-item__row"><b>הגרסה הבטוחה:</b> ${esc(e.identityAction)}</div>
        <div class="history-item__row"><b>פעולה להיום:</b> ${esc(e.oneAction)}</div>
      </div>`;
  }

  function emptyHtml(title, sub) {
    return `<div class="empty"><div class="empty__emoji">🌱</div><h3>${esc(title)}</h3><p>${esc(sub)}</p></div>`;
  }

  /* ------------------------------ Boot --------------------------------- */

  function boot() {
    const email = Store.getSession();
    if (email) state.user = Store.loadUser(email);
    render();
    if (state.user) scheduleReminder();
  }

  boot();
})();
