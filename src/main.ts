/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- plain DOM script for the home page: GTM engine canvas, podcast player, WhatsApp demo, hidden QR codes.
import './index.css';

(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = document.querySelector('.top');
  addEventListener('scroll', () => top.classList.toggle('scrolled', scrollY > 10), { passive: true });

  // Hero: the portrait "ducks" into the disc as the page scrolls down
  const wrapEl = document.querySelector('.cut-wrap');
  if (wrapEl && !reduce) {
    let ticking = false;
    const duck = () => {
      ticking = false;
      // progress starts once the whole disc is on screen, so phones see it too
      const h = wrapEl.offsetHeight, r = wrapEl.getBoundingClientRect(), pageTop = r.top + scrollY;
      const start = Math.min(pageTop, innerHeight - h - 16);
      const prog = Math.max(0, Math.min(1, (start - r.top) / (h * .75)));
      const e = Math.pow(prog, 1.5);
      wrapEl.style.setProperty('--duck', (e * h * .93).toFixed(1) + 'px');
      wrapEl.style.setProperty('--pin-o', Math.max(0, 1 - prog * 2.4).toFixed(3));
      wrapEl.style.setProperty('--hello', Math.max(0, Math.min(1, (prog - .45) * 2.6)).toFixed(3));
      document.getElementById('pin').style.pointerEvents = prog > .35 ? 'none' : '';
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(duck); } }, { passive: true });
    addEventListener('resize', duck); duck();
  }

  // Card spotlight
  document.querySelectorAll('.card').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px');
  }));

  // Podcast player: real AntBot episode
  const heights = [21,6,5,14,30,27,5,6,23,19,22,19,20,11,19,21,18,16,5,10,22,16,5,28,23,5,22,17,10,20,25,26,22,23,29,13];
  const wave = document.getElementById('wave'), play = document.getElementById('play'), vtime = document.getElementById('vtime');
  const bars = heights.map(h => { const b = document.createElement('i'); b.style.height = h + 'px'; wave.appendChild(b); return b; });
  const audio = new Audio('/audio/antbot-ia-tech.mp3'); audio.preload = 'none';
  const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
  const fmt = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
  const paint = () => {
    const d = audio.duration || 123, f = audio.currentTime / d;
    bars.forEach((b, i) => b.classList.toggle('on', (i + .5) / bars.length <= f));
    vtime.textContent = fmt(audio.currentTime); wave.setAttribute('aria-valuenow', Math.round(audio.currentTime));
  };
  const setBtn = on => { play.innerHTML = on ? PAUSE : PLAY; play.setAttribute('aria-label', on ? 'Mettre en pause' : "Écouter l'épisode"); };
  play.addEventListener('click', () => { if (audio.paused) audio.play().catch(() => setBtn(false)); else audio.pause(); });
  audio.addEventListener('play', () => setBtn(true));
  audio.addEventListener('pause', () => setBtn(false));
  audio.addEventListener('ended', () => { setBtn(false); audio.currentTime = 0; paint(); });
  audio.addEventListener('timeupdate', paint);
  const seek = f => { const d = audio.duration || 123; audio.currentTime = Math.max(0, Math.min(1, f)) * d; paint(); };
  wave.addEventListener('click', e => { const r = wave.getBoundingClientRect(); seek((e.clientX - r.left) / r.width); });
  wave.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') seek((audio.currentTime + 10) / (audio.duration || 123));
    if (e.key === 'ArrowLeft') seek((audio.currentTime - 10) / (audio.duration || 123));
  });
  paint();

  // ===== WhatsApp chat: working AZERTY keyboard, scripted + canned replies =====
  const island = document.getElementById('island');
  audio.addEventListener('play', () => island.classList.add('playing'));
  audio.addEventListener('pause', () => island.classList.remove('playing'));
  const waBody = document.getElementById('wa'), kb = document.getElementById('kb'), txt = document.getElementById('txt'), ph = document.getElementById('ph');
  const waInput = document.getElementById('wa-input'), waState = document.getElementById('wa-state'), clock = document.getElementById('clock');
  const hhmm = () => { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
  const tickClock = () => { clock.textContent = hhmm().replace(/^0/, ''); }; tickClock(); setInterval(tickClock, 20000);
  const TICKS = '<svg class="ticks" viewBox="0 0 16 11" fill="none" stroke="currentColor" stroke-width="1.500" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 1.200 5.500 8.800 2.800 6.200M15 1.200 9.500 8.800 8.700 8"/></svg>';
  const SVG = {
    shift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round" aria-hidden="true"><path d="M12 4l8 9h-4.500v6h-7v-6H4z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M9 5h10a2 2 0 012 2v10a2 2 0 01-2 2H9l-6-7zM12 9.500l5 5m0-5l-5 5"/></svg>',
    enter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M19 6v6a2 2 0 01-2 2H6m4-4l-4 4 4 4"/></svg>'
  };
  const LAYERS = {
    abc: [[...'azertyuiop'], [...'qsdfghjklm'], ['shift', 'sp', ...'wxcvbn', "'", 'sp', 'back'], ['123', 'emoji', 'space', 'enter']],
    num: [[...'1234567890'], ['-', '/', ':', ';', '(', ')', '€', '&', '@', '"'], ['sp', '.', ',', '?', '!', "'", 'sp', 'back'], ['abc', 'emoji', 'space', 'enter']]
  };
  let layer = 'abc', caps = true, value = '', userTouched = false;
  const EMOJI = ['🔥', '👏', '🚀', '😄', '🙌'];
  function renderKb() {
    kb.innerHTML = LAYERS[layer].map(row => '<div class="kb-row">' + row.map(k => {
      if (k === 'sp') return '<span class="key sp"></span>';
      if (k === 'shift') return `<button type="button" class="key fn" data-k="shift" aria-label="Majuscule">${SVG.shift}</button>`;
      if (k === 'back') return `<button type="button" class="key fn" data-k="back" aria-label="Effacer">${SVG.back}</button>`;
      if (k === 'enter') return `<button type="button" class="key fn" data-k="enter" aria-label="Envoyer">${SVG.enter}</button>`;
      if (k === 'space') return '<button type="button" class="key wide" data-k="space">espace</button>';
      if (k === '123' || k === 'abc') return `<button type="button" class="key fn" data-k="${k}">${k === 'abc' ? 'ABC' : '123'}</button>`;
      if (k === 'emoji') return '<button type="button" class="key fn" data-k="emoji" aria-label="Emoji">😀</button>';
      return `<button type="button" class="key ch" data-k="${k === '"' ? '&quot;' : k}">${k}</button>`;
    }).join('') + '</div>').join('');
    kb.classList.toggle('caps', caps && layer === 'abc');
  }
  function paintField() {
    txt.textContent = value; ph.hidden = value.length > 0; waInput.classList.toggle('has-text', value.trim().length > 0);
    kb.classList.toggle('caps', caps && layer === 'abc');
  }
  function press(k) {
    if (k === 'shift') caps = !caps;
    else if (k === 'back') { value = [...value].slice(0, -1).join(''); if (!value) caps = true; }
    else if (k === 'enter') return sendMsg();
    else if (k === '123') { layer = 'num'; renderKb(); }
    else if (k === 'abc') { layer = 'abc'; renderKb(); }
    else if ([...value].length < 70) {
      if (k === 'space') value += ' ';
      else if (k === 'emoji') value += EMOJI[Math.floor(Math.random() * EMOJI.length)];
      else { value += caps && layer === 'abc' ? k.toUpperCase() : k; caps = false; }
    }
    paintField();
  }
  kb.addEventListener('click', e => { const b = e.target.closest('.key[data-k]'); if (!b) return; userTouched = true; press(b.dataset.k); });
  document.getElementById('send').addEventListener('click', () => { userTouched = true; sendMsg(); });
  const screenEl = document.getElementById('screen');
  screenEl.addEventListener('keydown', e => {
    if (e.target.closest('button, a, .wave') && (e.key === 'Enter' || e.key === ' ')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'Backspace') { userTouched = true; press('back'); e.preventDefault(); }
    else if (e.key === 'Enter') { userTouched = true; sendMsg(); e.preventDefault(); }
    else if (e.key.length === 1 && [...value].length < 70) { userTouched = true; value += e.key; caps = false; paintField(); e.preventDefault(); }
  });
  function addBubble(html, me) {
    const b = document.createElement('div'); b.className = 'bub' + (me ? ' me' : '');
    b.innerHTML = html + `<span class="tm">${hhmm()}${me ? TICKS : ''}</span>`;
    waBody.appendChild(b); waBody.scrollTop = waBody.scrollHeight; return b;
  }
  const esc = t => t.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const REPLIES = [
    'Je suis la démo d\'AntBot 🤖 Le vrai t\'envoie ton briefing audio chaque matin sur WhatsApp. <a href="https://antbot.dev/podcast/" target="_blank" rel="noreferrer">Le recevoir ↗</a>',
    'Pour parler au vrai Antoine, c\'est tout en bas : <a href="#contact">Contact</a> 👇',
    'Tu insistes, j\'aime bien 😏 Un secret : clique sur le point final de « works. », tout en haut.',
    'Dernier indice : regarde le revers de sa veste 👀'
  ];
  let ri = 0, busy = false;
  function botReply(html, delay) {
    busy = true; waState.textContent = 'écrit…';
    const t = document.createElement('div'); t.className = 'bub typing'; t.innerHTML = '<i></i><i></i><i></i>';
    setTimeout(() => { waBody.appendChild(t); waBody.scrollTop = waBody.scrollHeight; }, 350);
    setTimeout(() => { t.remove(); addBubble(html, false); waState.textContent = 'en ligne'; busy = false; }, delay);
  }
  function sendMsg(scripted) {
    const v = value.trim(); if (!v || busy) return;
    const b = addBubble(esc(v), true); value = ''; caps = true; if (layer !== 'abc') { layer = 'abc'; renderKb(); } paintField();
    setTimeout(() => b.querySelector('.ticks').classList.add('read'), 650);
    if (scripted) botReply('Avec plaisir ! À demain, 7h30 ☕', 1900);
    else { botReply(REPLIES[ri % REPLIES.length], 1700); ri++; }
  }
  renderKb(); paintField();
  // Scripted intro: the keyboard types "Super merci 🔥" by itself once the phone is on screen
  const SCRIPT = ['shift?', 'S', 'u', 'p', 'e', 'r', 'space', 'm', 'e', 'r', 'c', 'i', 'space', '🔥', 'enter'];
  function runScript() {
    if (reduce) { value = 'Super merci 🔥'; sendMsg(true); return; }
    let i = 0;
    const step = () => {
      if (userTouched) return;
      const c = SCRIPT[i++]; if (!c) return;
      if (c === 'shift?') return setTimeout(step, 500);
      const k = c === '🔥' ? 'emoji' : c.length === 1 ? c.toLowerCase() : c;
      const el = kb.querySelector(`.key[data-k="${k}"]`);
      if (el) { el.classList.add('down'); setTimeout(() => el.classList.remove('down'), 130); }
      if (c === 'enter') sendMsg(true);
      else if (c === '🔥') { value += '🔥'; paintField(); }
      else press(k);
      setTimeout(step, c === 'space' ? 170 : 95 + Math.random() * 90);
    };
    step();
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); setTimeout(runScript, 700); } }, { threshold: .55 });
    io.observe(document.querySelector('.phone'));
  } else runScript();

  // Stacking timeline cards
  const tlCards = [...document.querySelectorAll('.tl-item')];
  const stack = () => {
    if (reduce || innerWidth <= 720) { tlCards.forEach(c => { c.style.removeProperty('--s'); c.style.removeProperty('--b'); }); return; }
    const vh = innerHeight;
    const prog = tlCards.map(c => {
      const top = parseFloat(getComputedStyle(c).top) || 88, r = c.getBoundingClientRect();
      return Math.max(0, Math.min(1, (vh - r.top) / Math.max(1, vh - top)));
    });
    tlCards.forEach((c, i) => {
      let depth = 0; for (let j = i + 1; j < tlCards.length; j++) depth += prog[j];
      c.style.setProperty('--s', (1 - depth * .035).toFixed(4));
      c.style.setProperty('--b', (1 - depth * .05).toFixed(4));
    });
  };
  addEventListener('scroll', stack, { passive: true }); addEventListener('resize', stack); stack();

  // Rotating contact prompts
  const prompts = ['you need pipeline, not more content.', 'you want AI running inside your GTM, not sitting in a deck.', 'you are hiring a marketing lead who can also build.', 'you just want to compare notes on agents and go-to-market.'];
  let pi = 0; const rot = document.getElementById('rot');
  if (!reduce) setInterval(() => { pi = (pi + 1) % prompts.length; rot.innerHTML = '<span></span>'; rot.firstChild.textContent = prompts[pi]; }, 3200);

  // Copy email
  const copy = document.getElementById('copy'), email = document.getElementById('email'), copied = document.getElementById('copied');
  copy.addEventListener('click', () => {
    const done = () => { copied.hidden = false; setTimeout(() => copied.hidden = true, 1800); };
    const select = () => { const r = document.createRange(); r.selectNodeContents(email); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(email.textContent).then(done, select); } catch { select(); }
  });

  // ===== GTM engine canvas =====
  const cv = document.getElementById("engine-cv"), ctx = cv.getContext('2d');
  const sources = ['Social', 'SEO & GEO', 'Paid', 'Events', 'ABM', 'Outbound SDR'];
  let W, H, dpr, vertical, colors = {}, colorsReady = false;
  const nodes = {};
  // fallbacks: on a slow phone the script can run before the stylesheet applies, and an empty colour would paint everything black
  const FALLBACK = { '--band-ink': '#f3ede2', '--band-soft': '#a89c8b', '--band-line': '#3a322a', '--flame': '#4f9dff', '--flame-band': '#4f9dff', '--on-flame': '#04122b', '--clay': '#3d8cf2', '--band': '#1b1611' };
  const okColor = v => { if (!v) return false; ctx.fillStyle = '#010203'; ctx.fillStyle = v; return ctx.fillStyle !== '#010203'; };
  const css = n => { const v = getComputedStyle(cv).getPropertyValue(n).trim(); return okColor(v) ? v : FALLBACK[n]; };
  function readColors() { colorsReady = !!getComputedStyle(cv).getPropertyValue('--band').trim(); colors = { ink: css('--band-ink'), soft: css('--band-soft'), line: css('--band-line'), flame: css('--flame'), flameBand: css('--flame-band'), onFlame: css('--on-flame'), clay: css('--clay'), band: css('--band') }; }
  function layout() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    const r = cv.getBoundingClientRect(); W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    vertical = W < 640;
    nodes.src = sources.map((s, i) => vertical
      ? { x: W * (0.1 + i * 0.16), y: 54, label: s }
      : { x: Math.max(110, W * 0.14), y: H * (0.08 + i * 0.135), label: s });
    nodes.agent = vertical ? { x: W / 2, y: H * 0.3 } : { x: W * 0.47, y: H * 0.42 };
    // revenue bar chart (Q1..Q4); the pipeline travels above it, left to right
    const x0 = vertical ? W * 0.17 : W * 0.64, x1 = vertical ? W * 0.86 : W - 70;
    chart.base = H - (vertical ? 58 : 54); chart.h = vertical ? H * 0.17 : H * 0.28; chart.bw = Math.min(56, (x1 - x0) / 3 * .55);
    chart.xs = [0, 1, 2, 3].map(i => x0 + (x1 - x0) * i / 3);
    nodes.sales = { x: chart.xs[quarter], y: vertical ? H * 0.6 : H * 0.34 };
    placeLure();
  }
  const chart = {}; let quarter = 0, lureKey = '';
  const lureEl = document.getElementById('lure');
  // the hint sits at the top right of the AI agents node
  function placeLure() {
    const A = nodes.agent, r = vertical ? 46 : 58, k = Math.round(A.x) + ':' + Math.round(A.y) + ':' + vertical;
    if (k === lureKey) return; lureKey = k;
    lureEl.classList.add('right', 'agent'); lureEl.classList.toggle('narrow', vertical);
    lureEl.style.left = (A.x + r * .74 - 2) + 'px'; lureEl.style.top = (A.y - r * .74 + 4) + 'px';
  }
  const parts = []; let tick = 0, slow = 1, cSig = 0, cQ = 0, cS = 0;
  const elSig = document.getElementById('cnt-sig'), elQ = document.getElementById('cnt-q'), elS = document.getElementById('cnt-sql');
  function spawn() {
    const s = nodes.src[Math.floor(Math.random() * nodes.src.length)];
    parts.push({ s, t: 0, stage: 0, speed: .006 + Math.random() * .006, jit: (Math.random() - .5) * 26, qual: Math.random() < .42, pulse: 0 });
    cSig++;
  }
  function bez(a, b, t, jit) {
    const mx = vertical ? a.x : (a.x + b.x) / 2, my = vertical ? (a.y + b.y) / 2 : a.y;
    const nx = vertical ? b.x + jit : (a.x + b.x) / 2, ny = vertical ? (a.y + b.y) / 2 : b.y + jit;
    const u = 1 - t;
    return { x: u*u*u*a.x + 3*u*u*t*mx + 3*u*t*t*nx + t*t*t*b.x, y: u*u*u*a.y + 3*u*u*t*my + 3*u*t*t*ny + t*t*t*b.y };
  }
  function drawCurve(a, b, alpha) {
    ctx.beginPath(); ctx.moveTo(a.x, a.y);
    const mx = vertical ? a.x : (a.x + b.x) / 2, my = vertical ? (a.y + b.y) / 2 : a.y;
    const nx = vertical ? b.x : (a.x + b.x) / 2, ny = vertical ? (a.y + b.y) / 2 : b.y;
    ctx.bezierCurveTo(mx, my, nx, ny, b.x, b.y);
    ctx.strokeStyle = colors.line; ctx.globalAlpha = alpha; ctx.lineWidth = 1.2; ctx.stroke(); ctx.globalAlpha = 1;
  }
  let agentPulse = 0, salesPulse = 0;
  // Pipeline fills up with deals, then pours into Revenue as $ and starts again
  const FULLS = [10, 14, 18, 22], MAXF = 22, DEAL = 45000, held = [], coins = [], qbars = [0, 0, 0, 0], shown = [0, 0, 0, 0]; let pouring = false, pourTick = 0, revenue = 0, curR = 0, resetT = 0;
  const addHeld = () => held.push({ a: Math.random() * Math.PI * 2, d: .25 + .75 * Math.sqrt(Math.random()), ph: Math.random() * 6.28 });
  const money = v => v >= 1e6 ? '$' + (v / 1e6).toFixed(v >= 1e7 ? 0 : 1) + 'M' : '$' + Math.round(v / 1e3) + 'K';
  // ===== Hidden QR: AI & Tech Trends newsletter =====
  const QR = '1111111010011110101101000010001111111,1000001000010011000011111011101000001,1011101001101110111111010011001011101,1011101011101101101100010110101011101,1011101010101001000000011111101011101,1000001010010000001110000110001000001,1111111010101010101010101010101111111,0000000011101001111011111100000000000,1000101111001101001100111111111111001,1011010010010110100111000110000111110,0101101010111010100010011010100110100,0001100101111000010001100011001000110,1001101001110101010101101000011001111,1110110110001111110000010111110011000,0011011000111101101001011101010111110,1100010000101001000010001101110110110,0011001010011100100110010111110001100,1100110000011000001100011111111011010,0100111101010111000101011011000001100,1000110110111001111111000000101100110,1111001101011000111001111000011101100,1010100100110011101001110111110110000,1101001011101101010011011001100111100,1001010000010001011010000001001110101,0001101001001101001101100111001101101,1001110010101100110110100000110010000,0011101010000010101010010001100011000,0000100000000110011001010011101110101,1100011001011101010111101000111110101,0000000011101001011000110010100010000,1111111010001001001001110000101010000,1000001001010111100011101000100011100,1011101011100011100010011110111111111,1011101000111110001100001010101101010,1011101001000001010100110110011000110,1000001001001101111111000001100010110,1111111010111000010011111010010100111'.split(',');
  const QN = QR.length; const mods = [];
  QR.forEach((row, y) => [...row].forEach((c, x) => { if (c === '1') mods.push({ x, y, sx: 0, sy: 0, d: 0 }); }));
  let qrOn = false, qrT = 0;
  const stageEl = document.getElementById('stage');
  function qrBox() {
    const size = Math.min(H - 110, W - 48, 320), cell = size / (QN + 8);
    return { size, cell, x: W / 2 - size / 2, y: (H - 40) / 2 - size / 2 };
  }
  function setQR(on) {
    if (on === qrOn) return; qrOn = on; stageEl.classList.toggle('qr', on);
    if (on) {
      const pool = parts.length ? parts : [{ s: nodes.sales, t: 1, stage: 1 }];
      mods.forEach(m => {
        const q = pool[Math.floor(Math.random() * pool.length)];
        const p = q.stage ? bez(nodes.agent, nodes.sales, Math.min(q.t, 1), 0) : bez(q.s, nodes.agent, Math.min(q.t, 1), q.jit || 0);
        const a = Math.random() * Math.PI * 2, r = Math.random() * 30;
        m.sx = p.x + Math.cos(a) * r; m.sy = p.y + Math.sin(a) * r; m.d = Math.random() * .45;
      });
    }
    if (reduce) { qrT = on ? 1.6 : 0; frame(); }
  }
  const ease = t => t < 0 ? 0 : t > 1 ? 1 : 1 - Math.pow(1 - t, 3);
  function drawQR() {
    const B = qrBox(), fade = ease(qrT * 2.2);
    ctx.globalAlpha = fade * .94; ctx.fillStyle = colors.band; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
    const cardA = ease((qrT - .55) * 2.5);
    if (cardA > 0) {
      ctx.globalAlpha = cardA; ctx.fillStyle = '#ffffff';
      ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(B.x, B.y, B.size, B.size, 16); else ctx.rect(B.x, B.y, B.size, B.size); ctx.fill(); ctx.globalAlpha = 1;
    }
    mods.forEach(m => {
      const p = ease((qrT - m.d) / .9);
      const tx = B.x + (m.x + 4) * B.cell, ty = B.y + (m.y + 4) * B.cell;
      const x = m.sx + (tx - m.sx) * p, y = m.sy + (ty - m.sy) * p;
      const sz = 3 + (B.cell + .4 - 3) * p;
      ctx.fillStyle = p > .85 ? '#111111' : colors.flame;
      ctx.fillRect(x - (p < 1 ? sz / 2 : 0) * (1 - p), y - (p < 1 ? sz / 2 : 0) * (1 - p), sz, sz);
    });
    const capA = ease((qrT - 1.1) * 3);
    if (capA > 0) {
      ctx.globalAlpha = capA; ctx.textAlign = 'center';
      ctx.fillStyle = colors.ink; ctx.font = `700 ${vertical ? 15 : 17}px "Figtree", "Helvetica Neue", sans-serif`;
      ctx.fillText('You found the secret recipe.', W / 2, B.y + B.size + 30, W - 32);
      ctx.font = `500 ${vertical ? 13 : 15}px "Figtree", "Helvetica Neue", sans-serif`; ctx.fillText('AI & Tech Trends, my LinkedIn newsletter.', W / 2, B.y + B.size + 52, W - 32);
      ctx.fillStyle = colors.soft; ctx.font = `500 ${vertical ? 10 : 11}px "Geist Mono", ui-monospace, monospace`;
      ctx.fillText('SCAN TO SUBSCRIBE', W / 2, B.y - 14);
      ctx.globalAlpha = 1;
    }
  }
  function frame() {
    if (!colorsReady) { readColors(); if (colorsReady) layout(); }
    ctx.clearRect(0, 0, W, H);
    // grid dots
    ctx.fillStyle = colors.line;
    for (let x = 20; x < W; x += 28) for (let y = 20; y < H; y += 28) ctx.fillRect(x, y, 1.2, 1.2);
    nodes.src.forEach(s => drawCurve(s, nodes.agent, 1));
    drawCurve(nodes.agent, nodes.sales, 1);

    if (!reduce && Math.random() < .14 * slow) spawn();
    for (let i = parts.length - 1; i >= 0; i--) {
      const q = parts[i]; q.t += q.speed * slow;
      let pos;
      if (q.stage === 0) {
        pos = bez(q.s, nodes.agent, Math.min(q.t, 1), q.jit);
        if (q.t >= 1) { agentPulse = 1; if (q.qual) { q.stage = 1; q.t = 0; cQ++; } else { parts.splice(i, 1); continue; } }
      } else {
        pos = bez(nodes.agent, nodes.sales, Math.min(q.t, 1), q.jit * .4);
        if (q.t >= 1) { salesPulse = 1; cS++; if (!pouring && resetT === 0 && held.length < FULLS[quarter] && Math.abs(nodes.sales.x - chart.xs[quarter]) < 2) addHeld();  parts.splice(i, 1); continue; }
      }
      const r = q.stage ? 4 : 2.6;
      ctx.beginPath(); ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle = q.stage ? colors.flame : colors.ink; ctx.globalAlpha = q.stage ? 1 : .75; ctx.fill(); ctx.globalAlpha = 1;
      if (q.stage) { ctx.beginPath(); ctx.arc(pos.x, pos.y, 9, 0, Math.PI * 2); ctx.fillStyle = colors.flame; ctx.globalAlpha = .18; ctx.fill(); ctx.globalAlpha = 1; }
    }
    // source labels
    ctx.font = `500 ${vertical ? 10 : 12}px "Geist Mono", ui-monospace, monospace`;
    nodes.src.forEach(s => {
      ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.fillStyle = colors.ink; ctx.fill();
      ctx.fillStyle = colors.soft;
      if (vertical) { ctx.save(); ctx.translate(s.x, s.y - 12); ctx.rotate(-Math.PI / 5); ctx.textAlign = 'left'; ctx.fillText(s.label.split(' ')[0], 0, 0); ctx.restore(); }
      else { ctx.textAlign = 'right'; ctx.fillText(s.label.toUpperCase(), s.x - 14, s.y + 4); }
    });
    // agent node
    agentPulse *= .92; salesPulse *= .9;
    const A = nodes.agent, ar = vertical ? 46 : 58;
    ctx.beginPath(); ctx.arc(A.x, A.y, ar + agentPulse * 10, 0, Math.PI * 2); ctx.fillStyle = colors.flame; ctx.globalAlpha = .1 + agentPulse * .15; ctx.fill(); ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.arc(A.x, A.y, ar, 0, Math.PI * 2); ctx.fillStyle = colors.band; ctx.fill(); ctx.strokeStyle = colors.flame; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.save(); ctx.translate(A.x, A.y); ctx.rotate(tick / 120);
    ctx.setLineDash([3, 6]); ctx.beginPath(); ctx.arc(0, 0, ar + 14, 0, Math.PI * 2); ctx.strokeStyle = colors.soft; ctx.globalAlpha = .6; ctx.stroke(); ctx.restore(); ctx.globalAlpha = 1; ctx.setLineDash([]);
    ctx.textAlign = 'center'; ctx.fillStyle = colors.ink;
    ctx.font = `700 ${vertical ? 17 : 21}px "Figtree", "Helvetica Neue", sans-serif`; ctx.fillText('AI agents', A.x, A.y + 2);
    ctx.font = `500 ${vertical ? 9 : 10}px "Geist Mono", ui-monospace, monospace`; ctx.fillStyle = colors.soft;
    ctx.fillText('RESEARCH · SCORE · FOLLOW UP', A.x, A.y + ar + 32);
    // pipeline: starts tiny, swells with each deal, pours into the current quarter, then moves right
    const S = nodes.sales, r0 = vertical ? 9 : 11, rMax = vertical ? 42 : 54, full = FULLS[quarter];
    const target = r0 + (rMax - r0) * Math.min(held.length, MAXF) / MAXF;
    curR = curR ? curR + (target - curR) * .12 : target;
    const tx = resetT > 0 ? chart.xs[0] : chart.xs[quarter];
    S.x += (tx - S.x) * .05; const arrived = Math.abs(tx - S.x) < 1.5;
    if (!pouring && arrived && resetT === 0 && held.length >= full) pouring = true;
    if (pouring && !reduce) {
      if (++pourTick % 5 === 0 && held.length) { held.pop(); coins.push({ x: S.x + (Math.random() - .5) * curR * .6, y: S.y + curR * .6, vy: .5 + Math.random() * .6, t: 0, q: quarter }); }
      if (!held.length) { pouring = false; pourTick = 0; if (quarter < 3) quarter++; else resetT = 1; }
    }
    if (resetT > 0 && !coins.length) { resetT -= 1 / 150; if (resetT <= 0) { resetT = 0; quarter = 0; qbars.fill(0); revenue = 0; } }
    // bar chart
    const { base, h: ch, bw, xs } = chart, unit = ch / MAXF;
    ctx.strokeStyle = colors.line; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(xs[0] - bw, base + .5); ctx.lineTo(xs[3] + bw, base + .5); ctx.stroke();
    ctx.textAlign = 'center'; ctx.font = `500 ${vertical ? 9 : 10}px "Geist Mono", ui-monospace, monospace`;
    const fadeBars = resetT > 0 && resetT < .5 ? resetT * 2 : 1;
    xs.forEach((x, i) => {
      shown[i] += (qbars[i] - shown[i]) * .2;
      ctx.setLineDash([2, 4]); ctx.strokeStyle = colors.line; ctx.lineWidth = 1; ctx.strokeRect(x - bw / 2, base - FULLS[i] * unit, bw, FULLS[i] * unit); ctx.setLineDash([]);
      const bh = shown[i] * unit;
      if (bh > .5) { ctx.globalAlpha = fadeBars; ctx.fillStyle = colors.flameBand; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x - bw / 2, base - bh, bw, bh, [5, 5, 0, 0]); else ctx.rect(x - bw / 2, base - bh, bw, bh); ctx.fill(); ctx.globalAlpha = 1; }
      ctx.fillStyle = i === quarter && resetT === 0 ? colors.ink : colors.soft; ctx.fillText('Q' + (i + 1), x, base + 17);
    });
    ctx.fillStyle = colors.soft; ctx.fillText('REVENUE', (xs[0] + xs[3]) / 2 - (vertical ? 30 : 36), base + 36);
    ctx.fillStyle = colors.flameBand; ctx.textAlign = 'left'; ctx.fillText(money(revenue), (xs[0] + xs[3]) / 2 + (vertical ? 2 : 4), base + 36);
    // falling $
    ctx.textAlign = 'center';
    for (let i = coins.length - 1; i >= 0; i--) {
      const c = coins[i], top = base - qbars[c.q] * unit; c.vy += .2; c.y += c.vy; c.x += (xs[c.q] - c.x) * .08; c.t = Math.min(1, c.t + .06);
      if (c.y >= top - 4) { coins.splice(i, 1); qbars[c.q]++; revenue += DEAL; continue; }
      ctx.font = `700 ${Math.round(9 + c.t * 8)}px "Figtree", "Helvetica Neue", sans-serif`; ctx.fillStyle = colors.flameBand; ctx.fillText('$', c.x, c.y + 5);
    }
    // pipeline disc
    ctx.beginPath(); ctx.arc(S.x, S.y, curR + salesPulse * 10, 0, Math.PI * 2); ctx.fillStyle = colors.flame; ctx.globalAlpha = .15 + salesPulse * .3; ctx.fill(); ctx.globalAlpha = 1;
    for (let k = 0; k < 2; k++) {
      const ph = ((tick + k * 50) % 100) / 100;
      ctx.beginPath(); ctx.arc(S.x, S.y, curR + ph * 34, 0, Math.PI * 2);
      ctx.strokeStyle = colors.flame; ctx.lineWidth = 2; ctx.globalAlpha = (1 - ph) * .6; ctx.stroke(); ctx.globalAlpha = 1;
    }
    ctx.beginPath(); ctx.arc(S.x, S.y, curR, 0, Math.PI * 2); ctx.fillStyle = colors.flame; ctx.fill();
    ctx.fillStyle = colors.onFlame;
    held.forEach(hd => {
      const a = hd.a + tick * .012, d = hd.d * Math.max(0, curR - 6), j = Math.sin(tick * .08 + hd.ph) * 1.2;
      ctx.globalAlpha = .4; ctx.beginPath(); ctx.arc(S.x + Math.cos(a) * d + j, S.y + Math.sin(a) * d, Math.min(3.2, curR / 4), 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (held.length >= full * .85 && !pouring) { ctx.beginPath(); ctx.arc(S.x, S.y, curR + 4 + Math.sin(tick * .3) * 2, 0, Math.PI * 2); ctx.strokeStyle = colors.flameBand; ctx.lineWidth = 2; ctx.stroke(); }
    ctx.textAlign = 'center';
    if (curR > (vertical ? 30 : 36)) { ctx.fillStyle = colors.onFlame; ctx.font = `700 ${vertical ? 13 : 16}px "Figtree", "Helvetica Neue", sans-serif`; ctx.fillText('Pipeline', S.x, S.y + 5); }
    else { ctx.fillStyle = colors.ink; ctx.font = `700 ${vertical ? 13 : 15}px "Figtree", "Helvetica Neue", sans-serif`; ctx.fillText('Pipeline', S.x, S.y - curR - 12); }

    elSig.textContent = cSig.toLocaleString('en-US'); elQ.textContent = cQ.toLocaleString('en-US'); elS.textContent = cS.toLocaleString('en-US');
    if (!reduce) qrT = qrOn ? Math.min(1.6, qrT + 1 / 60) : Math.max(0, qrT - 1 / 40);
    if (qrT > 0) drawQR();
    tick++;
    if (!reduce) requestAnimationFrame(frame);
  }
  const onSales = e => { const r = cv.getBoundingClientRect(), A = nodes.agent; return Math.hypot(e.clientX - r.left - A.x, e.clientY - r.top - A.y) < (vertical ? 56 : 70); };
  cv.addEventListener('click', e => { if (qrOn) setQR(false); else if (onSales(e)) setQR(true); });
  cv.addEventListener('pointermove', e => { cv.style.cursor = qrOn || onSales(e) ? 'pointer' : 'default'; });
  document.getElementById('lure').addEventListener('click', () => setQR(true));
  document.getElementById('unqr').addEventListener('click', () => setQR(false));
  cv.addEventListener('pointerenter', () => slow = .25);
  cv.addEventListener('pointerleave', () => slow = 1);
  function init() { readColors(); layout(); }
  init();
  // re-read once the stylesheet is really in (Safari can run the module first)
  addEventListener('load', () => { readColors(); layout(); if (reduce) frame(); });
  addEventListener('pageshow', () => { readColors(); if (reduce) frame(); });
  // pre-warm so the first frame already shows flow
  for (let i = 0; i < 60; i++) spawn(); parts.forEach(q => q.t = Math.random() * .9);
  addEventListener('resize', () => { layout(); if (reduce) frame(); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { readColors(); if (reduce) frame(); });
  new MutationObserver(() => { readColors(); if (reduce) frame(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-accent'] });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { if (reduce) frame(); });

  // ===== Hidden QR #2 (lapel pin) and #3 (the full stop) =====
  const qrSVG = () => {
    let d = ''; QR.forEach((row, y) => [...row].forEach((c, x) => { if (c === '1') d += `M${x} ${y}h1v1h-1z`; }));
    return `<svg viewBox="-1 -1 ${QN + 2} ${QN + 2}" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="#0b0f1c"/></svg>`;
  };
  const NL = 'https://www.linkedin.com/newsletters/ai-tech-trends-2024-7008752675219513344/';
  const pin = document.getElementById('pin');
  pin.querySelector('.qrsvg').innerHTML = qrSVG();
  pin.addEventListener('click', () => {
    if (pin.classList.contains('open') || matchMedia('(hover: hover)').matches) { if (!window.open(NL, '_blank', 'noopener')) location.href = NL; }
    pin.classList.add('open');
  });
  document.addEventListener('click', e => { if (!pin.contains(e.target)) pin.classList.remove('open'); });

  const dot = document.getElementById('dotqr'); let pop = null;
  const closePop = () => { if (pop) { pop.remove(); pop = null; } };
  dot.addEventListener('click', e => {
    e.stopPropagation(); if (pop) return closePop();
    const r = dot.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.bottom - r.height * .25;
    const left = Math.min(Math.max(12, cx - 95), innerWidth - 202), top = Math.min(cy + 16, innerHeight - 250);
    pop = document.createElement('div'); pop.className = 'dotqr-pop';
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    pop.style.setProperty('--ox', (cx - left) + 'px'); pop.style.setProperty('--oy', (cy - top) + 'px');
    pop.innerHTML = qrSVG() + `<p>Even the full stop ships. <a href="${NL}" target="_blank" rel="noreferrer">AI &amp; Tech Trends ↗</a></p>`;
    document.body.appendChild(pop);
  });
  document.addEventListener('click', e => { if (pop && !pop.contains(e.target)) closePop(); });
  addEventListener('scroll', closePop, { passive: true });
  frame();
})();
