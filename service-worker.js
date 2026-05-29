<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0284c7" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="apple-touch-icon" href="icons/icon-192.png" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Mind Loops" />
  <title>Mind Loops — אימון מנטלי יומי של 5 דקות</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div id="app"></div>

  <!-- ===== Login Screen ===== -->
  <template id="tpl-login">
    <div class="screen screen--center">
      <div class="brand">
        <div class="hero">
          <svg viewBox="0 0 240 200" role="img" aria-label="Mind Loops mascot" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g-coral" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#0284c7"/><stop offset="1" stop-color="#10b981"/>
              </linearGradient>
              <linearGradient id="g-teal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#14b8a6"/>
              </linearGradient>
            </defs>
            <!-- floating sparkles -->
            <g class="hero__spark" fill="#0ea5e9">
              <path d="M40 46l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>
            </g>
            <g class="hero__spark hero__spark--2" fill="#10b981">
              <path d="M196 38l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z"/>
            </g>
            <g class="hero__spark hero__spark--3" fill="#14b8a6">
              <circle cx="206" cy="120" r="5"/>
            </g>
            <!-- looping orbit arrow -->
            <g class="hero__orbit">
              <path d="M120 36a64 64 0 1 1-50 24" fill="none" stroke="url(#g-teal)" stroke-width="9" stroke-linecap="round"/>
              <path d="M70 60l-8-16 18 2z" fill="#0ea5e9"/>
            </g>
            <!-- mascot body -->
            <circle cx="120" cy="112" r="52" fill="url(#g-coral)"/>
            <!-- cheeks -->
            <circle cx="98" cy="120" r="7" fill="#fff" opacity=".35"/>
            <circle cx="142" cy="120" r="7" fill="#fff" opacity=".35"/>
            <!-- eyes -->
            <circle cx="104" cy="104" r="6.5" fill="#fff"/>
            <circle cx="136" cy="104" r="6.5" fill="#fff"/>
            <circle cx="105" cy="105" r="3" fill="#2f2a2b"/>
            <circle cx="137" cy="105" r="3" fill="#2f2a2b"/>
            <!-- smile -->
            <path d="M104 126q16 16 32 0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="brand__name">Mind Loops</h1>
        <p class="brand__tag">לפעול כמו הגרסה שרוצים להיות — 5 דקות ביום.</p>
      </div>
      <form class="card auth" id="login-form" autocomplete="off">
        <h2 class="card__title" data-auth-title>כניסה</h2>
        <label class="field">
          <span>שם</span>
          <input type="text" name="name" placeholder="איך לקרוא לך?" required />
        </label>
        <label class="field">
          <span>אימייל</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <div class="field">
          <span>איך לפנות אליך?</span>
          <div class="chip-group" data-gender-group>
            <button type="button" class="chip is-selected" data-gender="f">בלשון נקבה</button>
            <button type="button" class="chip" data-gender="m">בלשון זכר</button>
            <button type="button" class="chip" data-gender="n">ניטרלי</button>
          </div>
        </div>
        <button type="submit" class="btn btn--primary btn--block">המשך לאימון היומי</button>
        <p class="auth__hint">הנתונים נשמרים מקומית בדפדפן שלך בלבד (MVP).</p>
      </form>
    </div>
  </template>

  <!-- ===== App Shell ===== -->
  <template id="tpl-shell">
    <header class="topbar">
      <div class="topbar__brand">🔁 <span>Mind Loops</span></div>
      <nav class="topbar__nav">
        <button class="navbtn" data-nav="daily">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>
          <span>היום</span>
        </button>
        <button class="navbtn" data-nav="gratitude">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span>הכרת תודה</span>
        </button>
        <button class="navbtn" data-nav="patterns">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
          <span>דפוסים</span>
        </button>
        <button class="navbtn" data-nav="weekly">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>
          <span>סיכום שבועי</span>
        </button>
        <button class="navbtn" data-nav="history">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/></svg>
          <span>היסטוריה</span>
        </button>
      </nav>
      <div class="topbar__user">
        <span class="topbar__streak" title="ימים רצופים" data-streak>🔥 0</span>
        <button class="bellbtn" data-reminder-open title="תזכורת יומית">🔔<span class="bellbtn__dot" data-bell-dot hidden></span></button>
        <span class="topbar__name" data-username></span>
        <button class="linkbtn" data-logout>יציאה</button>
      </div>
    </header>
    <main class="content" data-view></main>
  </template>

  <!-- ===== Reminder Modal ===== -->
  <template id="tpl-reminder">
    <div class="modal-overlay" data-overlay>
      <div class="modal" role="dialog" aria-label="תזכורת יומית">
        <button class="modal__close" data-close aria-label="סגירה">✕</button>
        <div class="modal__icon">🔔</div>
        <h2 class="modal__title">תזכורת יומית</h2>
        <p class="modal__sub">בחרי שעה קבועה לאימון של 5 הדקות. נשלח לך תזכורת עדינה — וכך הרצף נשמר.</p>

        <label class="switch-row">
          <span>הפעלת תזכורת יומית</span>
          <span class="switch"><input type="checkbox" data-rem-enabled /><span class="switch__track"></span></span>
        </label>

        <label class="field">
          <span>שעת התזכורת</span>
          <input type="time" data-rem-time value="20:00" />
        </label>

        <p class="modal__note" data-rem-status></p>

        <div class="step-actions">
          <button type="button" class="btn btn--ghost" data-rem-test>בדיקת תזכורת</button>
          <button type="button" class="btn btn--primary" data-rem-save>שמירה</button>
        </div>

        <div class="cal-sync">
          <div class="cal-sync__title">📅 סנכרון ליומן — תזכורת קופצת גם כשהאפליקציה סגורה</div>
          <div class="step-actions">
            <button type="button" class="btn btn--ghost" data-cal-ics>קובץ .ics</button>
            <button type="button" class="btn btn--gold" data-cal-google>הוספה ל-Google Calendar</button>
          </div>
        </div>

        <p class="modal__fineprint">התזכורת בתוך האפליקציה פועלת כשהדפדפן פתוח. לתזכורת אמיתית בכל מצב — הוסיפי אירוע יומי ליומן (היומן יקפיץ את ההתראה בעצמו).</p>
      </div>
    </div>
  </template>
</body>
<script src="app.js"></script>
<script>
  // רישום ה-Service Worker (PWA + offline + תזכורות). פועל רק ב-http/https.
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
</script>
</html>
