const TAX_EXPORT_NAME_LIMIT = 64;

// 64 characters, counted as grapheme clusters. A UTF-8 byte slice splits
// a multi-byte name and can emit U+FFFD.
export function truncateTaxExportName(name: string): string {
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  let count = 0;

  for (const { index } of segmenter.segment(name)) {
    count += 1;
    if (count > TAX_EXPORT_NAME_LIMIT) {
      return name.slice(0, index);
    }
  }

  return name;
}

export function exportTaxForm(input: { taxpayerName: string }): { taxpayerName: string } {
  return { taxpayerName: truncateTaxExportName(input.taxpayerName) };
}
