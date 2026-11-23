# Datasets

Open datasets maintained by Antoine Dumont (Head of Marketing & Applied AI, Paris).
Every file is CSV, UTF-8, with one source URL and one `last_checked` date per row.
Cells that no source confirms are written `unverified`, never guessed.

| Dataset | What it answers | Refresh | Licence |
|---|---|---|---|
| [ai-adoption-fr-eu](ai-adoption-fr-eu/) | How many French companies use AI, for what, compared with the EU and five member states (Eurostat) | Yearly, when Eurostat updates `isoc_eb_ai` | CC BY 4.0 |
| [gtm-ai-tools-tracker](gtm-ai-tools-tracker/) | Which AI tools and agents GTM teams can buy, how they price, how autonomous they are | Monthly dated snapshot | CC BY 4.0 |
| [agent-skills-repos](agent-skills-repos/) | Which open agent-skill repos are worth using for marketing, SEO and video, with licence and status | Monthly, fed by the skills watch | CC BY 4.0 |

## How the three fit together

- `ai-adoption-fr-eu` is the market baseline: official numbers on adoption.
- `gtm-ai-tools-tracker` is the supply side: what is actually sold to GTM teams, snapshot by snapshot.
- `agent-skills-repos` is the builder side: the open skills used to run GTM work with agents.

Snapshots are appended (long format, one `snapshot_date` per run), so each file can show change over time.
Nothing here is published to an external archive (Zenodo, Kaggle, data.gouv.fr…) without the maintainer's approval.
