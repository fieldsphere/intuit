# Asset Manifest

Real brand assets pulled from intuit.com's CDN, used by the landing-page replica.
All files live in `public/assets/` and are referenced from code as `/assets/<filename>`.

> Status note: these files are fetched by the asset-download step. If any one failed,
> fall back to an inline SVG wordmark / placeholder for that single item.

## Brand logos (used in Nav + Footer + product section headers)

| File | Brand | Usage | Outbound link | Source |
| --- | --- | --- | --- | --- |
| `intuit-logo.svg` | Intuit | Nav + footer wordmark | https://www.intuit.com/ | gwp-footer/intuit-rebrand-logo-dark.svg |
| `turbotax-logo.svg` | TurboTax | Product section + footer | https://turbotax.intuit.com/ | gwp-footer/tt-logo-color.svg |
| `creditkarma-logo.svg` | Credit Karma | Product section + footer | https://www.creditkarma.com/ | gwp-footer/ck-logo-color.svg |
| `quickbooks-logo.svg` | QuickBooks | Product section + footer | https://quickbooks.intuit.com/ | gwp-footer/qb-logo-dark.svg |
| `mailchimp-logo.svg` | Mailchimp | Product section + footer | https://mailchimp.com/ | gwp-footer/mailchimp-logo-dark.svg |

## Product imagery (the 4 product feature blocks)

| File | Brand | Aspect | Usage |
| --- | --- | --- | --- |
| `product-turbotax.png` | TurboTax | 286x508 portrait | TurboTax feature block image |
| `product-creditkarma.png` | Credit Karma | 286x508 portrait | Credit Karma feature block image |
| `product-quickbooks.png` | QuickBooks | 286x508 portrait | QuickBooks feature block image |
| `product-mailchimp.png` | Mailchimp | 286x508 portrait | Mailchimp feature block image |

## Hero

| File | Aspect | Usage |
| --- | --- | --- |
| `hero-fuse.jpg` | 784x784 square | Hero section product screenshot ("Intuit Fuse") |

## Usage example (Next.js)

```tsx
import Image from "next/image";

<Image src="/assets/intuit-logo.svg" alt="Intuit" width={96} height={28} />
<Image src="/assets/product-turbotax.png" alt="TurboTax" width={286} height={508} />
```
