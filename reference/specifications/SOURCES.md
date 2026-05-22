# GCSE Maths Specification Sources

Last checked: 2026-05-22.

The PDF specifications are cached locally in `reference/specifications/cache/` for Cleon to consult while writing lessons. That cache is deliberately git-ignored because the PDFs are third-party exam-board documents and this repository is public. Keep source URLs and checksums here; refresh the local cache with `scripts/fetch-specifications.sh`.

## Cached Specifications

| Board | Qualification | Local cache file | Official source |
| --- | --- | --- | --- |
| OCR | GCSE Mathematics (9-1) J560 | `ocr-j560-gcse-mathematics-specification.pdf` | <https://www.ocr.org.uk/Images/168982-specification-gcse-mathematics.pdf> |
| AQA | GCSE Mathematics 8300 | `aqa-8300-gcse-mathematics-specification.pdf` | <https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF> |
| Pearson Edexcel | GCSE Mathematics 1MA1 | `pearson-edexcel-1ma1-gcse-mathematics-specification.pdf` | <https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf> |
| Eduqas | GCSE Mathematics C300 | `eduqas-c300-gcse-mathematics-specification.pdf` | <https://www.eduqas.co.uk/media/cosjcbs1/eduqas-gcse-maths-spec-from-2015-e.pdf> |
| WJEC Wales | GCSE Mathematics and Numeracy Double Award 3320QD, teaching from 2025 | `wjec-3320qd-gcse-mathematics-and-numeracy-double-award-specification.pdf` | <https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf> |
| WJEC Wales | Legacy GCSE Mathematics 3300 | `wjec-3300-gcse-mathematics-legacy-specification.pdf` | <https://www.wjec.co.uk/media/u3rbzz1p/wjec-gcse-maths-spec-from-2015-r-e.pdf> |
| WJEC Wales | Legacy GCSE Mathematics-Numeracy 3310 | `wjec-3310-gcse-mathematics-numeracy-legacy-specification.pdf` | <https://www.wjec.co.uk/media/4wjg3krk/wjec-gcse-maths-numeracy-spec-from-2015-r-e.pdf> |
| CCEA | GCSE Mathematics 2210 | `ccea-2210-gcse-mathematics-specification.pdf` | <https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20%282017%29/GCSE%20Mathematics%20%282017%29-specification-Standard.pdf> |

## SHA-256 Checksums

```text
8476acfab0e1e3d928a58927101519287be1a0f1a3c0590c69829f2cb344ab11  aqa-8300-gcse-mathematics-specification.pdf
d96906ef38b76bd02b6523292291cd9be6bafbaeeffa4c36d0145aaa59647798  ccea-2210-gcse-mathematics-specification.pdf
d5d099134e63116e3694257b554602611aea5473a6e7cc10d1cf51bc2b9f3cbb  eduqas-c300-gcse-mathematics-specification.pdf
0f128abe76c8856c3a829de9d0a33c7ee19df24185ad798e5d6968835fa1a47c  ocr-j560-gcse-mathematics-specification.pdf
c30745f274663c5f910e3706ea836c6f7e95e0a00ff38eac860622232ed84f8b  pearson-edexcel-1ma1-gcse-mathematics-specification.pdf
ccd69e53a11897189bd76e0864ed2120e2e3ad29a965cb17205a2d95b30685a7  wjec-3300-gcse-mathematics-legacy-specification.pdf
1332744e070db1748a9e1e767c41b7843f99b36357428fa8f4cc0b4a45cd1cb0  wjec-3310-gcse-mathematics-numeracy-legacy-specification.pdf
dbf45ca922a5b4eec07b17276681bf54a6657e905c7f8e4e111247690076620f  wjec-3320qd-gcse-mathematics-and-numeracy-double-award-specification.pdf
```

## Notes For Lesson Authoring

- Treat England boards (OCR, AQA, Pearson Edexcel, Eduqas) as sharing the GCSE Mathematics subject content, with differences in paper structure, code, and wording.
- Treat WJEC Wales separately. From September 2025, new learners move to GCSE Mathematics and Numeracy (Double Award) 3320QD; legacy Mathematics 3300 and Mathematics-Numeracy 3310 still matter for final/resit windows.
- Treat CCEA separately because it is Northern Ireland, unitised, and has its own tier/unit model.
- Before adding a lesson, map the concept to the shared core first, then add board-specific overlays where assessment structure or wording differs.
