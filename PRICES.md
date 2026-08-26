# LLM API price radar — cross-vendor list & promotion prices

> Generated `2026-08-26T09:03:05.462Z` · **562 models** across **12 price sources** · 6 models with an active promo/off-peak price · unit: **USD per 1M tokens** (CNY→USD @ 0.14) · blended = (3×input + 1×output)/4
> Regenerate: `node scripts/collect.js` · data: [`data/prices.json`](data/prices.json) · sources: [`sources/providers.json`](sources/providers.json)

## Cheapest right now, by category

| Category | # | Provider | Model | Input | Output | Blended | Basis |
|---|---|---|---|---:|---:|---:|---|
| **Flagship (≥ $4 in or ≥ $20 out)** | 1 | google | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
|  | 2 | litellm | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
|  | 3 | openrouter | `gemini-2.5-pro` | $1.25 | $10.00 | **$3.44** | list |
| **Reasoning** | 1 | openrouter | `olmo-3-32b-think` | $0.150 | $0.500 | **$0.237** | list |
|  | 2 | litellm | `deepseek-reasoner` | $0.280 | $0.420 | **$0.315** | list |
|  | 3 | openrouter | `trinity-large-thinking` | $0.220 | $0.850 | **$0.378** | list |
| **Mid-tier ($1–4 in)** | 1 | litellm | `MiniMax-M3` | $0.300 | $1.20 | **$0.525** | list |
|  | 2 | openrouter | `minimax-m3` | $0.300 | $1.20 | **$0.525** | list |
|  | 3 | deepseek | `deepseek-v4-pro` | $0.660 | $1.98 | **$0.990** | promo |
| **Coding** | 1 | openrouter | `qwen3-coder-30b-a3b-instruct` | $0.070 | $0.280 | **$0.122** | list |
|  | 2 | litellm | `devstral-small-latest` | $0.100 | $0.300 | **$0.150** | list |
|  | 3 | litellm | `deepseek-coder` | $0.140 | $0.280 | **$0.175** | list |
| **Budget (< $1 in)** | 1 | openrouter | `mistral-nemo` | $0.019 | $0.030 | **$0.022** | list |
|  | 2 | openrouter | `ling-3.0-flash` | $0.021 | $0.063 | **$0.032** | list |
|  | 3 | openrouter | `granite-4.0-h-micro` | $0.017 | $0.112 | **$0.041** | list |
| **Vision / multimodal** | 1 | openrouter | `qwen3-vl-32b-instruct` | $0.104 | $0.416 | **$0.182** | list |
|  | 2 | openrouter | `qwen3-vl-8b-instruct` | $0.117 | $0.455 | **$0.202** | list |
|  | 3 | openrouter | `qwen3-vl-30b-a3b-instruct` | $0.130 | $0.520 | **$0.228** | list |

## Active promotions & off-peak prices

### Per-model (3)

| Provider | Model | List in/out | Promo in/out | Discount | Type / window | Ends | Source |
|---|---|---:|---:|---:|---|---|---|
| openrouter | `deepseek-v4-flash-vision-exp` | $0.440 / $1.32 | **$0.220 / $0.660** | 50% | off-peak −50% (sat/sun all-day; mon/tue/wed/thu/fri 00:00-01:00; mon/tue/wed/thu/fri 04:00-06:00; mon/tue/wed/thu/fri 10:00-00:00 UTC) | open | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp) |
| deepseek | `deepseek-v4-pro` | $1.32 / $3.96 | **$0.660 / $1.98** | 50% | off-peak −50% (daily 16:30-00:30 UTC) | open | [manual](https://codersera.com/blog/deepseek-v4-pro-permanent-price-cut-may-2026/) |
| openrouter | `hy3` | $0.132 / $0.528 | **$0.083 / $0.330** | 37.5% | off-peak −37.5% (daily 16:00-00:00 UTC) | open | [direct-api](https://openrouter.ai/tencent/hy3) |

### Provider-level offers, plans & price cuts (9)

| Provider | Offer | Type | Price | Detail | Valid until | Confidence |
|---|---|---|---:|---|---|---|
| openai | [GPT-5.6 Luna 80% price cut / Terra 20% cut](https://www.cloudzero.com/blog/llm-api-pricing-comparison/) | permanent-cut | — | On 2026-07-30 OpenAI cut GPT-5.6 Luna to $0.20/$1.20 per 1M (input/output) and Terra by 20%. | open | web-research |
| anthropic | [Claude Sonnet 5 introductory price made permanent](https://www.cloudzero.com/blog/llm-api-pricing-comparison/) | permanent-cut | — | Launched at $2/$10 per 1M as introductory pricing; Anthropic made the rate permanent on 2026-08-11 (the scheduled Sept 1 increase to $3/$15 was cancelled). | open | web-research |
| google | [Gemini API free tier](https://ai.google.dev/gemini-api/docs/pricing) | free-tier | — | Rate-limited free tier for prototyping on Flash/Flash-Lite models. | open | web-research |
| deepseek | [Off-peak discount window](https://codersera.com/blog/deepseek-v4-pro-permanent-price-cut-may-2026/) | off-peak | — | Reduced rates 16:30-00:30 UTC daily; V4-Pro ~$0.66/$1.98 off-peak vs $1.32/$3.96 peak per 1M since 2026-08-16. | open | web-research |
| deepseek | [New-account free token grant](https://www.nxcode.io/resources/news/deepseek-api-pricing-complete-guide-2026) | free-tier | — | Reported 5M free tokens for new API accounts (verify in console). | open | web-research |
| alibaba-modelstudio | [Bailian Coding Plan / Token Plan](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | subscription | CNY 200/month | Coding Plan from ¥200/mo; Token Plan Team Edition from ¥198/mo (multi-seat). New purchases currently Pro tier only. | open | web-research |
| volcengine-ark | [Ark Coding Plan Lite first month ¥9.9](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | limited-time | CNY 9.9 (was 40)/month | Coding Plan Lite ¥40/mo, first month ¥9.9 (daily flash sale); Agent Plan = multimodal + Harness bundle. | open | web-research |
| zai | [GLM Coding Plan Pro annual 30% off](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | limited-time | CNY 104 (was 149)/month | Coding Plan Pro ¥149/mo, ¥104/mo on annual billing; plans from ¥49/mo. | open | web-research |
| minimax | [MiniMax Token Plan from ¥29/mo](https://codepick.dev/en/guides/china-coding-api-roundup-2026/) | subscription | CNY 29/month | Full-modal bundle (text + audio + video) from ¥29/mo. | open | web-research |

## Same model, different sellers (cross-vendor spread)

Models offered by 2+ price sources, sorted by price spread between the cheapest and priciest seller (effective price, promo applied). 96 models.

| Vendor | Model | Cheapest seller | Spread | Sellers (blended $/1M, in/out) |
|---|---|---|---:|---|
| deepseek | `deepseek-v4-flash` | openrouter | 324% | openrouter **$0.041** ($0.030/$0.075) · deepseek **$0.175** ($0.140/$0.280, unverified) |
| openai | `gpt-5-6-sol` | openrouter | 181% | openrouter **$4.00** ($2.00/$10.00) · litellm **$8.00** ($4.00/$20.00) · openai **$11.25** ($5.00/$30.00, unverified) |
| openai | `gpt-4` | litellm | 150% | litellm **$15.00** ($10.00/$30.00) · openrouter **$37.50** ($30.00/$60.00) |
| google | `gemini-3-7-flash` | openrouter | 100% | openrouter **$0.750** ($0.375/$1.88) · litellm **$1.50** ($0.750/$3.75) |
| minimax | `minimax-m3` | litellm | 100% | litellm **$0.525** ($0.300/$1.20) · openrouter **$0.525** ($0.300/$1.20) · minimax **$1.05** ($0.600/$2.40, unverified) |
| mistral | `mistral-small` | litellm | 75% | litellm **$0.150** ($0.100/$0.300) · openrouter **$0.263** ($0.150/$0.600) |
| alibaba-modelstudio | `qwen3-7-max` | openrouter | 69% | openrouter **$2.21** ($1.48/$4.42) · litellm **$3.75** ($2.50/$7.50) |
| zai | `glm-5` | openrouter | 67% | openrouter **$0.930** ($0.600/$1.92) · litellm **$1.55** ($1.00/$3.20) |
| alibaba-modelstudio | `qwen3-vl-32b` | openrouter | 54% | openrouter **$0.182** ($0.104/$0.416) · litellm **$0.280** ($0.160/$0.640) |
| alibaba-modelstudio | `qwen-plus` | openrouter | 54% | openrouter **$0.390** ($0.260/$0.780) · litellm **$0.600** ($0.400/$1.20) |
| deepseek | `deepseek` | litellm | 43% | litellm **$0.315** ($0.280/$0.420) · openrouter **$0.450** ($0.257/$1.03) |
| zai | `glm-4-5-air` | openrouter | 37% | openrouter **$0.310** ($0.130/$0.850) · litellm **$0.425** ($0.200/$1.10) |
| mistral | `ministral-8b` | openrouter | 36% | openrouter **$0.110** ($0.110/$0.110) · litellm **$0.150** ($0.150/$0.150) |
| zai | `glm-4-7` | openrouter | 36% | openrouter **$0.738** ($0.400/$1.75) · litellm **$1.00** ($0.600/$2.20) |
| google | `gemini-pro` | litellm | 31% | litellm **$3.44** ($1.25/$10.00) · openrouter **$4.50** ($2.00/$12.00) |
| alibaba-modelstudio | `qwen3-next-80b-a3b` | openrouter | 18% | openrouter **$0.350** ($0.100/$1.10) · litellm **$0.412** ($0.150/$1.20) |
| minimax | `minimax-m2` | openrouter | 18% | openrouter **$0.446** ($0.255/$1.02) · litellm **$0.525** ($0.300/$1.20) |
| zai | `glm-5-2` | openrouter | 18% | openrouter **$1.83** ($1.19/$3.74) · zai **$2.15** ($1.40/$4.40, unverified) |
| zai | `glm-4-6` | openrouter | 14% | openrouter **$0.875** ($0.500/$2.00) · litellm **$1.00** ($0.600/$2.20) |
| google | `gemini-flash` | openrouter | 13% | openrouter **$0.750** ($0.375/$1.88) · litellm **$0.850** ($0.300/$2.50) |
| alibaba-modelstudio | `qwen3-vl-235b-a22b` | openrouter | 11% | openrouter **$0.632** ($0.210/$1.90) · litellm **$0.700** ($0.400/$1.60) |
| minimax | `minimax-m2-5` | openrouter | 11% | openrouter **$0.472** ($0.270/$1.08) · litellm **$0.525** ($0.300/$1.20) |
| deepseek | `deepseek-v4-pro` | deepseek | 10% | deepseek **$0.990** ($0.660/$1.98, promo, unverified) · openrouter **$1.09** ($0.870/$1.74) |
| mistral | `devstral` | litellm | 10% | litellm **$0.800** ($0.400/$2.00) · openrouter **$0.880** ($0.440/$2.20) |
| deepseek | `deepseek-v3-2` | openrouter | 7% | openrouter **$0.290** ($0.260/$0.380) · litellm **$0.310** ($0.280/$0.400) |
| deepseek | `deepseek-r1` | openrouter | 5% | openrouter **$0.912** ($0.500/$2.15) · litellm **$0.960** ($0.550/$2.19) |
| alibaba-modelstudio | `qwen3-7-flash` | alibaba-modelstudio | 0% | alibaba-modelstudio **$0.055** ($0.030/$0.130, unverified) · openrouter **$0.055** ($0.030/$0.130) |
| alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | litellm | 0% | litellm **$0.412** ($0.150/$1.20) · openrouter **$0.412** ($0.150/$1.20) |
| alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | litellm | 0% | litellm **$1.30** ($0.400/$4.00) · openrouter **$1.30** ($0.400/$4.00) |
| alibaba-modelstudio | `qwen3-8-max` | litellm | 0% | litellm **$3.00** ($2.00/$6.00) · openrouter **$3.00** ($2.00/$6.00) |
| anthropic | `claude-haiku-4-5` | anthropic | 0% | anthropic **$2.00** ($1.00/$5.00, unverified) · litellm **$2.00** ($1.00/$5.00) · openrouter **$2.00** ($1.00/$5.00) |
| anthropic | `claude-sonnet-5` | anthropic | 0% | anthropic **$4.00** ($2.00/$10.00, unverified) · litellm **$4.00** ($2.00/$10.00) · openrouter **$4.00** ($2.00/$10.00) |
| anthropic | `claude-sonnet-4-5` | litellm | 0% | litellm **$6.00** ($3.00/$15.00) · openrouter **$6.00** ($3.00/$15.00) |
| anthropic | `claude-sonnet-4-6` | litellm | 0% | litellm **$6.00** ($3.00/$15.00) · openrouter **$6.00** ($3.00/$15.00) |
| anthropic | `claude-opus-4-8` | anthropic | 0% | anthropic **$10.00** ($5.00/$25.00, unverified) · litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-5` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-6` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-4-7` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-opus-5` | litellm | 0% | litellm **$10.00** ($5.00/$25.00) · openrouter **$10.00** ($5.00/$25.00) |
| anthropic | `claude-fable-5` | litellm | 0% | litellm **$20.00** ($10.00/$50.00) · openrouter **$20.00** ($10.00/$50.00) |
| google | `gemini-2-5-flash-lite` | google | 0% | google **$0.175** ($0.100/$0.400, unverified) · litellm **$0.175** ($0.100/$0.400) · openrouter **$0.175** ($0.100/$0.400) |
| google | `gemini-3-1-flash-lite` | litellm | 0% | litellm **$0.563** ($0.250/$1.50) · openrouter **$0.563** ($0.250/$1.50) |
| google | `gemini-2-5-flash` | google | 0% | google **$0.850** ($0.300/$2.50, unverified) · litellm **$0.850** ($0.300/$2.50) · openrouter **$0.850** ($0.300/$2.50) |
| google | `gemini-3-5-flash-lite` | litellm | 0% | litellm **$0.850** ($0.300/$2.50) · openrouter **$0.850** ($0.300/$2.50) |
| google | `gemini-3-flash` | litellm | 0% | litellm **$1.13** ($0.500/$3.00) · openrouter **$1.13** ($0.500/$3.00) |
| google | `gemini-3-6-flash` | litellm | 0% | litellm **$1.50** ($0.750/$3.75) · openrouter **$1.50** ($0.750/$3.75) |
| google | `gemini-3-5-flash` | litellm | 0% | litellm **$3.38** ($1.50/$9.00) · openrouter **$3.38** ($1.50/$9.00) |
| google | `gemini-2-5-pro` | google | 0% | google **$3.44** ($1.25/$10.00, unverified) · litellm **$3.44** ($1.25/$10.00) · openrouter **$3.44** ($1.25/$10.00) |
| google | `gemini-3-1-pro` | litellm | 0% | litellm **$4.50** ($2.00/$12.00) · openrouter **$4.50** ($2.00/$12.00) |
| google | `gemini-3-1-pro-preview-customtools` | litellm | 0% | litellm **$4.50** ($2.00/$12.00) · openrouter **$4.50** ($2.00/$12.00) |
| minimax | `minimax-m2-1` | litellm | 0% | litellm **$0.525** ($0.300/$1.20) · openrouter **$0.525** ($0.300/$1.20) |
| mistral | `codestral` | litellm | 0% | litellm **$0.450** ($0.300/$0.900) · openrouter **$0.450** ($0.300/$0.900) |
| mistral | `mistral-large` | litellm | 0% | litellm **$0.750** ($0.500/$1.50) · openrouter **$0.750** ($0.500/$1.50) |
| mistral | `mistral-medium-3-5` | litellm | 0% | litellm **$3.00** ($1.50/$7.50) · openrouter **$3.00** ($1.50/$7.50) |
| moonshot | `kimi-k2-5` | litellm | 0% | litellm **$1.20** ($0.600/$3.00) · openrouter **$1.20** ($0.600/$3.00) |
| moonshot | `kimi-k2-6` | litellm | 0% | litellm **$1.71** ($0.950/$4.00) · openrouter **$1.71** ($0.950/$4.00) |
| moonshot | `kimi-k3` | litellm | 0% | litellm **$6.00** ($3.00/$15.00) · moonshot **$6.00** ($3.00/$15.00, unverified) · openrouter **$6.00** ($3.00/$15.00) |
| openai | `gpt-5-nano` | litellm | 0% | litellm **$0.138** ($0.050/$0.400) · openrouter **$0.138** ($0.050/$0.400) |
| openai | `gpt-4-1-nano` | litellm | 0% | litellm **$0.175** ($0.100/$0.400) · openrouter **$0.175** ($0.100/$0.400) |
| openai | `gpt-4o-mini` | litellm | 0% | litellm **$0.263** ($0.150/$0.600) · openrouter **$0.263** ($0.150/$0.600) |
| … | 36 more in data/prices.json | | | |

## Price sources (sites, automation, login)

| Provider | Kind | Region | Site | Pricing page | OpenAI-compatible base URL | Automation | Login needed | Models | Last collected | Status |
|---|---|---|---|---|---|---|---|---:|---|---|
| **OpenRouter** (`openrouter`) | aggregator | global | [openrouter.ai](https://openrouter.ai) | [pricing](https://openrouter.ai/models) | `https://openrouter.ai/api/v1` | `direct-api` | no | 351 | 2026-08-26 09:03 | ok |
| **LiteLLM price registry** (`litellm`) | aggregator | global | [github.com](https://github.com/BerriAI/litellm) | [pricing](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) | — | `direct-api` | no | 192 | 2026-08-26 09:03 | ok |
| **OpenAI** (`openai`) | vendor | global | [openai.com](https://openai.com) | [pricing](https://openai.com/api/pricing/) | `https://api.openai.com/v1` | `lm-assist-browser` | no | 4 | — | not run |
| **Anthropic** (`anthropic`) | vendor | global | [www.anthropic.com](https://www.anthropic.com) | [pricing](https://www.anthropic.com/pricing) | `https://api.anthropic.com/v1` | `lm-assist-browser` | no | 3 | — | not run |
| **Google Gemini API** (`google`) | vendor | global | [ai.google.dev](https://ai.google.dev) | [pricing](https://ai.google.dev/gemini-api/docs/pricing) | `https://generativelanguage.googleapis.com/v1beta/openai/` | `public-page` | no | 3 | — | not run |
| **DeepSeek** (`deepseek`) | vendor | cn | [platform.deepseek.com](https://platform.deepseek.com) | [pricing](https://api-docs.deepseek.com/quick_start/pricing) | `https://api.deepseek.com/v1` | `public-page` | no | 2 | — | not run |
| **xAI (Grok)** (`xai`) | vendor | global | [x.ai](https://x.ai) | [pricing](https://docs.x.ai/docs/models) | `https://api.x.ai/v1` | `lm-assist-browser` | no | 1 | — | not run |
| **Mistral AI** (`mistral`) | vendor | eu | [mistral.ai](https://mistral.ai) | [pricing](https://mistral.ai/pricing#api-pricing) | `https://api.mistral.ai/v1` | `lm-assist-browser` | no | 1 | — | not run |
| **Groq** (`groq`) | inference-host | global | [groq.com](https://groq.com) | [pricing](https://groq.com/pricing) | `https://api.groq.com/openai/v1` | `lm-assist-browser` | no | 0 | — | not run |
| **Together AI** (`together`) | inference-host | global | [www.together.ai](https://www.together.ai) | [pricing](https://www.together.ai/pricing) | `https://api.together.xyz/v1` | `lm-assist-browser` | no | 0 | — | not run |
| **Fireworks AI** (`fireworks`) | inference-host | global | [fireworks.ai](https://fireworks.ai) | [pricing](https://fireworks.ai/pricing) | `https://api.fireworks.ai/inference/v1` | `lm-assist-browser` | no | 0 | — | not run |
| **Cerebras** (`cerebras`) | inference-host | global | [www.cerebras.ai](https://www.cerebras.ai) | [pricing](https://www.cerebras.ai/pricing) | `https://api.cerebras.ai/v1` | `lm-assist-browser` | no | 0 | — | not run |
| **Alibaba Cloud Model Studio (Bailian / Qwen)** (`alibaba-modelstudio`) | vendor | cn | [www.alibabacloud.com](https://www.alibabacloud.com/en/product/modelstudio) | [pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing) · [console](https://bailian.console.aliyun.com) | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | `lm-assist-browser` | 🔒 yes | 1 | — | not run |
| **Volcengine Ark (Doubao)** (`volcengine-ark`) | vendor | cn | [www.volcengine.com](https://www.volcengine.com/product/ark) | [pricing](https://www.volcengine.com/pricing?product=ark) · [console](https://console.volcengine.com/ark) | `https://ark.cn-beijing.volces.com/api/v3` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Moonshot AI (Kimi)** (`moonshot`) | vendor | cn | [platform.moonshot.ai](https://platform.moonshot.ai) | [pricing](https://platform.moonshot.ai/docs/pricing/chat) · [console](https://platform.moonshot.cn/console) | `https://api.moonshot.ai/v1` | `lm-assist-browser` | no | 1 | — | not run |
| **Z.ai / Zhipu (GLM)** (`zai`) | vendor | cn | [z.ai](https://z.ai) | [pricing](https://docs.z.ai/guides/overview/pricing) · [console](https://open.bigmodel.cn/pricing) | `https://api.z.ai/api/paas/v4` | `lm-assist-browser` | 🔒 yes | 2 | — | not run |
| **MiniMax** (`minimax`) | vendor | cn | [www.minimax.io](https://www.minimax.io) | [pricing](https://platform.minimax.io/docs/guides/pricing) · [console](https://platform.minimaxi.com) | `https://api.minimax.io/v1` | `lm-assist-browser` | no | 1 | — | not run |
| **SiliconFlow** (`siliconflow`) | inference-host | cn | [siliconflow.cn](https://siliconflow.cn) | [pricing](https://cloud.siliconflow.cn/models) · [console](https://cloud.siliconflow.cn) | `https://api.siliconflow.cn/v1` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Baidu Qianfan (ERNIE)** (`baidu-qianfan`) | vendor | cn | [cloud.baidu.com](https://cloud.baidu.com/product/qianfan) | [pricing](https://cloud.baidu.com/doc/qianfan-docs/s/wm7pf0hja) · [console](https://console.bce.baidu.com/qianfan) | `https://qianfan.baidubce.com/v2` | `lm-assist-browser` | 🔒 yes | 0 | — | not run |
| **Tencent Hunyuan** (`tencent-hunyuan`) | vendor | cn | [cloud.tencent.com](https://cloud.tencent.com/product/hunyuan) | [pricing](https://cloud.tencent.com/document/product/1729/97731) · [console](https://console.cloud.tencent.com/hunyuan) | `https://api.hunyuan.cloud.tencent.com/v1` | `lm-assist-browser` | no | 0 | — | not run |
| **Amazon Bedrock** (`aws-bedrock`) | cloud | global | [aws.amazon.com](https://aws.amazon.com/bedrock/) | [pricing](https://aws.amazon.com/bedrock/pricing/) | — | `lm-assist-browser` | no | 0 | — | disabled |
| **Azure OpenAI** (`azure-openai`) | cloud | global | [azure.microsoft.com](https://azure.microsoft.com/en-us/products/ai-services/openai-service) | [pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/) | `https://{resource}.openai.azure.com/openai/v1` | `lm-assist-browser` | no | 0 | — | disabled |

## All tracked models by category

Sorted by effective blended price (promo/off-peak applied when available). Only the first 40 rows per category are shown; the full set is in `data/prices.json`.

### Flagship (≥ $4 in or ≥ $20 out) (63)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| google | google | `gemini-2.5-pro` | 1.05M | $1.25 | $10.00 | — | **$3.44** |  | yes | [manual](https://techsy.io/en/blog/llm-api-pricing-comparison) |
| litellm | google | `gemini-2.5-pro` | 1.05M | $1.25 | $10.00 | $0.125 | **$3.44** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-2.5-pro` | 1.05M | $1.25 | $10.00 | $0.125 | **$3.44** | batch $0.625/$5.00 | yes | [direct-api](https://openrouter.ai/google/gemini-2.5-pro) |
| openrouter | openai | `gpt-5.6-sol` | 1.05M | $2.00 | $10.00 | $0.200 | **$4.00** | batch $1.00/$5.00 | yes | [direct-api](https://openrouter.ai/openai/gpt-5.6-sol) |
| litellm | moonshot | `kimi-k3` | 1.05M | $3.00 | $15.00 | $0.300 | **$6.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| moonshot | moonshot | `kimi-k3` | 1.05M | $3.00 | $15.00 | — | **$6.00** |  | yes | [manual](https://benchlm.ai/llm-pricing) |
| openrouter | moonshot | `kimi-k3` | 1.05M | $3.00 | $15.00 | $0.300 | **$6.00** |  | yes | [direct-api](https://openrouter.ai/moonshotai/kimi-k3) |
| litellm | xai | `grok-beta` | 131K | $5.00 | $15.00 | — | **$7.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-4o-2024-05-13` | 128K | $5.00 | $15.00 | — | **$7.50** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-4o-2024-05-13) |
| litellm | google | `gemini-3.5-live-translate-preview` | — | $3.50 | $21.00 | — | **$7.88** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `daybreak-blue-latest` | 1.05M | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-5.6` | 922K | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-5.6-sol` | 922K | $4.00 | $20.00 | $0.400 | **$8.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| anthropic | anthropic | `claude-opus-4.8` | 1M | $5.00 | $25.00 | $0.500 | **$10.00** |  | yes | [manual](https://www.morphllm.com/llm-api) |
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
| openai | openai | `gpt-5.6-sol` | 1.05M | $5.00 | $30.00 | — | **$11.25** |  | yes | [manual](https://www.cloudzero.com/blog/llm-api-pricing-comparison/) |
| openrouter | sakana | `fugu-ultra` | 1M | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://openrouter.ai/sakana/fugu-ultra) |
| openrouter | openai | `gpt-5.5` | 1.05M | $5.00 | $30.00 | $0.500 | **$11.25** | batch $2.50/$15.00 | yes | [direct-api](https://openrouter.ai/openai/gpt-5.5) |
| openrouter | openai | `gpt-chat-latest` | 400K | $5.00 | $30.00 | $0.500 | **$11.25** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-chat-latest) |
| litellm | openai | `gpt-4-1106-preview` | 128K | $10.00 | $30.00 | — | **$15.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `gpt-4-turbo` | 128K | $10.00 | $30.00 | — | **$15.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-4-turbo` | 128K | $10.00 | $30.00 | — | **$15.00** | batch $5.00/$15.00 | yes | [direct-api](https://openrouter.ai/openai/gpt-4-turbo) |
| openrouter | openai | `gpt-4-turbo-preview` | 128K | $10.00 | $30.00 | — | **$15.00** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-4-turbo-preview) |
| litellm | anthropic | `claude-fable-5` | 1M | $10.00 | $50.00 | $1.00 | **$20.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| … | | 23 more | | | | | | | | |

### Reasoning (36)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | allenai | `olmo-3-32b-think` | 66K | $0.150 | $0.500 | — | **$0.237** |  | yes | [direct-api](https://openrouter.ai/allenai/olmo-3-32b-think) |
| litellm | deepseek | `deepseek-reasoner` | 131K | $0.280 | $0.420 | $0.028 | **$0.315** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | arcee-ai | `trinity-large-thinking` | 262K | $0.220 | $0.850 | $0.060 | **$0.378** |  | yes | [direct-api](https://openrouter.ai/arcee-ai/trinity-large-thinking) |
| litellm | alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | 262K | $0.150 | $1.20 | — | **$0.412** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-next-80b-a3b-thinking` | 262K | $0.150 | $1.20 | — | **$0.412** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-next-80b-a3b-thinking) |
| openrouter | thinkingmachines | `inkling-small` | 1.05M | $0.450 | $1.20 | $0.100 | **$0.637** |  | yes | [direct-api](https://openrouter.ai/thinkingmachines/inkling-small) |
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
| openrouter | openai | `o3-mini` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** | batch $0.550/$2.20 | yes | [direct-api](https://openrouter.ai/openai/o3-mini) |
| openrouter | openai | `o3-mini-high` | 200K | $1.10 | $4.40 | $0.550 | **$1.93** | batch $0.550/$2.20 | yes | [direct-api](https://openrouter.ai/openai/o3-mini-high) |
| openrouter | openai | `o4-mini` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** | batch $0.550/$2.20 | yes | [direct-api](https://openrouter.ai/openai/o4-mini) |
| openrouter | openai | `o4-mini-high` | 200K | $1.10 | $4.40 | $0.275 | **$1.93** | batch $0.550/$2.20 | yes | [direct-api](https://openrouter.ai/openai/o4-mini-high) |
| litellm | openai | `o3-2025-04-16` | 200K | $2.00 | $8.00 | $0.500 | **$3.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | perplexity | `sonar-reasoning-pro` | 128K | $2.00 | $8.00 | — | **$3.50** |  | yes | [direct-api](https://openrouter.ai/perplexity/sonar-reasoning-pro) |
| litellm | openai | `o1-2024-12-17` | 200K | $15.00 | $60.00 | $7.50 | **$26.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o3-pro` | 200K | $20.00 | $80.00 | — | **$35.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o3-pro-2025-06-10` | 200K | $20.00 | $80.00 | — | **$35.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `o3-pro` | 200K | $20.00 | $80.00 | — | **$35.00** | batch $10.00/$40.00 | yes | [direct-api](https://openrouter.ai/openai/o3-pro) |
| litellm | openai | `o1-pro` | 200K | $150.00 | $600.00 | — | **$262.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | openai | `o1-pro-2025-03-19` | 200K | $150.00 | $600.00 | — | **$262.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `o1-pro` | 200K | $150.00 | $600.00 | — | **$262.50** | batch $75.00/$300.00 | yes | [direct-api](https://openrouter.ai/openai/o1-pro) |

### Mid-tier ($1–4 in) (135)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| litellm | minimax | `MiniMax-M3` | 1M | $0.300 | $1.20 | $0.060 | **$0.525** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | minimax | `minimax-m3` | 1.05M | $0.300 | $1.20 | $0.060 | **$0.525** | batch $0.300/$1.20 | yes | [direct-api](https://openrouter.ai/minimax/minimax-m3) |
| deepseek | deepseek | `deepseek-v4-pro` | 1.05M | $0.660 | $1.98 | — | **$0.990** | off-peak −50% (daily 16:30-00:30 UTC) | yes | [manual](https://codersera.com/blog/deepseek-v4-pro-permanent-price-cut-may-2026/) |
| openrouter | nousresearch | `hermes-3-llama-3.1-405b` | 131K | $1.00 | $1.00 | — | **$1.00** |  | yes | [direct-api](https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b) |
| openrouter | perplexity | `sonar` | 127K | $1.00 | $1.00 | — | **$1.00** |  | yes | [direct-api](https://openrouter.ai/perplexity/sonar) |
| minimax | minimax | `minimax-m3` | 1.05M | $0.600 | $2.40 | — | **$1.05** |  | yes | [manual](https://www.morphllm.com/llm-api) |
| openrouter | deepseek | `deepseek-v4-pro` | 1.05M | $0.870 | $1.74 | $0.072 | **$1.09** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-pro) |
| litellm | xai | `grok-build-0.1` | 256K | $1.00 | $2.00 | $0.200 | **$1.25** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-3.5-turbo-0613` | 4K | $1.00 | $2.00 | — | **$1.25** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-3.5-turbo-0613) |
| openrouter | xai | `grok-build-0.1` | 256K | $1.00 | $2.00 | $0.200 | **$1.25** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-build-0.1) |
| litellm | moonshot | `moonshot-v1-32k` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | nousresearch | `hermes-4-405b` | 131K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://openrouter.ai/nousresearch/hermes-4-405b) |
| openrouter | relace | `relace-search` | 256K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://openrouter.ai/relace/relace-search) |
| litellm | zai | `glm-5` | 200K | $1.00 | $3.20 | $0.200 | **$1.55** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.3` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-4.3-latest` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | xai | `grok-4.20` | 2M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.20) |
| openrouter | xai | `grok-4.20-multi-agent` | 2M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.20-multi-agent) |
| openrouter | xai | `grok-4.3` | 1M | $1.25 | $2.50 | $0.200 | **$1.56** |  | yes | [direct-api](https://openrouter.ai/x-ai/grok-4.3) |
| openrouter | openai | `gpt-3.5-turbo-instruct` | 4K | $1.50 | $2.00 | — | **$1.63** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-3.5-turbo-instruct) |
| openrouter | deepseek | `deepseek-v4-pro-0813` | 1.05M | $1.12 | $3.37 | $0.037 | **$1.68** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-pro-0813) |
| openrouter | zai | `glm-5.2` | 1.05M | $1.19 | $3.74 | $0.221 | **$1.83** | batch $1.40/$4.40 | yes | [direct-api](https://openrouter.ai/z-ai/glm-5.2) |
| openrouter | zai | `glm-5-turbo` | 203K | $1.20 | $4.00 | $0.240 | **$1.90** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5-turbo) |
| openrouter | zai | `glm-5v-turbo` | 203K | $1.20 | $4.00 | $0.240 | **$1.90** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5v-turbo) |
| openrouter | zai | `glm-5.1` | 205K | $1.26 | $3.96 | $0.234 | **$1.94** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5.1) |
| litellm | zai | `glm-4.5-airx` | 128K | $1.10 | $4.50 | — | **$1.95** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | writer | `palmyra-x5` | 1.04M | $0.600 | $6.00 | — | **$1.95** |  | yes | [direct-api](https://openrouter.ai/writer/palmyra-x5) |
| litellm | anthropic | `claude-haiku-4-5` | 200K | $1.00 | $5.00 | $0.100 | **$2.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `gemini-robotics-er-1.6-preview` | 131K | $1.00 | $5.00 | — | **$2.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | anthropic | `claude-haiku-latest` | 200K | $1.00 | $5.00 | $0.100 | **$2.00** |  | yes | [direct-api](https://openrouter.ai/~anthropic/claude-haiku-latest) |
| openrouter | meta | `muse-spark-1.1` | 1.05M | $1.25 | $4.25 | $0.150 | **$2.00** |  | yes | [direct-api](https://openrouter.ai/meta/muse-spark-1.1) |
| openrouter | meta | `muse-spark-1.2` | 1.05M | $1.25 | $4.25 | $0.150 | **$2.00** |  | yes | [direct-api](https://openrouter.ai/meta/muse-spark-1.2) |
| litellm | mistral | `glm-5-2` | 1.05M | $1.40 | $4.40 | $0.140 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | alibaba-modelstudio | `glm-5.1` | 203K | $1.40 | $4.40 | $0.260 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | alibaba-modelstudio | `glm-5.2` | 1.05M | $1.40 | $4.40 | $0.280 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `zai-glm-5-2` | 1.05M | $1.40 | $4.40 | $0.140 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | zai | `glm-5.3` | 1.05M | $1.40 | $4.40 | $0.260 | **$2.15** |  | yes | [direct-api](https://openrouter.ai/z-ai/glm-5.3) |
| openrouter | zai | `glm-latest` | 1.05M | $1.40 | $4.40 | $0.260 | **$2.15** |  | yes | [direct-api](https://openrouter.ai/~z-ai/glm-latest) |
| zai | zai | `glm-5.2` | 1.05M | $1.40 | $4.40 | — | **$2.15** |  | yes | [manual](https://www.morphllm.com/llm-api) |
| zai | zai | `glm-5.3` | 1.05M | $1.40 | $4.40 | — | **$2.15** |  | yes | [manual](https://openrouter.ai/z-ai/glm-5.3) |
| … | | 95 more | | | | | | | | |

### Coding (28)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | alibaba-modelstudio | `qwen3-coder-30b-a3b-instruct` | 262K | $0.070 | $0.280 | — | **$0.122** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-30b-a3b-instruct) |
| litellm | mistral | `devstral-small-latest` | 256K | $0.100 | $0.300 | — | **$0.150** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | deepseek | `deepseek-coder` | 128K | $0.140 | $0.280 | — | **$0.175** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `codestral-mamba-latest` | 256K | $0.250 | $0.250 | — | **$0.250** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | kwaipilot | `kat-coder-air-v2.5` | 256K | $0.150 | $0.600 | $0.030 | **$0.263** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-air-v2.5) |
| openrouter | alibaba-modelstudio | `qwen3-coder-next` | 262K | $0.120 | $0.800 | $0.070 | **$0.290** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-next) |
| openrouter | alibaba-modelstudio | `qwen3-coder-flash` | 1M | $0.195 | $0.975 | $0.039 | **$0.390** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-flash) |
| litellm | mistral | `codestral-latest` | 128K | $0.300 | $0.900 | — | **$0.450** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | mistral | `codestral-2508` | 256K | $0.300 | $0.900 | $0.030 | **$0.450** |  | yes | [direct-api](https://openrouter.ai/mistralai/codestral-2508) |
| openrouter | alibaba-modelstudio | `qwen3-coder` | 262K | $0.300 | $1.00 | $0.100 | **$0.475** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder) |
| openrouter | kwaipilot | `kat-coder-pro-v2` | 262K | $0.300 | $1.20 | $0.060 | **$0.525** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-pro-v2) |
| litellm | alibaba-modelstudio | `qwen-coder` | 1M | $0.300 | $1.50 | — | **$0.600** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.1-codex-mini` | 400K | $0.250 | $2.00 | $0.030 | **$0.688** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex-mini) |
| openrouter | alibaba-modelstudio | `qwen-2.5-coder-32b-instruct` | 33K | $0.660 | $1.00 | — | **$0.745** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct) |
| litellm | mistral | `devstral-latest` | 256K | $0.400 | $2.00 | — | **$0.800** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `devstral-medium-latest` | 256K | $0.400 | $2.00 | — | **$0.800** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | mistral | `devstral-2512` | 262K | $0.440 | $2.20 | $0.044 | **$0.880** |  | yes | [direct-api](https://openrouter.ai/mistralai/devstral-2512) |
| openrouter | volcengine-ark | `seed-2.0-code` | 262K | $0.500 | $3.00 | — | **$1.13** |  | yes | [direct-api](https://openrouter.ai/bytedance-seed/seed-2.0-code) |
| openrouter | kwaipilot | `kat-coder-pro-v2.5` | 256K | $0.740 | $2.96 | $0.150 | **$1.29** |  | yes | [direct-api](https://openrouter.ai/kwaipilot/kat-coder-pro-v2.5) |
| openrouter | alibaba-modelstudio | `qwen3-coder-plus` | 1M | $0.650 | $3.25 | $0.130 | **$1.30** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-coder-plus) |
| openrouter | moonshot | `kimi-k2.7-code` | 262K | $0.670 | $3.40 | $0.190 | **$1.35** | batch $0.950/$4.00 | yes | [direct-api](https://openrouter.ai/moonshotai/kimi-k2.7-code) |
| litellm | alibaba-modelstudio | `kimi-k2.7-code` | 229K | $0.950 | $4.00 | $0.190 | **$1.71** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | zai | `glm-5-code` | 200K | $1.20 | $5.00 | $0.300 | **$2.15** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.1-codex` | 400K | $1.25 | $10.00 | $0.130 | **$3.44** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex) |
| openrouter | openai | `gpt-5.1-codex-max` | 400K | $1.25 | $10.00 | $0.125 | **$3.44** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.1-codex-max) |
| litellm | openai | `gpt-5.3-codex` | 272K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.2-codex` | 400K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.2-codex) |
| openrouter | openai | `gpt-5.3-codex` | 400K | $1.75 | $14.00 | $0.175 | **$4.81** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.3-codex) |

### Budget (< $1 in) (247)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | mistral | `mistral-nemo` | 131K | $0.019 | $0.030 | — | **$0.022** |  | yes | [direct-api](https://openrouter.ai/mistralai/mistral-nemo) |
| openrouter | inclusionai | `ling-3.0-flash` | 262K | $0.021 | $0.063 | $0.0042 | **$0.032** |  | yes | [direct-api](https://openrouter.ai/inclusionai/ling-3.0-flash) |
| openrouter | ibm-granite | `granite-4.0-h-micro` | 131K | $0.017 | $0.112 | — | **$0.041** |  | yes | [direct-api](https://openrouter.ai/ibm-granite/granite-4.0-h-micro) |
| openrouter | deepseek | `deepseek-v4-flash-latest` | 1.31M | $0.030 | $0.075 | $0.0070 | **$0.041** |  | yes | [direct-api](https://openrouter.ai/~deepseek/deepseek-v4-flash-latest) |
| openrouter | sao10k | `l3-lunaris-8b` | 8K | $0.040 | $0.050 | — | **$0.043** |  | yes | [direct-api](https://openrouter.ai/sao10k/l3-lunaris-8b) |
| openrouter | nex-agi | `nex-n2-mini` | 262K | $0.025 | $0.100 | $0.0025 | **$0.044** |  | yes | [direct-api](https://openrouter.ai/nex-agi/nex-n2-mini) |
| openrouter | upstage | `solar-pro4` | 524K | $0.030 | $0.120 | $0.0060 | **$0.052** |  | yes | [direct-api](https://openrouter.ai/upstage/solar-pro4) |
| alibaba-modelstudio | alibaba-modelstudio | `qwen3.7-flash` | 1M | $0.030 | $0.130 | — | **$0.055** |  | yes | [manual](https://benchlm.ai/llm-pricing) |
| openrouter | openai | `gpt-oss-20b` | 131K | $0.030 | $0.130 | $0.030 | **$0.055** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-oss-20b) |
| openrouter | alibaba-modelstudio | `qwen3.7-flash` | 1M | $0.030 | $0.130 | $0.0060 | **$0.055** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3.7-flash) |
| openrouter | meta | `llama-3.1-8b-instruct` | 131K | $0.050 | $0.080 | $0.025 | **$0.058** |  | yes | [direct-api](https://openrouter.ai/meta-llama/llama-3.1-8b-instruct) |
| openrouter | mistral | `mistral-small-24b-instruct-2501` | 33K | $0.050 | $0.080 | — | **$0.058** |  | yes | [direct-api](https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501) |
| openrouter | gryphe | `mythomax-l2-13b` | 8K | $0.060 | $0.060 | — | **$0.060** |  | yes | [direct-api](https://openrouter.ai/gryphe/mythomax-l2-13b) |
| openrouter | amazon | `nova-micro-v1` | 128K | $0.035 | $0.140 | — | **$0.061** |  | yes | [direct-api](https://openrouter.ai/amazon/nova-micro-v1) |
| openrouter | google | `gemma-3-4b-it` | 131K | $0.050 | $0.100 | — | **$0.063** |  | yes | [direct-api](https://openrouter.ai/google/gemma-3-4b-it) |
| openrouter | ibm-granite | `granite-4.1-8b` | 131K | $0.050 | $0.100 | $0.050 | **$0.063** |  | yes | [direct-api](https://openrouter.ai/ibm-granite/granite-4.1-8b) |
| openrouter | cohere | `command-r7b-12-2024` | 128K | $0.037 | $0.150 | — | **$0.066** |  | yes | [direct-api](https://openrouter.ai/cohere/command-r7b-12-2024) |
| openrouter | openai | `gpt-oss-120b` | 131K | $0.037 | $0.170 | — | **$0.070** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-oss-120b) |
| openrouter | meta | `llama-3.2-1b-instruct` | 60K | $0.027 | $0.201 | — | **$0.070** |  | yes | [direct-api](https://openrouter.ai/meta-llama/llama-3.2-1b-instruct) |
| openrouter | deepseek | `deepseek-v4-flash-0731` | 1.31M | $0.060 | $0.120 | $0.012 | **$0.075** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash-0731) |
| openrouter | google | `gemma-3-12b-it` | 131K | $0.050 | $0.150 | — | **$0.075** |  | yes | [direct-api](https://openrouter.ai/google/gemma-3-12b-it) |
| openrouter | poolside | `laguna-xs-2.1` | 262K | $0.060 | $0.120 | $0.030 | **$0.075** |  | yes | [direct-api](https://openrouter.ai/poolside/laguna-xs-2.1) |
| openrouter | tencent-hunyuan | `hy-mt2-1.8b` | 8K | $0.044 | $0.177 | — | **$0.077** |  | yes | [direct-api](https://openrouter.ai/tencent/hy-mt2-1.8b) |
| openrouter | alibaba-modelstudio | `qwen3-30b-a3b-instruct-2507` | 262K | $0.048 | $0.193 | — | **$0.084** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-30b-a3b-instruct-2507) |
| litellm | alibaba-modelstudio | `qwen-turbo` | 129K | $0.050 | $0.200 | — | **$0.087** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | alibaba-modelstudio | `qwen-turbo-latest` | 1M | $0.050 | $0.200 | — | **$0.087** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | nvidia | `nemotron-3-nano-30b-a3b` | 262K | $0.050 | $0.200 | $0.030 | **$0.087** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3-nano-30b-a3b) |
| openrouter | microsoft | `phi-4` | 16K | $0.070 | $0.140 | — | **$0.087** |  | yes | [direct-api](https://openrouter.ai/microsoft/phi-4) |
| litellm | zai | `glm-4-32b-0414-128k` | 128K | $0.100 | $0.100 | — | **$0.100** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | mistral | `ministral-3b-2512` | 131K | $0.100 | $0.100 | $0.010 | **$0.100** |  | yes | [direct-api](https://openrouter.ai/mistralai/ministral-3b-2512) |
| openrouter | rekaai | `reka-edge` | 16K | $0.100 | $0.100 | — | **$0.100** |  | yes | [direct-api](https://openrouter.ai/rekaai/reka-edge) |
| openrouter | amazon | `nova-lite-v1` | 300K | $0.060 | $0.240 | — | **$0.105** |  | yes | [direct-api](https://openrouter.ai/amazon/nova-lite-v1) |
| openrouter | mistral | `mistral-small-3.2-24b-instruct` | 131K | $0.075 | $0.200 | — | **$0.106** |  | yes | [direct-api](https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct) |
| openrouter | mistral | `ministral-8b` | 128K | $0.110 | $0.110 | — | **$0.110** |  | yes | [direct-api](https://openrouter.ai/mistralai/ministral-8b) |
| openrouter | nvidia | `nemotron-3.5-lightning` | 262K | $0.080 | $0.200 | $0.040 | **$0.110** |  | yes | [direct-api](https://openrouter.ai/nvidia/nemotron-3.5-lightning) |
| openrouter | deepseek | `deepseek-v4-flash` | 1.05M | $0.089 | $0.177 | $0.018 | **$0.111** |  | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash) |
| openrouter | poolside | `laguna-s-2.1` | 1.05M | $0.090 | $0.180 | $0.0090 | **$0.113** |  | yes | [direct-api](https://openrouter.ai/poolside/laguna-s-2.1) |
| openrouter | alibaba-modelstudio | `qwen3.5-9b` | 262K | $0.100 | $0.150 | — | **$0.113** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3.5-9b) |
| openrouter | alibaba-modelstudio | `qwen3.5-flash-02-23` | 1M | $0.065 | $0.260 | — | **$0.114** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3.5-flash-02-23) |
| openrouter | meta | `llama-3.2-3b-instruct` | 131K | $0.050 | $0.330 | — | **$0.120** |  | yes | [direct-api](https://openrouter.ai/meta-llama/llama-3.2-3b-instruct) |
| … | | 207 more | | | | | | | | |

### Vision / multimodal (25)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| openrouter | alibaba-modelstudio | `qwen3-vl-32b-instruct` | 131K | $0.104 | $0.416 | — | **$0.182** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-32b-instruct) |
| openrouter | alibaba-modelstudio | `qwen3-vl-8b-instruct` | 262K | $0.117 | $0.455 | — | **$0.202** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-8b-instruct) |
| openrouter | alibaba-modelstudio | `qwen3-vl-30b-a3b-instruct` | 262K | $0.130 | $0.520 | — | **$0.228** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-30b-a3b-instruct) |
| litellm | alibaba-modelstudio | `qwen3-vl-32b-instruct` | 131K | $0.160 | $0.640 | — | **$0.280** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | deepseek | `deepseek-v4-flash-vision-exp` | 1.05M | $0.220 | $0.660 | $0.014 | **$0.330** | off-peak −50% (sat/sun all-day; mon/tue/wed/thu/fri 00:00-01:00; mon/tue/wed/thu/fri 04:00-06:00; mon/tue/wed/thu/fri 10:00-00:00 UTC) | yes | [direct-api](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp) |
| openrouter | alibaba-modelstudio | `qwen2.5-vl-72b-instruct` | 128K | $0.250 | $0.750 | — | **$0.375** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct) |
| openrouter | baidu-qianfan | `ernie-4.5-vl-424b-a47b` | 123K | $0.420 | $1.25 | — | **$0.627** |  | yes | [direct-api](https://openrouter.ai/baidu/ernie-4.5-vl-424b-a47b) |
| openrouter | alibaba-modelstudio | `qwen3-vl-235b-a22b-instruct` | 262K | $0.210 | $1.90 | $0.100 | **$0.632** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-235b-a22b-instruct) |
| litellm | moonshot | `moonshot-v1-8k-vision-preview` | 8K | $0.200 | $2.00 | — | **$0.650** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-8b-thinking` | 131K | $0.180 | $2.10 | — | **$0.660** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-8b-thinking) |
| litellm | alibaba-modelstudio | `qwen3-vl-235b-a22b-instruct` | 131K | $0.400 | $1.60 | — | **$0.700** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-30b-a3b-thinking` | 262K | $0.200 | $2.40 | — | **$0.750** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-30b-a3b-thinking) |
| litellm | alibaba-modelstudio | `qwen3-vl-32b-thinking` | 131K | $0.160 | $2.87 | — | **$0.838** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-3.1-flash-image-preview` | 66K | $0.500 | $3.00 | — | **$1.13** |  | yes | [direct-api](https://openrouter.ai/google/gemini-3.1-flash-image-preview) |
| litellm | alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | 131K | $0.400 | $4.00 | — | **$1.30** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | alibaba-modelstudio | `qwen3-vl-235b-a22b-thinking` | 131K | $0.400 | $4.00 | — | **$1.30** |  | yes | [direct-api](https://openrouter.ai/qwen/qwen3-vl-235b-a22b-thinking) |
| litellm | moonshot | `moonshot-v1-32k-vision-preview` | 33K | $1.00 | $3.00 | — | **$1.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5-image-mini` | 400K | $2.50 | $2.00 | $0.250 | **$2.38** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5-image-mini) |
| litellm | moonshot | `moonshot-v1-128k-vision-preview` | 131K | $2.00 | $5.00 | — | **$2.75** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `gemini-omni-flash-preview` | 1.05M | $1.50 | $9.00 | — | **$3.38** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-2-vision` | 33K | $2.00 | $10.00 | — | **$4.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | xai | `grok-2-vision-latest` | 33K | $2.00 | $10.00 | — | **$4.00** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | google | `gemini-3-pro-image-preview` | 66K | $2.00 | $12.00 | $0.200 | **$4.50** |  | yes | [direct-api](https://openrouter.ai/google/gemini-3-pro-image-preview) |
| litellm | xai | `grok-vision-beta` | 8K | $5.00 | $15.00 | — | **$7.50** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| openrouter | openai | `gpt-5.4-image-2` | 272K | $8.00 | $15.00 | $2.00 | **$9.75** |  | yes | [direct-api](https://openrouter.ai/openai/gpt-5.4-image-2) |

### Free / $0 (28)

| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |
|---|---|---|---:|---:|---:|---:|---:|---|---|---|
| litellm | google | `gemma-3-27b-it` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | zai | `glm-4.5-flash` | 128K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | zai | `glm-4.7-flash` | 200K | $0 | $0 | $0 | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | mistral | `labs-leanstral-1-5` | 262K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `learnlm-1.5-pro-experimental` | 33K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `lyria-3-clip-preview` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
| litellm | google | `lyria-3-pro-preview` | 131K | $0 | $0 | — | **$0** |  | yes | [direct-api](https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json) |
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
| openrouter | stealth | `ox-alpha` | 1.05M | $0 | $0 | — | **$0** |  | yes | [direct-api](https://openrouter.ai/stealth/ox-alpha) |

## Last collection run

| Source | Method | Status | Rows | Note |
|---|---|---|---:|---|
| openrouter | direct-api | ok | 351 |  |
| litellm | direct-api | ok | 204 |  |
| manual:seed-2026-08-web-research.json | manual | ok | 19 |  |

_Prices change often and vary by region, cache state, context band and service tier. Rows marked `page`/`web-research` are low-confidence extractions — verify on the linked source before committing spend._
