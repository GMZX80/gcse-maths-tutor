#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cache_dir="$repo_root/reference/specifications/cache"

mkdir -p "$cache_dir"

download() {
  local url="$1"
  local file="$2"
  curl -L --fail --retry 3 -o "$cache_dir/$file" "$url"
}

download "https://www.ocr.org.uk/Images/168982-specification-gcse-mathematics.pdf" \
  "ocr-j560-gcse-mathematics-specification.pdf"
download "https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF" \
  "aqa-8300-gcse-mathematics-specification.pdf"
download "https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf" \
  "pearson-edexcel-1ma1-gcse-mathematics-specification.pdf"
download "https://www.eduqas.co.uk/media/cosjcbs1/eduqas-gcse-maths-spec-from-2015-e.pdf" \
  "eduqas-c300-gcse-mathematics-specification.pdf"
download "https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf" \
  "wjec-3320qd-gcse-mathematics-and-numeracy-double-award-specification.pdf"
download "https://www.wjec.co.uk/media/u3rbzz1p/wjec-gcse-maths-spec-from-2015-r-e.pdf" \
  "wjec-3300-gcse-mathematics-legacy-specification.pdf"
download "https://www.wjec.co.uk/media/4wjg3krk/wjec-gcse-maths-numeracy-spec-from-2015-r-e.pdf" \
  "wjec-3310-gcse-mathematics-numeracy-legacy-specification.pdf"
download "https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20%282017%29/GCSE%20Mathematics%20%282017%29-specification-Standard.pdf" \
  "ccea-2210-gcse-mathematics-specification.pdf"

sha256sum "$cache_dir"/*.pdf
