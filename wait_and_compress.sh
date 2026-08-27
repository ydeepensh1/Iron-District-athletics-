#!/bin/bash
while pgrep -f "node generate-pdf.js" > /dev/null; do
  echo "Waiting for PDF generation to finish..."
  sleep 2
done
echo "Compressing..."
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile=public/compressed.pdf public/Iron-District-Athletics-Final.pdf
mv public/compressed.pdf public/Iron-District-Athletics-Final.pdf
npm run build
