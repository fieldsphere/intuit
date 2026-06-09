# Asset Manifest

Brand assets used by the landing-page replica.
All files live in `public/assets/` and are referenced from code as `/assets/<filename>`.

> Status note: TurboTax and Credit Karma logos were already present as fetched assets.
> The remaining logos and product illustrations are local SVG fallbacks that keep the
> same filenames/usage contracts for easy replacement with official CDN assets later.

## Brand logos (used in Nav + Footer + product section headers)

| File | Brand | Usage | Outbound link | Source |
| --- | --- | --- | --- | --- |
| `intuit-logo.svg` | Intuit | Nav + footer wordmark | https://www.intuit.com/ | local SVG fallback |
| `turbotax-logo.svg` | TurboTax | Product section + footer | https://turbotax.intuit.com/ | gwp-footer/tt-logo-color.svg |
| `creditkarma-logo.svg` | Credit Karma | Product section + footer | https://www.creditkarma.com/ | gwp-footer/ck-logo-color.svg |
| `quickbooks-logo.svg` | QuickBooks | Product section + footer | https://quickbooks.intuit.com/ | local SVG fallback |
| `mailchimp-logo.svg` | Mailchimp | Product section + footer | https://mailchimp.com/ | local SVG fallback |

## Product imagery (the 4 product feature blocks)

| File | Brand | Aspect | Usage |
| --- | --- | --- | --- |
| `product-turbotax.svg` | TurboTax | 620x520 landscape | TurboTax feature block image |
| `product-creditkarma.svg` | Credit Karma | 620x520 landscape | Credit Karma feature block image |
| `product-quickbooks.svg` | QuickBooks | 620x520 landscape | QuickBooks feature block image |
| `product-mailchimp.svg` | Mailchimp | 620x520 landscape | Mailchimp feature block image |

## Hero

| File | Aspect | Usage |
| --- | --- | --- |
| `hero-fuse.svg` | 784x784 square | Hero section platform illustration |

## Usage example (Next.js)

```tsx
import Image from "next/image";

<Image src="/assets/intuit-logo.svg" alt="Intuit" width={96} height={28} />
<Image src="/assets/product-turbotax.svg" alt="TurboTax" width={620} height={520} />
```
