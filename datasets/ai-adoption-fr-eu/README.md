# AI adoption in companies: France vs EU (Eurostat, 2021-2025)

last-verified: 2026-11-23 · ttl-days: 365 · refresh: `python3 build.py` after Eurostat updates `isoc_eb_ai` (last update 2026-06-15)

Share of enterprises (10+ employees) that use AI, by technology, purpose, sourcing and barrier,
for France, the EU27, Germany, Italy, Spain, the Netherlands and Denmark, survey years 2021, 2023, 2024 and 2025.
Built for marketing and sales leaders who need official numbers, not vendor surveys.

## Key figures (2025, enterprises with 10+ employees)

| Indicator | France | EU27 |
|---|---|---|
| Use at least one AI technology | 18.2 % | 20.0 % |
| ... 250+ employees | 58.0 % | 55.0 % |
| ... 10-49 employees | 15.0 % | 17.0 % |
| Use AI for marketing or sales (% of all enterprises) | not published | 6.9 % |
| Use AI for marketing or sales (% of AI users, 250+ employees) | 39.9 % | 37.9 % |
| Use text mining (most common AI technology) | 10.2 % | 11.8 % |

France more than tripled its AI adoption between 2023 (5.9 %) and 2025 (18.2 %), and its large companies are now
ahead of the EU average, while its small companies are behind. Eurostat does not publish the French
marketing-and-sales figure for all enterprises in 2024 and 2025 (flag `u`, low reliability).

## Files

- `data.csv`: 6,900 rows, long format.
- `build.py`: rebuilds `data.csv` from the Eurostat API (Python standard library only).
- `CHANGELOG.md`: what changed between versions.

## Columns

| Column | Meaning |
|---|---|
| `geo`, `geo_label` | Eurostat country code and name (`EU27_2020` = EU of 27) |
| `year` | Survey year (the survey asks about the current year) |
| `size_class`, `size_label` | `GE10` (10+), `10-49`, `50-249`, `GE250` employees |
| `indicator_code`, `indicator_label` | Eurostat `indic_is` code and label |
| `category` | `any_ai`, `purpose`, `technology`, `barrier`, `sourcing`, `context` (added by the maintainer) |
| `unit` | `PC_ENT` = % of all enterprises; `PC_ENT_AI_TANY` = % of enterprises using AI; `PC_ENT_AI_EC` = % of enterprises that ever considered AI; `PC_ENT_AI_TX` = % of enterprises not using AI |
| `value_pct` | Value in percent; empty when Eurostat did not publish it |
| `flag` | Eurostat flag: `b` break in series, `u` low reliability, `c` confidential, `e` estimated |
| `source_name`, `source_url` | Eurostat table and link |
| `last_checked` | Date the row was fetched |
| `notes` | Flag in words |

## Method and limits

- Source: Eurostat, *Artificial intelligence by size class of enterprise* (`isoc_eb_ai`), ICT usage in enterprises survey, sectors C10-S951 excluding K (finance).
- Purposes and sourcing are kept as % of all enterprises and as % of AI users; barriers as % of enterprises that considered AI and % of non-users. Micro-enterprises (under 10) are left out because coverage varies by country.
- Some values carry a break in series (flag `b`), for example France in 2023 and the Netherlands in 2025: compare those years with care.
- 270 rows have no value: Eurostat flagged them but did not publish a number (mostly `u`, low reliability).
- `category` is the only value added by the maintainer; every number is Eurostat's.

## Licence and citation

Data: Eurostat, reused under the [Eurostat copyright notice](https://ec.europa.eu/eurostat/about-us/policies/copyright) (CC BY 4.0).
This compilation: CC BY 4.0. Cite as: *Antoine Dumont (2026), AI adoption in companies: France vs EU, from Eurostat isoc_eb_ai, https://antoinedumont.fr.*
