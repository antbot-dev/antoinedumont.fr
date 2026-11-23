# GTM AI tools and agents tracker

last-verified: 2026-11-23 · ttl-days: 31 · refresh: monthly snapshot, every price re-read on the vendor's own pricing page

A dated tracker of the AI tools and agents that go-to-market teams (sales, marketing, RevOps) can buy:
category, how autonomous the product is, free tier, entry price and billing basis.
One snapshot per month is appended, so the file shows how prices and positioning move over time.

## Snapshot 2026-11-23 in numbers

- 30 tools, 6 of them French (lemlist, La Growth Machine, Waalaxy, Kaspr, Dropcontact, Modjo).
- 16 entry prices read on the vendor's page; 14 are `unverified` (sales-led pricing, or pages that only render in JavaScript).
- Cheapest verified entry: Waalaxy at 19 EUR per user per month. Highest: Common Room at 2,500 USD per month, billed annually.
- `clari.com/pricing` now redirects to Salesloft.

## Columns

| Column | Meaning |
|---|---|
| `snapshot_date` | Date of the monthly snapshot |
| `tool`, `website` | Product and domain |
| `hq_country` | ISO country of the vendor's headquarters, `unverified` when not checked |
| `category` | `prospecting_database`, `data_enrichment`, `outreach_sequencing`, `linkedin_automation`, `ai_sdr`, `signals_intent`, `crm`, `sales_engagement`, `conversation_intelligence`, `revenue_intelligence`, `email_assistant`, `content_workflows`, `content_marketing` |
| `agent_level` | `copilot` (assists a human), `workflow` (runs steps a human set up), `agent` (sold as acting on its own). Maintainer's reading of the vendor's own pitch |
| `free_tier` | `yes` (free plan), `trial`, `no`, or `unverified` |
| `entry_plan`, `entry_price`, `currency`, `billing_basis` | Cheapest paid plan shown, monthly billing unless stated |
| `source_url`, `source_name`, `last_checked` | Where and when the row was read |
| `notes` | Yearly price, credits, observations |

## Method and limits

- Each price is read on the vendor's public pricing page on `last_checked`. No reseller, review site or memory.
- Prices change often and can depend on country, seats and promotions (Black Friday offers were live on 2026-11-23).
- `category` and `agent_level` are editorial and can be debated: open an issue to suggest a change.
- The list is a selection, not a census. New tools are added when they are sold to GTM teams and have a public site.

## Licence and citation

CC BY 4.0. Cite as: *Antoine Dumont (2026), GTM AI tools and agents tracker, https://antoinedumont.fr.*
