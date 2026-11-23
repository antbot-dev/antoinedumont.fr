# Agent skills repos for marketing, SEO and video

last-verified: 2026-11-23 · ttl-days: 31 · refresh: monthly; new rows come from the skills watch

Open repositories of agent skills (SKILL.md format, usable with Claude Code, Codex, Cursor, OpenClaw and others)
that were read and rated for GTM work: what they cover, their licence as GitHub detects it, and whether they are
used in practice.

## Columns

| Column | Meaning |
|---|---|
| `snapshot_date` | Date of the snapshot |
| `repo`, `url` | GitHub repository |
| `category` | `marketing`, `seo`, `video`, `agent_tools` |
| `skill_count` | Number of skills when the repo was read, `unverified` if not counted |
| `license_spdx` | Licence detected by GitHub (`NONE` = no licence file detected, `NOASSERTION` = custom) |
| `license_note` | What the README says when it differs |
| `stars`, `last_push` | GitHub stars and last push on the snapshot date |
| `rating_5`, `rated_by` | Rating out of 5 and who gave it |
| `antbot_status` | How it is used: `core`, `vendored`, `on demand`, `watch`, `rejected for distribution` |
| `first_seen`, `last_checked` | First review and last check |
| `notes` | Why it matters |

## Method and limits

- Stars, licence and last push come from the GitHub API on `last_checked`.
- A repo without a licence file is marked `NONE` even when its README claims one: reuse it by installing, not by copying.
- Ratings are opinions, written down so they can be compared over time.

## Licence

CC BY 4.0.
