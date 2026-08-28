# LLM API price radar — cross-vendor list & promotion prices

> Generated `2026-08-28T15:28:31.279Z` · **709 models** across **17 price sources** · 53 models with an active promo/off-peak price · unit: **USD per 1M tokens** (CNY→USD @ 0.14) · blended = (3×input + 1×output)/4
> Regenerate: `node scripts/collect.js` · data: [`data/prices.json`](data/prices.json) · sources: [`sources/providers.json`](sources/providers.json)

## Cheapest right now, by category

| Category | # | Provider | Model | Input | Output | Blended | Basis |
|---|---|---|---|---:|---:|---:|---|
| **Flagship (≥ $4 in or ≥ $20 out)** | 1 | google | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
|  | 2 | litellm | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
|  | 3 | openrouter | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
| **Reasoning** | 1 | zai | `glm-z1-flashx` | $0.014 | $0.014 | **$0.014** | list |
|  | 2 | zai | `glm-z1-air` | $0.070 | $0.070 | **$0.070** | list |
|  | 3 | openrouter | `olmo-3-32b-think` | $0.150 | $0.500 | **$0.237** | list |
| **Mid-tier ($1–4 in)** | 1 | litellm | `MiniMax-M3` | $0.300 | $1.20 | **$0.525** | list |
|  | 2 | minimax | `MiniMax-M3` | $0.300 | $1.20 | **$0.525** | promo |
|  | 3 | openrouter | `minimax-m3` | $0.300 | $1.20 | **$0.525** | list |
| **Coding** | 1 | openrouter | `qwen3-coder-30b-a3b-instruct` | $0.070 | $0.280 | **$0.122** | list |
|  | 2 | litellm | `devstral-small-latest` | $0.100 | $0.300 | **$0.150** | list |
|  | 3 | litellm | `deepseek-coder` | $0.140 | $0.280 | **$0.175** | list |
| **Budget (< $1 in)** | 1 | zai | `glm-4-flashx-250414` | $0.0070 | $0.0070 | **$0.0070** | promo |
|  | 2 | zai | `codegeex-4` | $0.014 | $0.014 | **$0.014** | list |
|  | 3 | openrouter | `mistral-nemo` | $0.019 | $0.030 | **$0.022** | list |
| **Vision / multimodal** | 1 | openrouter | `qwen3-vl-32b-instruct` | $0.104 | $0.416 | **$0.182** | list |
|  | 2 | openrouter | `qwen3-vl-8b-instruct` | $0.117 | $0.455 | **$0.202** | list |
|  | 3 | openrouter | `qwen3-vl-30b-a3b-instruct` | $0.130 | $0.520 | **$0.228** | list |

## Active promotions & off-peak prices

### Per-model (30)

| Provider | Model | List in/out | Promo in/out | Discount | Type / window | Ends | Source |
|---|---|---:|---:|---:|---|---|---|
| zai | `glm-4-flashx-250414` | $0.014 / $0.014 | **$0.0070 / $0.0070** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| zai | `glm-4-air` | $0.070 / $0.070 | **$0.035 / $0.035** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| mistral | `ministral-3b-latest` | $0.100 / $0.100 | **$0.050 / $0.050** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| zai | `glm-4-long` | $0.140 / $0.140 | **$0.070 / $0.070** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| mistral | `ministral-8b-latest` | $0.150 / $0.150 | **$0.075 / $0.075** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| mistral | `voxtral-small-latest` | $0.100 / $0.400 | **$0.050 / $0.200** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| mistral | `ministral-14b-latest` | $0.200 / $0.200 | **$0.100 / $0.100** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| mistral | `mistral-small-latest` | $0.150 / $0.600 | **$0.075 / $0.300** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| mistral | `codestral-latest` | $0.300 / $0.900 | **$0.150 / $0.450** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| deepseek | `deepseek-v4-flash` | $0.440 / $1.32 | **$0.220 / $0.660** | 50% | undefined −50% | open | [manual](https://api-docs.deepseek.com/quick_start/pricing) |
| deepseek | `deepseek-v4-flash-vision-exp` | $0.440 / $1.32 | **$0.220 / $0.660** | 50% | undefined −50% | open | [manual](https://api-docs.deepseek.com/quick_start/pricing) |
| zai | `glm-4-plus` | $0.700 / $0.700 | **$0.350 / $0.350** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| mistral | `mistral-large-latest` | $0.500 / $1.50 | **$0.250 / $0.750** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| minimax | `MiniMax-M3` | $0.600 / $2.40 | **$0.300 / $1.20** | 50% | permanent-cut −50% | open | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| minimax | `MiniMax-M3-priority` | $0.900 / $3.60 | **$0.450 / $1.80** | 50% | permanent-cut −50% | open | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| deepseek | `deepseek-v4-pro` | $1.32 / $3.96 | **$0.660 / $1.98** | 50% | undefined −50% | open | [manual](https://api-docs.deepseek.com/quick_start/pricing) |
| minimax | `MiniMax-M3-gt512k` | $1.20 / $4.80 | **$0.600 / $2.40** | 50% | permanent-cut −50% | open | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| mistral | `zai-glm-5-2` | $1.40 / $4.40 | **$0.700 / $2.20** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| google | `gemini-3.7-flash` | $1.50 / $7.50 | **$0.750 / $3.75** | 50% | undefined −50% until 2026-12-31 | 2026-12-31 | [manual](https://ai.google.dev/gemini-api/docs/pricing) |
| mistral | `mistral-medium-latest` | $1.50 / $7.50 | **$0.750 / $3.75** | 50% | batch −50% | open | [manual](https://mistral.ai/pricing#api-pricing) |
| minimax | `MiniMax-M3-priority-gt512k` | $1.80 / $7.20 | **$0.900 / $3.60** | 50% | permanent-cut −50% | open | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| zai | `glm-4` | $14.00 / $14.00 | **$7.00 / $7.00** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| zai | `glm-4-0520` | $14.00 / $14.00 | **$7.00 / $7.00** | 50% | batch −50% | open | [manual](https://open.bigmodel.cn/pricing) |
| moonshot | `kimi-k2.5` | $0.600 / $3.00 | **$0.360 / $1.80** | 40% | batch −40% | open | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| moonshot | `kimi-k2.6` | $0.950 / $4.00 | **$0.570 / $2.40** | 40% | batch −40% | open | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| moonshot | `kimi-k2.7-code` | $0.950 / $4.00 | **$0.570 / $2.40** | 40% | batch −40% | open | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| openrouter | `hy3` | $0.132 / $0.528 | **$0.083 / $0.330** | 37.5% | off-peak −37.5% (daily 16:00-00:00 UTC) | open | [direct-api](https://openrouter.ai/tencent/hy3) |
| openai | `gpt-5.6-sol` | $5.00 / $30.00 | **$4.00 / $20.00** | 20% | undefined −20% until 2026-11-21 | 2026-11-21 | [manual](https://openai.com/api/pricing/) |
| zai | `glm-4-flash` | $0 / $0 | **$0 / $0** | —% | free-tier | open | [manual](https://open.bigmodel.cn/pricing) |
| zai | `glm-4.7-flash` | $0 / $0 | **$0 / $0** | —% | free-tier | open | [manual](https://open.bigmodel.cn/pricing) |

### Provider-level offers, plans & price cuts (54)

| Provider | Offer | Type | Price | Detail | Valid until | Confidence |
|---|---|---|---:|---|---|---|
| mistral | [Batch API — 50% discount](https://mistral.ai/pricing#api-pricing) | batch | — | 'Batch' pricing tab halves every per-token price vs Standard. Tooltip: 'High-volume processing, at half price, for maximum efficiency.' FAQ: 'Batch processing, for high-volume work, reduces the price by 50%.' Standing discount, no end date shown. | open | browser |
| mistral | [Cached input tokens — up to 90% off input](https://mistral.ai/pricing#api-pricing) | permanent-cut | — | 'Configure your API' toggle labelled '-90% ON INPUT TOKENS': 'Ideal for repeated prompts, cutting input costs by 90%.' Applying it reduced every model's input price to exactly 10% (e.g. Medium $1.5 → $0.15). Standing discount, no end date. | open | browser |
| mistral | [Free plan — $10/mo in API credits](https://mistral.ai/pricing#api-pricing) | free-tier | USD 0/month | Free plan includes '$10 /mo in API credits' plus access to Mistral Studio. | open | browser |
| mistral | [Pro plan — $14.99/mo incl. $30/mo API credits](https://mistral.ai/pricing#api-pricing) | subscription | USD 14.99/month | Pro: $14.99/mo excluding taxes; includes '$30 /mo in API credits', all-day coding in CLI/IDE/web (Mistral Vibe). | open | browser |
| mistral | [Team plan — $24.99/user/mo incl. $50/mo API credits](https://mistral.ai/pricing#api-pricing) | subscription | USD 24.99/month | Team: $24.99/user/mo excluding taxes; includes '$50 /mo' in API credits, up to 30GB storage per user. | open | browser |
| mistral | [Student discount — Pro at $5.99/mo](https://mistral.ai/pricing#api-pricing) | subscription | USD 5.99 (was 14.99)/month | FAQ: 'Verified students can get Mistral Pro for $5.99 / month (normally $14.99).' Requires student verification; no end date stated. | open | browser |
| mistral | [Mistral Moderation 2 — free](https://mistral.ai/pricing#api-pricing) | free-tier | USD 0 | Classifier service for text content moderation listed as 'Free' (mistral-moderation-2603). | open | browser |
| mistral | [Leanstral — free API endpoint](https://mistral.ai/pricing#api-pricing) | free-tier | USD 0 | LABS model labs-leanstral-2603, 'API endpoint: Free'. | open | browser |
| groq | [Batch API 50% discount](https://console.groq.com/docs/models) | batch | — | Batch processing runs asynchronous request batches with a 24-hour to 7-day processing window. "Pricing is at a 50% cost discount compared to synchronous API pricing." Docs also state: "The batch discount does not stack with prompt caching discounts. All batch tokens are billed at the 50% batch rate regardless of cache status." Standing feature, not time-limited. | open | browser |
| groq | [Prompt caching 50% off cached input tokens](https://console.groq.com/docs/models) | permanent-cut | — | Automatic prefix caching on supported models, no code changes and no additional fees. Docs: cache hits reduce "token costs by 50% for cached portions"; "Pricing discount will only apply on successful cache hits." Standing feature, not time-limited (type approximated; no discrete promo category fits). | open | browser |
| groq | [Free tier](https://console.groq.com/docs/models) | free-tier | — | Groq offers a Free plan with lower rate limits ("Free Plan Limits" section on the Rate Limits page) before upgrading to the pay-as-you-go Developer tier. No published free token quota amount. New Developer-tier users are billed progressively at $1/$10/$100/$500/$1,000 lifetime-usage thresholds rather than receiving a credit grant; no charge is issued below $0.50. | open | browser |
| groq | [Occasional promotional credits](https://console.groq.com/docs/models) | free-tier | — | Billing FAQ: "Are there promotional credits, or trial offers?" — "Yes! We occasionally offer promotional credits, such as during hackathons and special events." No amount, no eligibility rules, and no end date published. | open | browser |
| fireworks | [$1 in free credits for new serverless users](https://fireworks.ai/pricing) | free-tier | — | Serverless Inference section: "Pay per token, with high rate limits and postpaid billing. Get started with $1 in free credits." | open | browser |
| fireworks | [Batch inference 50% discount](https://fireworks.ai/pricing) | batch | — | "Batch inference is billed at 50% of serverless pricing on both input and output." Applies to all serverless text/vision models listed above; no end date shown. | open | browser |
| fireworks | [GPU compute: On-demand GPU pricing increase from Sep 1 (current lower rate through Aug 31)](https://fireworks.ai/pricing) | limited-time | USD 7 (was 8) | On-demand GPU/hour table has two columns, "PRICE ($) PER HOUR - UPTO AUG 31" and "PRICE ($) PER HOUR - FROM SEP 1": H100 80GB $7.00 -> $8.00; H200 141GB $7.00 -> $8.00; B200 180GB $10.00 -> $13.00; B300 288GB $12.00 -> $15.00; GB300 288GB $18.00 -> $20.00. GPU-hour pricing, not per-token. Year not stated on page; observed 2026-08-26. (GPU-hour pricing, not per-token) | 2026-08-31 | browser |
| fireworks | [Serverless Training API checkpoint storage free during private preview](https://fireworks.ai/pricing) | free-tier | — | "Checkpoint storage for serverless models is included during private preview." Training product, not text-generation inference. | open | browser |
| cerebras | [Free Trial](https://www.cerebras.ai/pricing) | free-tier | — | Get started with $5 in free credits after making an account. Access to all Cerebras powered models, community support via Discord. | open | browser |
| moonshot | [Batch API discount](https://platform.moonshot.ai/docs/pricing/chat) | batch | — | Batch API inference costs are 60% of the standard model price, ideal for large-scale tasks with low real-time requirements. Supported models: kimi-k2.7-code, kimi-k2.6, kimi-k2.5. Tasks must complete within the specified completion_window. | open | browser |
| moonshot | [$5 voucher on $5 cumulative recharge](https://platform.moonshot.ai/docs/pricing/chat) | voucher | USD 5 | To prevent abuse, you need to recharge at least $1 to start using, and when your cumulative recharge reaches $5, you will receive a $5 voucher. Vouchers do not count towards the cumulative recharge total. | open | browser |
| minimax | [MiniMax-M3 Permanent 50% off](https://platform.minimax.io/docs/guides/pricing-paygo) | launch | USD 0.3 (was 0.6) | Red "Permanent 50% off" badge on both MiniMax-M3 rows (≤512k and >512k input), applied on both the Standard and Priority tabs. List prices are struck through and the half-price figures are shown as effective. Standard ≤512k: $0.60→$0.30 in / $2.40→$1.20 out / $0.12→$0.06 cache read. Standard >512k: $1.20→$0.60 / $4.80→$2.40 / $0.24→$0.12. Priority ≤512k: $0.90→$0.45 / $3.60→$1.80 / $0.18→$0.09. Priority >512k: $1.80→$0.90 / $7.20→$3.60 / $0.36→$0.18. No end date stated — labelled "Permanent". | open | browser |
| minimax | [Token Plan — Plus](https://platform.minimax.io/docs/guides/pricing-paygo) | subscription | USD 22/month | Monthly Token Plan subscription via Subscription Key. "Personal projects and prototyping". 5-hour rolling and weekly quota windows; 3-4 agents. Covers the full MiniMax lineup (M3 / M2.7 / image / speech); MiniMax H3, voice design and rapid voice cloning not supported. | open | browser |
| minimax | [Token Plan — Max](https://platform.minimax.io/docs/guides/pricing-paygo) | subscription | USD 55/month | Monthly Token Plan subscription. "Daily coding with agents and multimodal work". 5-hour rolling and weekly quota windows; 4-5 agents. | open | browser |
| minimax | [Token Plan — Ultra](https://platform.minimax.io/docs/guides/pricing-paygo) | subscription | USD 132/month | Monthly Token Plan subscription. "Heavy Agent workflows and extended sessions". 5-hour rolling and weekly quota windows; 6-7 agents. | open | browser |
| tencent-hunyuan | [首次开通免费额度（免费资源包）](https://cloud.tencent.com/document/product/1729/97731) | free-tier | CNY 0 | 首次开通腾讯混元大模型服务后发放一次性免费资源包：文本/视觉模型共100万 tokens（Hunyuan-a13b、Hunyuan-role-latest、Hunyuan-translation、Hunyuan-translation-lite、Tencent HY Vision 1.5 Instruct、Hunyuan-turbos-vision、Hunyuan-t1-vision、Hunyuan-turbos-vision-video 共享消耗）；Hunyuan-embedding 单独100万 tokens。资源包有效期1年，自开通服务之日起1年内未用完则过期作废。结算顺序：免费资源包 > 付费资源包 > 按量后付费。欠费或违规停服期间不能享受免费额度。 | open | browser |
| zai | [缓存存储限时免费 (cache storage free for a limited time)](https://open.bigmodel.cn/pricing) | limited-time | CNY 0 | Every flagship text model row lists 缓存存储 (cache storage, 百万tokens/小时) as 限时免费 — free for a limited time. Cache-hit reads (缓存命中) are still charged at the listed per-1M rate. No end date shown. | open | browser |
| zai | [GLM Coding Plan — Lite (连续包年, 7折)](https://open.bigmodel.cn/glm-coding) | subscription | CNY 82.6 (was 118)/month | Yearly auto-renew, 30% off list monthly rate (¥118/月 → ¥82.6/月). | open | browser |
| zai | [GLM Coding Plan — Pro (连续包年, 7折)](https://open.bigmodel.cn/glm-coding) | subscription | CNY 376.6 (was 538)/month | Yearly auto-renew, 30% off (¥538/月 → ¥376.6/月). | open | browser |
| zai | [GLM Coding Plan — Max (连续包年, 7折)](https://open.bigmodel.cn/glm-coding) | subscription | CNY 754.6 (was 1078)/month | Yearly auto-renew, 30% off (¥1078/月 → ¥754.6/月). | open | browser |
| zai | [搜索工具 新品上线限时抢4折体验包](https://open.bigmodel.cn/pricing) | limited-time | — | Banner under 搜索工具服务 on the pricing page: "新品上线限时抢4折体验包，立享优惠" — limited-time 60%-off (4折) trial resource pack for the search tool service. Links to https://open.bigmodel.cn/tokenspropay?productIds=product-fa675d. No price or end date shown on the pricing page. | open | browser |
| zai | [尝鲜秒杀专区 — GLM-5.2 resource pack (2000万 tokens)](https://open.bigmodel.cn/special_area) | limited-time | CNY 39.9 (was 80) | Flash-sale token pack for GLM-5.2: 20M tokens, 有效期 3个月 (3-month validity), 限购 1 次 (limit 1 per user). ¥39.9 vs list ¥80 (≈5折). Daily limited quantity, 低至3折. | open | browser |
| zai | [尝鲜秒杀专区 — GLM-5.2 尊享包 (1亿 tokens)](https://open.bigmodel.cn/special_area) | limited-time | CNY 189.9 (was 380) | Flash-sale token pack for GLM-5.2: 100M tokens, 有效期 3个月, 限购 1 次. ¥189.9 vs list ¥380 (5折). | open | browser |
| zai | [开发者专区 — 开发者专享资源包，7折起](https://open.bigmodel.cn/special_area) | limited-time | — | Developer zone resource packs from 30% off. Text-relevant packs listed are vision/OCR/image/video only (GLM-4.6V ¥16 vs ¥20; GLM-4.6V-FlashX ¥8 vs ¥10; 联网搜索 2千次 ¥70 vs ¥100; GLM-OCR ¥8 vs ¥10). 有效期 3个月, 限购 3 次. | open | browser |
| zai | [企业专区 — 企业大容量资源包，低至7折](https://open.bigmodel.cn/special_area) | limited-time | — | Enterprise large-capacity resource packs as low as 30% off, 有效期 4个月, requires 企业认证 (enterprise verification). E.g. GLM-4.6V 5亿tokens ¥800 vs ¥1000; 联网搜索 10万次 ¥3500 vs ¥5000. | open | browser |
| zai | [教育专区 — 高校师生专享低至6折](https://open.bigmodel.cn/special_area) | limited-time | — | Education zone for university faculty/students, as low as 40% off. E.g. GLM-4.6V 1000万tokens ¥16 vs ¥20; 联网搜索 2千次 ¥60 vs ¥100; GLM-Image 500次 ¥35 vs ¥50. 有效期 3个月, 限购 3 次. | open | browser |
| zai | [GLM-5.3 上线 — 邀好友送大额资源包](https://open.bigmodel.cn/pricing) | limited-time | — | "'GLM-5.3'重磅升级：核心能力全面提升，邀好友送大额资源包！邀请好友注册认证，狂得2亿最新模型Tokens！" — referral promo: invite friends to register+verify and receive up to 200M tokens of the newest model. No end date shown. | open | browser |
| openai | Batch API -50% | batch | — | 50% off input and output for async tasks completed within 24h. | open | browser |
| openai | Data residency +10% | surcharge | — | Regional/US-only processing adds 10% to standard rates. | open | browser |
| anthropic | Batch processing -50% | batch | — | Save 50% with batch processing. | open | browser |
| anthropic | Opus 5 fast mode | speed-tier | — | Up to 2.5x faster at 2x standard pricing. | open | browser |
| anthropic | US-only inference +10% | surcharge | — | US-region workloads at 1.1x input/output. | open | browser |
| anthropic | Code execution free tier | free-tier | — | 50 free container-hours/day per org, then $0.05/hr. | open | browser |
| google | Gemini 3.x launch pricing | intro | — | 3.7/3.6 Flash at $0.75/$3.75 through 2026-12-31, doubles to $1.50/$7.50 on 2027-01-01. | open | browser |
| google | Free tier (AI Studio) | free-tier | — | Free input/output with limited model access via Google AI Studio (data used to improve products). | open | browser |
| google | Batch API -50% | batch | — | 50% cost reduction on the paid tier. | open | browser |
| deepseek | Off-peak 50% discount | off-peak | — | 50% off all tokens outside peak hours (peak = 01:00-04:00 & 06:00-10:00 UTC Mon-Fri). | open | browser |
| openai | [GPT-5.6 Luna 80% price cut / Terra 20% cut](https://www.cloudzero.com/blog/llm-api-pricing-comparison/) | permanent-cut | — | On 2026-07-30 OpenAI cut GPT-5.6 Luna to $0.20/$1.20 per 1M (input/output) and Terra by 20%. | open | web-research |
| anthropic | [Claude Sonnet 5 introductory price made permanent](https://www.cloudzero.com/blog/llm-api-pricing-comparison/) | permanent-cut | — | Launched at $2/$10 per 1M as introductory pricing; Anthropic made the rate permanent on 2026-08-11 (the scheduled Sept 1 increase to $3/$15 was cancelled). | open | web-research |
| alibaba-modelstudio | [Bailian Coding Plan / Token Plan](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | subscription | CNY 200/month | Coding Plan from ¥200/mo; Token Plan Team Edition from ¥198/mo (multi-seat). New purchases currently Pro tier only. | open | web-research |
| volcengine-ark | [Ark Coding Plan Lite first month ¥9.9](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | limited-time | CNY 9.9 (was 40)/month | Coding Plan Lite ¥40/mo, first month ¥9.9 (daily flash sale); Agent Plan = multimodal + Harness bundle. | open | web-research |
| zai | [GLM Coding Plan Pro annual 30% off](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | limited-time | CNY 104 (was 149)/month | Coding Plan Pro ¥149/mo, ¥104/mo on annual billing; plans from ¥49/mo. | open | web-research |
| minimax | [MiniMax Token Plan from ¥29/mo](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | subscription | CNY 29/month | Full-modal bundle (text + audio + video) from ¥29/mo. | open | web-research |
| google | [Gemini API free tier](https://ai.google.dev/gemini-api/docs/pricing) | free-tier | — | Rate-limited free tier for prototyping on Flash/Flash-Lite models. | open | web-research |
| deepseek | [Off-peak discount window](https://codersera.com/blog/deepseek-v4-pro-permanent-price-cut-may-2026/) | off-peak | — | Reduced rates 16:30-00:30 UTC daily; V4-Pro ~$0.66/$1.98 off-peak vs $1.32/$3.96 peak per 1M since 2026-08-16. | open | web-research |
| deepseek | [New-account free token grant](https://www.nxcode.io/resources/news/deepseek-api-pricing-complete-guide-2026) | free-tier | — | Reported 5M free tokens for new API accounts (verify in console). | open | web-research |

## Same model, different sellers (cross-vendor spread)

Models offered by 2+ price sources, sorted by price spread between the cheapest and priciest seller (effective price, promo applied). 115 models.

| Vendor | Model | Cheapest seller | Spread | Sellers (blended $/1M, in/out) |
|---|---|---|---:|---|
| deepseek | `deepseek-v4-flash` | openrouter | 595% | openrouter **$0.048** ($0.030/$0.100) · deepseek **$0.330** ($0.220/$0.660, promo) |
| mistral | `mistral-medium-3` | openrouter | 275% | openrouter **$0.800** ($0.400/$2.00) · litellm **$3.00** ($1.50/$7.50) |
| zai | `glm-4-5-air` | zai | 176% | zai **$0.154** ($0.112/$0.280) · openrouter **$0.310** ($0.130/$0.850) · litellm **$0.425** ($0.200/$1.10) |
| openai | `gpt-4` | litellm | 150% | litellm **$15.00** ($10.00/$30.00) · openrouter **$37.50** ($30.00/$60.00) |
| zai | `glm-4-7` | zai | 104% | zai **$0.490** ($0.280/$1.12) · openrouter **$0.738** ($0.400/$1.75) · litellm **$1.00** ($0.600/$2.20) |
| tencent-hunyuan | `hunyuan-a13b` | tencent-hunyuan | 102% | tencent-hunyuan **$0.122** ($0.070/$0.280) · openrouter **$0.247** ($0.140/$0.570) |
| deepseek | `deepseek-v4-flash-vision` | deepseek | 100% | deepseek **$0.330** ($0.220/$0.660, promo) · openrouter **$0.330** ($0.220/$0.660) · litellm **$0.660** ($0.440/$1.32) |
| google | `gemini-3-7-flash` | openrouter | 100% | openrouter **$0.750** ($0.375/$1.88) · google **$1.50** ($0.750/$3.75, promo) · litellm **$1.50** ($0.750/$3.75) |
| mistral | `ministral-3b` | mistral | 100% | mistral **$0.050** ($0.050/$0.050, promo) · litellm **$0.100** ($0.100/$0.100) · openrouter **$0.100** ($0.100/$0.100) |
| mistral | `ministral-8b` | mistral | 100% | mistral **$0.075** ($0.075/$0.075, promo) · litellm **$0.150** ($0.150/$0.150) · openrouter **$0.150** ($0.150/$0.150) |
| mistral | `voxtral-small` | mistral | 100% | mistral **$0.087** ($0.050/$0.200, promo) · litellm **$0.175** ($0.100/$0.400) |
| mistral | `ministral-14b` | mistral | 100% | mistral **$0.100** ($0.100/$0.100, promo) · litellm **$0.200** ($0.200/$0.200) · openrouter **$0.200** ($0.200/$0.200) |
| mistral | `mistral-small` | mistral | 100% | mistral **$0.131** ($0.075/$0.300, promo) · litellm **$0.150** ($0.100/$0.300) · openrouter **$0.263** ($0.150/$0.600) |
| mistral | `codestral` | mistral | 100% | mistral **$0.225** ($0.150/$0.450, promo) · litellm **$0.450** ($0.300/$0.900) · openrouter **$0.450** ($0.300/$0.900) |
| mistral | `mistral-large` | mistral | 100% | mistral **$0.375** ($0.250/$0.750, promo) · litellm **$0.750** ($0.500/$1.50) · openrouter **$0.750** ($0.500/$1.50) |
| mistral | `zai-glm-5-2` | mistral | 100% | mistral **$1.07** ($0.700/$2.20, promo) · litellm **$2.15** ($1.40/$4.40) |
| mistral | `mistral-medium` | mistral | 100% | mistral **$1.50** ($0.750/$3.75, promo) · litellm **$3.00** ($1.50/$7.50) |
| openai | `gpt-5-6-sol` | openrouter | 100% | openrouter **$4.00** ($2.00/$10.00) · litellm **$8.00** ($4.00/$20.00) · openai **$8.00** ($4.00/$20.00, promo) |
| alibaba-modelstudio | `qwen3-7-max` | openrouter | 69% | openrouter **$2.21** ($1.48/$4.42) · litellm **$3.75** ($2.50/$7.50) |
| moonshot | `kimi-k2-5` | moonshot | 67% | moonshot **$0.720** ($0.360/$1.80, promo) · litellm **$1.20** ($0.600/$3.00) · openrouter **$1.20** ($0.600/$3.00) |
| moonshot | `kimi-k2-6` | moonshot | 67% | moonshot **$1.03** ($0.570/$2.40, promo) · litellm **$1.71** ($0.950/$4.00) · openrouter **$1.71** ($0.950/$4.00) |
| zai | `glm-5` | openrouter | 67% | openrouter **$0.930** ($0.600/$1.92) · zai **$1.05** ($0.560/$2.52) · litellm **$1.55** ($1.00/$3.20) |
| alibaba-modelstudio | `qwen3-vl-32b` | openrouter | 54% | openrouter **$0.182** ($0.104/$0.416) · litellm **$0.280** ($0.160/$0.640) |
| alibaba-modelstudio | `qwen-plus` | openrouter | 54% | openrouter **$0.390** ($0.260/$0.780) · litellm **$0.600** ($0.400/$1.20) |
| zai | `glm-5-turbo` | zai | 47% | zai **$1.29** ($0.700/$3.08) · openrouter **$1.90** ($1.20/$4.00) |
| deepseek | `deepseek` | litellm | 43% | litellm **$0.315** ($0.280/$0.420) · openrouter **$0.450** ($0.257/$1.03) |
| zai | `glm-4-6` | openrouter | 32% | openrouter **$0.760** ($0.430/$1.75) · litellm **$1.00** ($0.600/$2.20) |
| zai | `glm-5-1` | zai | 32% | zai **$1.47** ($0.840/$3.36) · openrouter **$1.94** ($1.26/$3.96) |
| google | `gemini-pro` | litellm | 31% | litellm **$3.44** ($1.25/$10.00) · openrouter **$4.50** ($2.00/$12.00) |
| moonshot | `kimi-k2-7-code` | moonshot | 31% | moonshot **$1.03** ($0.570/$2.40, promo) · openrouter **$1.34** ($0.660/$3.40) |
| alibaba-modelstudio | `qwen3-next-80b-a3b` | openrouter | 18% | openrouter **$0.350** ($0.100/$1.10) · litellm **$0.412** ($0.150/$1.20) |
| minimax | `minimax-m2` | openrouter | 18% | openrouter **$0.446** ($0.255/$1.02) · litellm **$0.525** ($0.300/$1.20) · minimax **$0.525** ($0.300/$1.20) |
| moonshot | `kimi-k3` | openrouter | 18% | openrouter **$5.10** ($2.55/$12.75) · litellm **$6.00** ($3.00/$15.00) · moonshot **$6.00** ($3.00/$15.00) |
| zai | `glm-5-3` | zai | 18% | zai **$1.82** ($1.12/$3.92) · litellm **$2.15** ($1.40/$4.40) · openrouter **$2.15** ($1.40/$4.40) |
| google | `gemini-flash` | openrouter | 13% | openrouter **$0.750** ($0.375/$1.88) · litellm **$0.850** ($0.300/$2.50) |
| alibaba-modelstudio | `qwen3-vl-235b-a22b` | openrouter | 11% | openrouter **$0.632** ($0.210/$1.90) · litellm **$0.700** ($0.400/$1.60) |
| minimax | `minimax-m2-5` | openrouter | 11% | openrouter **$0.472** ($0.270/$1.08) · litellm **$0.525** ($0.300/$1.20) · minimax **$0.525** ($0.300/$1.20) |
| mistral | `devstral` | litellm | 10% | litellm **$0.800** ($0.400/$2.00) · openrouter **$0.880** ($0.440/$2.20) |
| deepseek | `deepseek-r1` | openrouter | 5% | openrouter **$0.912** ($0.500/$2.15) · litellm **$0.960** ($0.550/$2.19) |
| deepseek | `deepseek-v3-2` | openrouter | 3% | openrouter **$0.302** ($0.269/$0.400) · litellm **$0.310** ($0.280/$0.400) |
| deepseek | `deepseek-v4-pro` | openrouter | 1% | openrouter **$0.978** ($0.782/$1.56) · deepseek **$0.990** ($0.660/$1.98, promo) |
| alibaba-modelstudio | `qwen3-7-flash` | alibaba-modelstudio | 0% | alibaba-modelstudio **$0.055** ($0.030/$0.130, unverified) · openrouter **$0.055** ($0.030/$0.130) |
| alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | litellm | 0% | litellm **$0.412** ($0.150/$1.20) · openrouter **$0.412** ($0.150/$1.20) |
| alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | litellm | 0% | litellm **$1.30** ($0.400/$4.00) · openrouter **$1.30** ($0.400/$4.00) |
| alibaba-modelstudio | `qwen3-8-max` | litellm | 0% | litellm **$3.00** ($2.00/$6.00) · openrouter **$3.00** ($2.00/$6.00) |
| anthropic | `claude-haiku-4-5` | anthropic | 0% | anthropic **$2.00** ($1.00/$5.00) · litellm **$2.00** ($1.00/$5.00) · openrouter **$2.00** ($1.00/$5.00) |
| anthropic | `claude-sonnet-5` | anthropic | 0% | anthropic **$4.00** ($2.00/$10.00) · litellm **$4.00** ($2.00/$10.00) · openrouter **$4.00** ($2.00/$10.00) |
| anthropic | `claude-sonnet-4-6` | anthropic | 0% | anthropic **$6.00** ($3.00/$15.00) · litellm **$6.00** ($3.00/$15.00) · openrouter **$6.00** ($3.00/$15.00) |
| anthropic | `claude-sonnet-4-5` | litellm | 0% | litellm **$6.00** ($3.00/$15.00) · openrouter **$6.00** ($3.00/$15.00) |
| anthropic | `claude-opus-4-8` | anthropic | 0% | anthropic **$10.00** ($5.00/$25.00) · litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-5` | anthropic | 0% | anthropic **$10.00** ($5.00/$25.00) · litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-5` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-6` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-7` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-fable-5` | anthropic | 0% | anthropic **$20.00** ($10.00/$50.00) · litellm **$20.00** ($10.00/$50.00) · openrouter **$20.00** ($10.00/$50.00) |
| anthropic | `claude-opus-4-1` | anthropic | 0% | anthropic **$30.00** ($15.00/$75.00) · openrouter **$30.00** ($15.00/$75.00) |
| google | `gemini-2-5-flash-lite` | google | 0% | google **$0.175** ($0.100/$0.400) · litellm **$0.175** ($0.100/$0.400) · openrouter **$0.175** ($0.100/$0.400) |
| google | `gemini-3-1-flash-lite` | google | 0% | google **$0.563** ($0.250/$1.50) · litellm **$0.563** ($0.250/$1.50) · openrouter **$0.563** ($0.250/$1.50) |
| google | `gemini-2-5-flash` | google | 0% | google **$0.850** ($0.300/$2.50) · litellm **$0.850** ($0.300/$2.50) · openrouter **$0.850** ($0.300/$2.50) |
| google | `gemini-3-5-flash-lite` | google | 0% | google **$0.850** ($0.300/$2.50) · litellm **$0.850** ($0.300/$2.50) · openrouter **$0.850** ($0.300/$2.50) |
| … | 55 more in data/prices.json | | | |

## Price sources (sites, automation, login)

| Provider | Kind | Region | Site | Pricing page | OpenAI-compatible base URL | Automation | Login needed | Models | Last collected | Status |
|---|---|---|---|---|---|---|---|---:|---|---|
| **OpenRouter** (`openrouter`) | aggregator | global | [openrouter.ai](https://openrouter.ai) | [pricing](https://openrouter.ai/models) | `https://openrouter.ai/api/v1` | `direct-api` | no | 352 | 2026-08-28 15:28 | ok |
| **LiteLLM price registry** (`litellm`) | aggregator | global | [github.com](https://github.com/BerriAI/litellm) | [pricing](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) | — | `direct-api` | no | 192 | 2026-08-28 15:28 | ok |
| **OpenAI** (`openai`) | vendor | global | [openai.com](https://openai.com) | [pricing](https://openai.com/api/pricing/) | `https://api.openai.com/v1` | `lm-assist-browser` | no | 4 | — | not run |
| **Anthropic** (`anthropic`) | vendor | global | [www.anthropic.com](https://www.anthropic.com) | [pricing](https://www.anthropic.com/pricing) | `https://api.anthropic.com/v1` | `lm-assist-browser` | no | 7 | — | not run |
| **Google Gemini API** (`google`) | vendor | global | [ai.google.dev](https://ai.google.dev) | [pricing](https://ai.google.dev/gemini-api/docs/pricing) | `https://generativelanguage.googleapis.com/v1beta/openai/` | `public-page` | no | 8 | 2026-08-28 15:28 | ok |
| **DeepSeek** (`deepseek`) | vendor | cn | [platform.deepseek.com](https://platform.deepseek.com) | [pricing](https://api-docs.deepseek.com/quick_start/pricing) | `https://api.deepseek.com/v1` | `public-page` | no | 3 | 2026-08-28 15:28 | ok |
| **xAI (Grok)** (`xai`) | vendor | global | [x.ai](https://x.ai) | [pricing](https://docs.x.ai/docs/models) | `https://api.x.ai/v1` | `lm-assist-browser` | no | 4 | — | not run |
| **Mistral AI** (`mistral`) | vendor | eu | [mistral.ai](https://mistral.ai) | [pricing](https://mistral.ai/pricing#api-pricing) | `https://api.mistral.ai/v1` | `lm-assist-browser` | no | 11 | — | not run |
| **Groq** (`groq`) | inference-host | global | [groq.com](https://groq.com) | [pricing](https://groq.com/pricing) | `https://api.groq.com/openai/v1` | `lm-assist-browser` | no | 4 | — | not run |
| **Together AI** (`together`) | inference-host | global | [www.together.ai](https://www.together.ai) | [pricing](https://www.together.ai/pricing) | `https://api.together.xyz/v1` | `lm-assist-browser` | no | 31 | — | not run |
| **Fireworks AI** (`fireworks`) | inference-host | global | [fireworks.ai](https://fireworks.ai) | [pricing](https://fireworks.ai/pricing) | `https://api.fireworks.ai/inference/v1` | `lm-assist-browser` | no | 28 | — | not run |
| **Cerebras** (`cerebras`) | inference-host | global | [www.cerebras.ai](https://www.cerebras.ai) | [pricing](https://www.cerebras.ai/pricing) | `https://api.cerebras.ai/v1` | `lm-assist-browser` | no | 2 | — | not run |
| **Alibaba Cloud Model Studio (Bailian / Qwen)** (`alibaba-modelstudio`) | vendor | cn | [www.alibabacloud.com](https://www.alibabacloud.com/en/product/modelstudio) | [pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing) · [console](https://bailian.console.aliyun.com) | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | `lm-assist-browser` | 🔒 yes | 1 | — | not run |
| **Volcengine Ark (Doubao)** (`volcengine-ark`) | vendor | cn | [www.volcengine.com](https://www.volcengine.com/product/ark) | [pricing](https://www.volcengine.com/pricing?product=ark) · [console](https://console.volcengine.com/ark) | `https://ark.cn-beijing.volces.com/api/v3` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Moonshot AI (Kimi)** (`moonshot`) | vendor | cn | [platform.moonshot.ai](https://platform.moonshot.ai) | [pricing](https://platform.moonshot.ai/docs/pricing/chat) · [console](https://platform.moonshot.cn/console) | `https://api.moonshot.ai/v1` | `lm-assist-browser` | no | 11 | — | not run |
| **Z.ai / Zhipu (GLM)** (`zai`) | vendor | cn | [z.ai](https://z.ai) | [pricing](https://docs.z.ai/guides/overview/pricing) · [console](https://open.bigmodel.cn/pricing) | `https://api.z.ai/api/paas/v4` | `lm-assist-browser` | 🔒 yes | 32 | — | not run |
| **MiniMax** (`minimax`) | vendor | cn | [www.minimax.io](https://www.minimax.io) | [pricing](https://platform.minimax.io/docs/guides/pricing) · [console](https://platform.minimaxi.com) | `https://api.minimax.io/v1` | `lm-assist-browser` | no | 11 | — | not run |
| **SiliconFlow** (`siliconflow`) | inference-host | cn | [siliconflow.cn](https://siliconflow.cn) | [pricing](https://cloud.siliconflow.cn/models) · [console](https://cloud.siliconflow.cn) | `https://api.siliconflow.cn/v1` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Baidu Qianfan (ERNIE)** (`baidu-qianfan`) | vendor | cn | [cloud.baidu.com](https://cloud.baidu.com/product/qianfan) | [pricing](https://cloud.baidu.com/doc/qianfan-docs/s/wm7pf0hja) · [console](https://console.bce.baidu.com/qianfan) | `https://qianfan.baidubce.com/v2` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Tencent Hunyuan** (`tencent-hunyuan`) | vendor | cn | [cloud.tencent.com](https://cloud.tencent.com/product/hunyuan) | [pricing](https://cloud.tencent.com/document/product/1729/97731) · [console](https://console.cloud.tencent.com/hunyuan) | `https://api.hunyuan.cloud.tencent.com/v1` | `lm-assist-browser` | no | 8 | — | not run |
| **Amazon Bedrock** (`aws-bedrock`) | cloud | global | [aws.amazon.com](https://aws.amazon.com/bedrock/) | [pricing](https://aws.amazon.com/bedrock/pricing/) | — | `lm-assist-browser` | no | 0 | — | disabled |
| **Azure OpenAI** (`azure-openai`) | cloud | global | [azure.microsoft.com](https://azure.microsoft.com/en-us/products/ai-services/openai-service) | [pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/) | `https://{resource}.openai.azure.com/openai/v1` | `lm-assist-browser` | no | 0 | — | disabled |

## All tracked models by category

Sorted by effective blended price (promo/off-peak applied when available). Only the first 40 rows per category are shown; the full set is in `data/prices.json`.

### Flagship (≥ $4 in or ≥ $20 out) (69)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| google | google | `gemini-2.5-pro` | — | $1.25 | $10.00 | $0.125 | **$3.44** |  | yes | [manual](https://ai.google.dev/gemini-api/docs/pricing) |
| litellm | google | `gemini-2.5-pro` | 1.05M | $1.25 | $10.00 | $0.125 | **$3.44** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-2.5-pro` | 1.05M | $1.25 | $10.00 | $0.125 | **$3.44** | batch $0.625/$5.00 | yes | [direct-api](https://openrouter.ai/google/gemini-2.5-pro) |
| openrouter | openai | `gpt-5.6-sol` | 1.05M | $2.00 | $10.00 | $0.200 | **$4.00** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.6-sol) |
| openrouter | moonshot | `kimi-k3` | 1.05M | $2.55 | $12.75 | $0.256 | **$5.10** | batch $3.00/$15.00 | yes | [direct-api](https://openrouter.ai/moonshotai/kimi-k3) |
| litellm | google | `gemini-2.5-pro-preview-tts` | 1.05M | $1.00 | $20.00 | $0.125 | **$5.75** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | moonshot | `kimi-k3` | 1.05M | $3.00 | $15.00 | $0.300 | **$6.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| moonshot | moonshot | `kimi-k3` | 1.05M | $3.00 | $15.00 | $0.300 | **$6.00** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| zai | zai | `glm-4` (CNY 100/100) | 128K | $7.00 | $7.00 | — | **$7.00** | batch −50% | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `glm-4-0520` (CNY 100/100) | 128K | $7.00 | $7.00 | — | **$7.00** | batch −50% | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | openai | `gpt-4o-2024-05-13` | 128K | $5.00 | $15.00 | — | **$7.50** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-4o-2024-05-13) |
| litellm | google | `gemini-3.5-live-translate-preview` | — | $3.50 | $21.00 | — | **$7.88** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `daybreak-blue-latest` | 1.05M | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-5.6` | 922K | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-5.6-sol` | 922K | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openai | openai | `gpt-5.6-sol` | — | $4.00 | $20.00 | $0.500 | **$8.00** | undefined −20% until 2026-11-21 | yes | [manual](https://openai.com/api/pricing/) |
| fireworks | fireworks | `kimi-k3-fast` | — | $4.50 | $22.50 | $0.450 | **$9.00** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| anthropic | anthropic | `claude-opus-4.8` | — | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [manual](https://claude.com/pricing) |
| anthropic | anthropic | `claude-opus-5` | — | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [manual](https://claude.com/pricing) |
| litellm | anthropic | `claude-opus-4-5` | 200K | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | anthropic | `claude-opus-4-6` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | anthropic | `claude-opus-4-7` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | anthropic | `claude-opus-4-8` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | anthropic | `claude-opus-5` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-3-fast-beta` | 131K | $5.00 | $25.00 | $1.25 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-3-fast-latest` | 131K | $5.00 | $25.00 | $1.25 | **$10.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | anthropic | `claude-opus-4.5` | 200K | $5.00 | $25.00 | $0.500 | **$10.00** | batch $2.50/$12.50 | yes | [direct-api](https://openrouter.ai/anthropic/claude-opus-4.5) |
| openrouter | anthropic | `claude-opus-4.6` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** | batch $2.50/$12.50 | yes | [direct-api](https://openrouter.ai/anthropic/claude-opus-4.6) |
| openrouter | anthropic | `claude-opus-4.7` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** | batch $2.50/$12.50 | yes | [direct-api](https://openrouter.ai/anthropic/claude-opus-4.7) |
| openrouter | anthropic | `claude-opus-4.8` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** | batch $2.50/$12.50 | yes | [direct-api](https://openrouter.ai/anthropic/claude-opus-4.8) |
| openrouter | anthropic | `claude-opus-5` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** | batch $2.50/$12.50 | yes | [direct-api](https://openrouter.ai/anthropic/claude-opus-5) |
| openrouter | anthropic | `claude-opus-latest` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [direct-api](https://openrouter.ai/~anthropic/claude-opus-latest) |
| openrouter | openai | `gpt-5-image` | 400K | $10.00 | $10.00 | $1.25 | **$10.00** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5-image) |
| litellm | openai | `chat-latest` | 400K | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-5.5` | 1.05M | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openai | openai | `gpt-5.5` | 1.05M | $5.00 | $30.00 | — | **$11.25** |  | yes | [manual](https://www.morphllm.com/llm-api) |
| openrouter | sakana | `fugu-ultra` | 1M | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://openrouter.ai/sakana/fugu-ultra) |
| openrouter | openai | `gpt-5.5` | 1.05M | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.5) |
| openrouter | openai | `gpt-chat-latest` | 400K | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-chat-latest) |
| litellm | openai | `gpt-4-1106-preview` | 128K | $10.00 | $30.00 | — | **$15.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| … | | 29 more | | | | | | | | |

### Reasoning (40)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| zai | zai | `glm-z1-flashx` (CNY 0.1/0.1) | 128K | $0.014 | $0.014 | — | **$0.014** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `glm-z1-air` (CNY 0.5/0.5) | 128K | $0.070 | $0.070 | — | **$0.070** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | allenai | `olmo-3-32b-think` | 66K | $0.150 | $0.500 | — | **$0.237** |  | yes | [direct-api](https://openrouter.ai/allenai/olmo-3-32b-think) |
| zai | zai | `glm-4.1v-thinking-flashx` (CNY 2/2) | 64K | $0.280 | $0.280 | — | **$0.280** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| litellm | deepseek | `deepseek-reasoner` | 131K | $0.280 | $0.420 | $0.028 | **$0.315** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | arcee-ai | `trinity-large-thinking` | 262K | $0.220 | $0.850 | $0.060 | **$0.378** |  | yes | [direct-api](https://openrouter.ai/arcee-ai/trinity-large-thinking) |
| litellm | alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | 262K | $0.150 | $1.20 | — | **$0.412** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | 262K | $0.150 | $1.20 | — | **$0.412** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-next-80b-a3b-thinking) |
| openrouter | thinkingmachines | `inkling-small` | 1.05M | $0.450 | $1.20 | $0.100 | **$0.637** | batch $0.500/$1.20 | yes | [direct-api](https://openrouter.ai/thinkingmachines/inkling-small) |
| zai | zai | `glm-z1-airx` (CNY 5/5) | 32K | $0.700 | $0.700 | — | **$0.700** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | alibaba-modelstudio | `qwen3-235b-a22b-thinking-2507` | 131K | $0.230 | $2.30 | — | **$0.748** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-235b-a22b-thinking-2507) |
| openrouter | alibaba-modelstudio | `qwen3-30b-a3b-thinking-2507` | 82K | $0.200 | $2.40 | — | **$0.750** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-30b-a3b-thinking-2507) |
| openrouter | deepseek | `deepseek-r1-distill-llama-70b` | 8K | $0.800 | $0.800 | — | **$0.800** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b) |
| openrouter | deepseek | `deepseek-r1-0528` | 164K | $0.500 | $2.15 | $0.350 | **$0.912** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-r1-0528) |
| litellm | deepseek | `deepseek-r1` | 66K | $0.550 | $2.19 | — | **$0.960** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | moonshot | `kimi-k2-thinking` | 262K | $0.600 | $2.50 | $0.150 | **$1.07** |  | yes | [direct-api](https://openrouter.ai/moonshotai/kimi-k2-thinking) |
| litellm | alibaba-modelstudio | `qwq-plus` | 98K | $0.800 | $2.40 | — | **$1.20** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-max-thinking` | 262K | $0.780 | $3.90 | — | **$1.56** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-max-thinking) |
| litellm | xai | `grok-4.20-0309-non-reasoning` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.20-0309-reasoning` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.20-beta-0309-non-reasoning` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.20-beta-0309-reasoning` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | thinkingmachines | `inkling` | 1.05M | $0.950 | $4.05 | $0.160 | **$1.73** | batch $1.00/$4.05 | yes | [direct-api](https://openrouter.ai/thinkingmachines/inkling) |
| litellm | openai | `o3-mini` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o3-mini-2025-01-31` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o4-mini` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o4-mini-2025-04-16` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `o3-mini` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** |  | yes | [direct-api](https://openrouter.ai/openai/o3-mini) |
| openrouter | openai | `o3-mini-high` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** |  | yes | [direct-api](https://openrouter.ai/openai/o3-mini-high) |
| openrouter | openai | `o4-mini` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** |  | yes | [direct-api](https://openrouter.ai/openai/o4-mini) |
| openrouter | openai | `o4-mini-high` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** |  | yes | [direct-api](https://openrouter.ai/openai/o4-mini-high) |
| litellm | openai | `o3-2025-04-16` | 200K | $2.00 | $8.00 | $0.500 | **$3.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | perplexity | `sonar-reasoning-pro` | 128K | $2.00 | $8.00 | — | **$3.50** |  | yes | [direct-api](https://openrouter.ai/perplexity/sonar-reasoning-pro) |
| litellm | openai | `o1-2024-12-17` | 200K | $15.00 | $60.00 | $7.50 | **$26.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o3-pro` | 200K | $20.00 | $80.00 | — | **$35.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o3-pro-2025-06-10` | 200K | $20.00 | $80.00 | — | **$35.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `o3-pro` | 200K | $20.00 | $80.00 | — | **$35.00** |  | yes | [direct-api](https://openrouter.ai/openai/o3-pro) |
| litellm | openai | `o1-pro` | 200K | $150.00 | $600.00 | — | **$262.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o1-pro-2025-03-19` | 200K | $150.00 | $600.00 | — | **$262.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `o1-pro` | 200K | $150.00 | $600.00 | — | **$262.50** |  | yes | [direct-api](https://openrouter.ai/openai/o1-pro) |

### Mid-tier ($1–4 in) (169)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| litellm | minimax | `MiniMax-M3` | 1M | $0.300 | $1.20 | $0.060 | **$0.525** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| minimax | minimax | `MiniMax-M3` | — | $0.300 | $1.20 | $0.120 | **$0.525** | permanent-cut −50% | yes | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| openrouter | minimax | `minimax-m3` | 1.05M | $0.300 | $1.20 | $0.060 | **$0.525** | batch $0.300/$1.20 | yes | [direct-api](https://openrouter.ai/minimax/minimax-m3) |
| openrouter | deepseek | `deepseek-v4-pro` | 1.05M | $0.782 | $1.56 | $0.065 | **$0.978** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-pro) |
| deepseek | deepseek | `deepseek-v4-pro` | — | $0.660 | $1.98 | $0.044 | **$0.990** | undefined −50% | yes | [manual](https://api-docs.deepseek.com/quick_start/pricing) |
| openrouter | nousresearch | `hermes-3-llama-3.1-405b` | 131K | $1.00 | $1.00 | — | **$1.00** |  | yes | [direct-api](https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b) |
| openrouter | perplexity | `sonar` | 127K | $1.00 | $1.00 | — | **$1.00** |  | yes | [direct-api](https://openrouter.ai/perplexity/sonar) |
| together | together | `llama-3.3-70b` | — | $1.04 | $1.04 | — | **$1.04** |  | yes | [manual](https://www.together.ai/pricing) |
| minimax | minimax | `MiniMax-M3-gt512k` | — | $0.600 | $2.40 | $0.240 | **$1.05** | permanent-cut −50% | yes | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| mistral | mistral | `zai-glm-5-2` | — | $0.700 | $2.20 | $0.140 | **$1.07** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| fireworks | fireworks | `moe-56.1b-176b-parameters-size-based-tier` | — | $1.20 | $1.20 | — | **$1.20** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| litellm | xai | `grok-build-0.1` | 256K | $1.00 | $2.00 | $0.200 | **$1.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-3.5-turbo-0613` | 4K | $1.00 | $2.00 | — | **$1.25** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-3.5-turbo-0613) |
| openrouter | xai | `grok-build-0.1` | 256K | $1.00 | $2.00 | $0.200 | **$1.25** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-build-0.1) |
| together | together | `cogito-v2.1-671b` | — | $1.25 | $1.25 | — | **$1.25** |  | yes | [manual](https://www.together.ai/pricing) |
| xai | xai | `grok-build-0.1` | 256K | $1.00 | $2.00 | $0.200 | **$1.25** |  | yes | [manual](https://docs.x.ai/docs/models) |
| zai | zai | `glm-4-airx` (CNY 10/10) | 8K | $1.40 | $1.40 | — | **$1.40** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| google | google | `gemini-3.7-flash` | — | $0.750 | $3.75 | $0.150 | **$1.50** | undefined −50% until 2026-12-31 | yes | [manual](https://ai.google.dev/gemini-api/docs/pricing) |
| litellm | moonshot | `moonshot-v1-32k` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| mistral | mistral | `mistral-medium-latest` | — | $0.750 | $3.75 | $0.150 | **$1.50** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| moonshot | moonshot | `moonshot-v1-32k` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| openrouter | nousresearch | `hermes-4-405b` | 131K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://openrouter.ai/nousresearch/hermes-4-405b) |
| openrouter | relace | `relace-search` | 256K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://openrouter.ai/relace/relace-search) |
| litellm | zai | `glm-5` | 200K | $1.00 | $3.20 | $0.200 | **$1.55** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.3` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.3-latest` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | xai | `grok-4.20` | 2M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.20) |
| openrouter | xai | `grok-4.20-multi-agent` | 2M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.20-multi-agent) |
| openrouter | xai | `grok-4.3` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.3) |
| xai | xai | `grok-4.3` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [manual](https://docs.x.ai/docs/models) |
| minimax | minimax | `MiniMax-M3-priority-gt512k` | — | $0.900 | $3.60 | $0.360 | **$1.57** | permanent-cut −50% | yes | [manual](https://platform.minimax.io/docs/guides/pricing-paygo) |
| openrouter | openai | `gpt-3.5-turbo-instruct` | 4K | $1.50 | $2.00 | — | **$1.63** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-3.5-turbo-instruct) |
| together | together | `inkling` | — | $1.00 | $4.05 | $0.170 | **$1.76** |  | yes | [manual](https://www.together.ai/pricing) |
| zai | zai | `glm-5.1-in-32plus` (CNY 8/28) | — | $1.12 | $3.92 | $0.280 | **$1.82** | limited-time | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `glm-5.2` (CNY 8/28) | 1M | $1.12 | $3.92 | $0.280 | **$1.82** | limited-time | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `glm-5.3` (CNY 8/28) | 1M | $1.12 | $3.92 | $0.280 | **$1.82** | limited-time | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | zai | `glm-5.2` | 1.05M | $1.19 | $3.74 | $0.221 | **$1.83** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5.2) |
| together | together | `qwen3.7-max` | — | $1.25 | $3.75 | $0.130 | **$1.88** |  | yes | [manual](https://www.together.ai/pricing) |
| openrouter | zai | `glm-5-turbo` | 203K | $1.20 | $4.00 | $0.240 | **$1.90** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5-turbo) |
| openrouter | zai | `glm-5v-turbo` | 203K | $1.20 | $4.00 | $0.240 | **$1.90** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5v-turbo) |
| … | | 129 more | | | | | | | | |

### Coding (34)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | alibaba-modelstudio | `qwen3-coder-30b-a3b-instruct` | 262K | $0.070 | $0.280 | — | **$0.122** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-30b-a3b-instruct) |
| litellm | mistral | `devstral-small-latest` | 256K | $0.100 | $0.300 | — | **$0.150** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | deepseek | `deepseek-coder` | 128K | $0.140 | $0.280 | — | **$0.175** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| mistral | mistral | `codestral-latest` | — | $0.150 | $0.450 | $0.030 | **$0.225** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| litellm | mistral | `codestral-mamba-latest` | 256K | $0.250 | $0.250 | — | **$0.250** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | kwaipilot | `kat-coder-air-v2.5` | 256K | $0.150 | $0.600 | $0.030 | **$0.263** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-air-v2.5) |
| openrouter | alibaba-modelstudio | `qwen3-coder-next` | 262K | $0.120 | $0.800 | $0.070 | **$0.290** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-next) |
| openrouter | alibaba-modelstudio | `qwen3-coder-flash` | 1M | $0.195 | $0.975 | $0.039 | **$0.390** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-flash) |
| litellm | mistral | `codestral-latest` | 128K | $0.300 | $0.900 | — | **$0.450** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | mistral | `codestral-2508` | 256K | $0.300 | $0.900 | $0.030 | **$0.450** | batch $0.300/$0.900 | yes | [direct-api](https://openrouter.ai/mistralai/codestral-2508) |
| openrouter | alibaba-modelstudio | `qwen3-coder` | 262K | $0.300 | $1.00 | $0.100 | **$0.475** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder) |
| openrouter | kwaipilot | `kat-coder-pro-v2` | 262K | $0.300 | $1.20 | $0.060 | **$0.525** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-pro-v2) |
| litellm | alibaba-modelstudio | `qwen-coder` | 1M | $0.300 | $1.50 | — | **$0.600** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.1-codex-mini` | 400K | $0.250 | $2.00 | $0.030 | **$0.688** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex-mini) |
| openrouter | alibaba-modelstudio | `qwen-2.5-coder-32b-instruct` | 33K | $0.660 | $1.00 | — | **$0.745** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct) |
| litellm | mistral | `devstral-latest` | 256K | $0.400 | $2.00 | — | **$0.800** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `devstral-medium-latest` | 256K | $0.400 | $2.00 | — | **$0.800** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | mistral | `devstral-2512` | 262K | $0.440 | $2.20 | $0.044 | **$0.880** |  | yes | [direct-api](https://openrouter.ai/mistralai/devstral-2512) |
| moonshot | moonshot | `kimi-k2.7-code` | 262K | $0.570 | $2.40 | $0.190 | **$1.03** | batch −40% | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| openrouter | volcengine-ark | `seed-2.0-code` | 262K | $0.500 | $3.00 | — | **$1.13** |  | yes | [direct-api](https://openrouter.ai/bytedance-seed/seed-2.0-code) |
| openrouter | kwaipilot | `kat-coder-pro-v2.5` | 262K | $0.740 | $2.96 | $0.150 | **$1.29** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-pro-v2.5) |
| openrouter | alibaba-modelstudio | `qwen3-coder-plus` | 1M | $0.650 | $3.25 | $0.130 | **$1.30** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-plus) |
| openrouter | moonshot | `kimi-k2.7-code` | 262K | $0.660 | $3.40 | $0.180 | **$1.34** |  | yes | [direct-api](https://openrouter.ai/moonshotai/kimi-k2.7-code) |
| fireworks | fireworks | `kimi-k2.7-code` | — | $0.950 | $4.00 | $0.190 | **$1.71** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| litellm | alibaba-modelstudio | `kimi-k2.7-code` | 229K | $0.950 | $4.00 | $0.190 | **$1.71** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| together | together | `kimi-k2.7-code` | — | $0.950 | $4.00 | $0.190 | **$1.71** |  | yes | [manual](https://www.together.ai/pricing) |
| litellm | zai | `glm-5-code` | 200K | $1.20 | $5.00 | $0.300 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| fireworks | fireworks | `kimi-k2.7-code-fast` | — | $1.90 | $8.00 | $0.380 | **$3.42** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| moonshot | moonshot | `kimi-k2.7-code-highspeed` | 262K | $1.90 | $8.00 | $0.380 | **$3.42** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| openrouter | openai | `gpt-5.1-codex` | 400K | $1.25 | $10.00 | $0.130 | **$3.44** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex) |
| openrouter | openai | `gpt-5.1-codex-max` | 400K | $1.25 | $10.00 | $0.125 | **$3.44** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex-max) |
| litellm | openai | `gpt-5.3-codex` | 272K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.2-codex` | 400K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.2-codex) |
| openrouter | openai | `gpt-5.3-codex` | 400K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.3-codex) |

### Budget (< $1 in) (334)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| zai | zai | `glm-4-flashx-250414` (CNY 0.1/0.1) | 128K | $0.0070 | $0.0070 | — | **$0.0070** | batch −50% | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `codegeex-4` (CNY 0.1/0.1) | 128K | $0.014 | $0.014 | — | **$0.014** |  | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | mistral | `mistral-nemo` | 131K | $0.019 | $0.030 | — | **$0.022** |  | yes | [direct-api](https://openrouter.ai/mistralai/mistral-nemo) |
| openrouter | inclusionai | `ling-3.0-flash` | 262K | $0.021 | $0.063 | $0.0042 | **$0.032** |  | yes | [direct-api](https://openrouter.ai/inclusionai/ling-3.0-flash) |
| zai | zai | `glm-4-air` (CNY 0.5/0.5) | 128K | $0.035 | $0.035 | — | **$0.035** | batch −50% | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | ibm-granite | `granite-4.0-h-micro` | 131K | $0.017 | $0.112 | — | **$0.041** |  | yes | [direct-api](https://openrouter.ai/ibm-granite/granite-4.0-h-micro) |
| openrouter | sao10k | `l3-lunaris-8b` | 8K | $0.040 | $0.050 | — | **$0.043** |  | yes | [direct-api](https://openrouter.ai/sao10k/l3-lunaris-8b) |
| openrouter | nex-agi | `nex-n2-mini` | 262K | $0.025 | $0.100 | $0.0025 | **$0.044** |  | yes | [direct-api](https://openrouter.ai/nex-agi/nex-n2-mini) |
| openrouter | deepseek | `deepseek-v4-flash-latest` | 1.31M | $0.030 | $0.100 | $0.0070 | **$0.048** |  | yes | [direct-api](https://openrouter.ai/~deepseek/deepseek-v4-flash-latest) |
| mistral | mistral | `ministral-3b-latest` | — | $0.050 | $0.050 | $0.010 | **$0.050** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| openrouter | upstage | `solar-pro4` | 524K | $0.030 | $0.120 | $0.0060 | **$0.052** |  | yes | [direct-api](https://openrouter.ai/upstage/solar-pro4) |
| together | together | `lfm2.5-8b-a1b` | — | $0.030 | $0.120 | — | **$0.052** |  | yes | [manual](https://www.together.ai/pricing) |
| alibaba-modelstudio | alibaba-modelstudio | `qwen3.7-flash` | 1M | $0.030 | $0.130 | — | **$0.055** |  | yes | [manual](https://benchlm.ai/llm-pricing) |
| openrouter | openai | `gpt-oss-20b` | 131K | $0.030 | $0.130 | $0.030 | **$0.055** | batch $0.050/$0.200 | yes | [direct-api](https://openrouter.ai/openai/gpt-oss-20b) |
| openrouter | alibaba-modelstudio | `qwen3.7-flash` | 1M | $0.030 | $0.130 | $0.0060 | **$0.055** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3.7-flash) |
| openrouter | meta | `llama-3.1-8b-instruct` | 131K | $0.050 | $0.080 | $0.025 | **$0.058** |  | yes | [direct-api](https://openrouter.ai/meta-llama/llama-3.1-8b-instruct) |
| openrouter | mistral | `mistral-small-24b-instruct-2501` | 33K | $0.050 | $0.080 | — | **$0.058** |  | yes | [direct-api](https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501) |
| openrouter | gryphe | `mythomax-l2-13b` | 8K | $0.060 | $0.060 | — | **$0.060** |  | yes | [direct-api](https://openrouter.ai/gryphe/mythomax-l2-13b) |
| openrouter | amazon | `nova-micro-v1` | 128K | $0.035 | $0.140 | — | **$0.061** |  | yes | [direct-api](https://openrouter.ai/amazon/nova-micro-v1) |
| openrouter | google | `gemma-3-4b-it` | 131K | $0.050 | $0.100 | — | **$0.063** |  | yes | [direct-api](https://openrouter.ai/google/gemma-3-4b-it) |
| openrouter | ibm-granite | `granite-4.1-8b` | 131K | $0.050 | $0.100 | $0.050 | **$0.063** |  | yes | [direct-api](https://openrouter.ai/ibm-granite/granite-4.1-8b) |
| openrouter | cohere | `command-r7b-12-2024` | 128K | $0.037 | $0.150 | — | **$0.066** |  | yes | [direct-api](https://openrouter.ai/cohere/command-r7b-12-2024) |
| zai | zai | `glm-4-long` (CNY 1/1) | 1M | $0.070 | $0.070 | — | **$0.070** | batch −50% | yes | [manual](https://open.bigmodel.cn/pricing) |
| openrouter | openai | `gpt-oss-120b` | 131K | $0.037 | $0.170 | — | **$0.070** | batch $0.150/$0.600 | yes | [direct-api](https://openrouter.ai/openai/gpt-oss-120b) |
| openrouter | meta | `llama-3.2-1b-instruct` | 60K | $0.027 | $0.201 | — | **$0.070** |  | yes | [direct-api](https://openrouter.ai/meta-llama/llama-3.2-1b-instruct) |
| mistral | mistral | `ministral-8b-latest` | — | $0.075 | $0.075 | $0.015 | **$0.075** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| openrouter | google | `gemma-3-12b-it` | 131K | $0.050 | $0.150 | — | **$0.075** |  | yes | [direct-api](https://openrouter.ai/google/gemma-3-12b-it) |
| openrouter | poolside | `laguna-xs-2.1` | 262K | $0.060 | $0.120 | $0.030 | **$0.075** |  | yes | [direct-api](https://openrouter.ai/poolside/laguna-xs-2.1) |
| together | together | `gemma-3n-e4b-instruct` | — | $0.060 | $0.120 | — | **$0.075** |  | yes | [manual](https://www.together.ai/pricing) |
| openrouter | tencent-hunyuan | `hy-mt2-1.8b` | 8K | $0.044 | $0.177 | — | **$0.077** |  | yes | [direct-api](https://openrouter.ai/tencent/hy-mt2-1.8b) |
| openrouter | alibaba-modelstudio | `qwen3-30b-a3b-instruct-2507` | 262K | $0.048 | $0.193 | — | **$0.084** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-30b-a3b-instruct-2507) |
| fireworks | fireworks | `nvidia-nemotron-3.5-lightning-30b-a3b` | — | $0.050 | $0.200 | $0.010 | **$0.087** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| litellm | alibaba-modelstudio | `qwen-turbo` | 129K | $0.050 | $0.200 | — | **$0.087** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | alibaba-modelstudio | `qwen-turbo-latest` | 1M | $0.050 | $0.200 | — | **$0.087** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| mistral | mistral | `voxtral-small-latest` | — | $0.050 | $0.200 | — | **$0.087** | batch −50% | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| openrouter | deepseek | `deepseek-v4-flash-0731` | 1.31M | $0.070 | $0.140 | $0.014 | **$0.087** | batch $0.140/$0.280 | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash-0731) |
| openrouter | nvidia | `nemotron-3-nano-30b-a3b` | 262K | $0.050 | $0.200 | $0.025 | **$0.087** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3-nano-30b-a3b) |
| openrouter | microsoft | `phi-4` | 16K | $0.070 | $0.140 | — | **$0.087** |  | yes | [direct-api](https://openrouter.ai/microsoft/phi-4) |
| together | together | `gpt-oss-20b` | — | $0.050 | $0.200 | — | **$0.087** |  | yes | [manual](https://www.together.ai/pricing) |
| fireworks | fireworks | `less-than-4b-parameters-size-based-tier` | — | $0.100 | $0.100 | — | **$0.100** |  | yes | [manual](https://docs.fireworks.ai/serverless/pricing) |
| … | | 294 more | | | | | | | | |

### Vision / multimodal (31)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | alibaba-modelstudio | `qwen3-vl-32b-instruct` | 131K | $0.104 | $0.416 | — | **$0.182** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-32b-instruct) |
| openrouter | alibaba-modelstudio | `qwen3-vl-8b-instruct` | 262K | $0.117 | $0.455 | — | **$0.202** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-8b-instruct) |
| openrouter | alibaba-modelstudio | `qwen3-vl-30b-a3b-instruct` | 262K | $0.130 | $0.520 | — | **$0.228** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-30b-a3b-instruct) |
| litellm | alibaba-modelstudio | `qwen3-vl-32b-instruct` | 131K | $0.160 | $0.640 | — | **$0.280** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| deepseek | deepseek | `deepseek-v4-flash-vision-exp` | — | $0.220 | $0.660 | $0.014 | **$0.330** | undefined −50% | yes | [manual](https://api-docs.deepseek.com/quick_start/pricing) |
| openrouter | deepseek | `deepseek-v4-flash-vision-exp` | 1.05M | $0.220 | $0.660 | $0.0070 | **$0.330** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp) |
| openrouter | alibaba-modelstudio | `qwen2.5-vl-72b-instruct` | 128K | $0.250 | $0.750 | — | **$0.375** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct) |
| openrouter | baidu-qianfan | `ernie-4.5-vl-424b-a47b` | 123K | $0.420 | $1.25 | — | **$0.627** |  | yes | [direct-api](https://openrouter.ai/baidu/ernie-4.5-vl-424b-a47b) |
| tencent-hunyuan | tencent-hunyuan | `hunyuan-t1-vision` (CNY 3/9) | — | $0.420 | $1.26 | — | **$0.630** | free-tier | yes | [manual](https://cloud.tencent.com/document/product/1729/97731) |
| tencent-hunyuan | tencent-hunyuan | `hunyuan-turbos-vision` (CNY 3/9) | — | $0.420 | $1.26 | — | **$0.630** | free-tier | yes | [manual](https://cloud.tencent.com/document/product/1729/97731) |
| tencent-hunyuan | tencent-hunyuan | `hunyuan-turbos-vision-video` (CNY 3/9) | — | $0.420 | $1.26 | — | **$0.630** | free-tier | yes | [manual](https://cloud.tencent.com/document/product/1729/97731) |
| tencent-hunyuan | tencent-hunyuan | `tencent-hy-vision-1.5-instruct` (CNY 3/9) | — | $0.420 | $1.26 | — | **$0.630** | free-tier | yes | [manual](https://cloud.tencent.com/document/product/1729/97731) |
| openrouter | alibaba-modelstudio | `qwen3-vl-235b-a22b-instruct` | 262K | $0.210 | $1.90 | $0.100 | **$0.632** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-235b-a22b-instruct) |
| litellm | moonshot | `moonshot-v1-8k-vision-preview` | 8K | $0.200 | $2.00 | — | **$0.650** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| moonshot | moonshot | `moonshot-v1-8k-vision-preview` | 8K | $0.200 | $2.00 | — | **$0.650** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| litellm | deepseek | `deepseek-v4-flash-vision-exp` | 1M | $0.440 | $1.32 | $0.014 | **$0.660** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-8b-thinking` | 131K | $0.180 | $2.10 | — | **$0.660** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-8b-thinking) |
| litellm | alibaba-modelstudio | `qwen3-vl-235b-a22b-instruct` | 131K | $0.400 | $1.60 | — | **$0.700** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-30b-a3b-thinking` | 262K | $0.200 | $2.40 | — | **$0.750** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-30b-a3b-thinking) |
| litellm | alibaba-modelstudio | `qwen3-vl-32b-thinking` | 131K | $0.160 | $2.87 | — | **$0.838** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-3.1-flash-image-preview` | 66K | $0.500 | $3.00 | — | **$1.13** |  | yes | [direct-api](https://openrouter.ai/google/gemini-3.1-flash-image-preview) |
| litellm | alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | 131K | $0.400 | $4.00 | — | **$1.30** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | 131K | $0.400 | $4.00 | — | **$1.30** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-235b-a22b-thinking) |
| litellm | moonshot | `moonshot-v1-32k-vision-preview` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| moonshot | moonshot | `moonshot-v1-32k-vision-preview` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| openrouter | openai | `gpt-5-image-mini` | 400K | $2.50 | $2.00 | $0.250 | **$2.38** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5-image-mini) |
| litellm | moonshot | `moonshot-v1-128k-vision-preview` | 131K | $2.00 | $5.00 | — | **$2.75** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| moonshot | moonshot | `moonshot-v1-128k-vision-preview` | 131K | $2.00 | $5.00 | — | **$2.75** |  | yes | [manual](https://platform.moonshot.ai/docs/pricing/chat) |
| litellm | google | `gemini-omni-flash-preview` | 1.05M | $1.50 | $9.00 | — | **$3.38** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-3-pro-image-preview` | 66K | $2.00 | $12.00 | $0.200 | **$4.50** |  | yes | [direct-api](https://openrouter.ai/google/gemini-3-pro-image-preview) |
| openrouter | openai | `gpt-5.4-image-2` | 272K | $8.00 | $15.00 | $2.00 | **$9.75** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.4-image-2) |

### Free / $0 (32)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| litellm | google | `gemma-3-27b-it` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | zai | `glm-4.5-flash` | 128K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | zai | `glm-4.7-flash` | 200K | $0 | $0 | $0 | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `labs-leanstral-1-5` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `learnlm-1.5-pro-experimental` | 33K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `lyria-3-clip-preview` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `lyria-3-pro-preview` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| mistral | mistral | `labs-leanstral-2603` | — | $0 | $0 | — | **$0** |  | yes | [manual](https://mistral.ai/pricing#api-pricing) |
| openrouter | dots-studio | `dots-3-note-preview:free` | 512K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/dots-studio/dots-3-note-preview:free) |
| openrouter | openrouter | `free` | 200K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/openrouter/free) |
| openrouter | google | `gemma-4-26b-a4b-it:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/google/gemma-4-26b-a4b-it:free) |
| openrouter | google | `gemma-4-31b-it:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/google/gemma-4-31b-it:free) |
| openrouter | zai | `glm-5.2:free` | 256K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5.2:free) |
| openrouter | thinkingmachines | `inkling:free` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/thinkingmachines/inkling:free) |
| openrouter | thinkingmachines | `inkling-small:free` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/thinkingmachines/inkling-small:free) |
| openrouter | poolside | `laguna-s-2.1:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/poolside/laguna-s-2.1:free) |
| openrouter | poolside | `laguna-xs-2.1:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/poolside/laguna-xs-2.1:free) |
| openrouter | liquid | `lfm-2.5-2.6b:free` | 66K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/liquid/lfm-2.5-2.6b:free) |
| openrouter | inclusionai | `ling-3.0-flash-fin:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/inclusionai/ling-3.0-flash-fin:free) |
| openrouter | google | `lyria-3-clip-preview` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/google/lyria-3-clip-preview) |
| openrouter | google | `lyria-3-pro-preview` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/google/lyria-3-pro-preview) |
| openrouter | minimax | `minimax-m2.7:free` | 197K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/minimax/minimax-m2.7:free) |
| openrouter | minimax | `minimax-m3:free` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/minimax/minimax-m3:free) |
| openrouter | nvidia | `nemotron-3-nano-omni-30b-a3b-reasoning:free` | 256K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free) |
| openrouter | nvidia | `nemotron-3-super-120b-a12b:free` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3-super-120b-a12b:free) |
| openrouter | nvidia | `nemotron-3-ultra-550b-a55b:free` | 1M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free) |
| openrouter | nvidia | `nemotron-3.5-content-safety:free` | 128K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3.5-content-safety:free) |
| openrouter | nvidia | `nemotron-3.5-lightning:free` | 1M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3.5-lightning:free) |
| openrouter | cohere | `north-mini-code:free` | 256K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/cohere/north-mini-code:free) |
| together | together | `ternary-bonsai-27b` | — | $0 | $0 | — | **$0** |  | yes | [manual](https://www.together.ai/pricing) |
| zai | zai | `glm-4-flash` (CNY 0/0) | 128K | $0 | $0 | — | **$0** | free-tier | yes | [manual](https://open.bigmodel.cn/pricing) |
| zai | zai | `glm-4.7-flash` (CNY 0/0) | 200K | $0 | $0 | $0 | **$0** | free-tier | yes | [manual](https://open.bigmodel.cn/pricing) |

## Last collection run

| Source | Method | Status | Rows | Note |
|---|---|---|---:|---|
| openrouter | direct-api | ok | 352 |  |
| litellm | direct-api | ok | 205 |  |
| google | public-page | ok | 0 |  |
| deepseek | public-page | ok | 1 |  |
| manual:browser-2026-08-26-b.json | manual | ok | 137 |  |
| manual:browser-2026-08-26.json | manual | ok | 25 |  |
| manual:seed-2026-08-web-research.json | manual | ok | 19 |  |

_Prices change often and vary by region, cache state, context band and service tier. Rows marked `page`/`web-research` are low-confidence extractions — verify on the linked source before committing spend._
