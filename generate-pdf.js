import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
    });
    const page = await browser.newPage();
    
    // Set viewport to a good desktop size
    await page.setViewport({ width: 1440, height: 1080 });

    console.log('Navigating to local app...');
    // Connect to the local dev server running on port 3000
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });

    console.log('Waiting for loader to finish...');
    // Give time for initial animations and the loader to disappear
    await new Promise(resolve => setTimeout(resolve, 3500));

    console.log('Activating POWER node...');
    // Move mouse to the POWER node coordinates (82% width, 25% height)
    await page.mouse.move(1440 * 0.82, 1080 * 0.25);
    
    // Wait for the hover effect and text crossfade to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Forcing all framer-motion elements to be visible for PDF...');
    await page.addStyleTag({
      content: `
        @media print {
          /* Force opacity for animated elements but don't break layout transforms */
          [style*="opacity: 0"], [style*="opacity:0"] {
            opacity: 1 !important;
            visibility: visible !important;
          }
          /* Ensure all images are fully loaded and visible */
          img {
            opacity: 1 !important;
            visibility: visible !important;
          }
        }
      `
    });

    console.log('Scrolling to trigger animations and lazy loads...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let retries = 0;
        const distance = 400;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          
          const scrollHeight = document.body.scrollHeight;
          if (window.scrollY + window.innerHeight >= scrollHeight - 50) {
            retries++;
            // Wait a bit at the bottom to ensure all lazy images load
            if (retries > 6) {
              clearInterval(timer);
              window.scrollTo(0, 0); // Scroll back up to ensure hero is at top state
              resolve();
            }
          } else {
            retries = 0;
          }
        }, 150);
      });
    });

    // Wait a bit more for final images to load and hero to reset to top scroll state
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Move mouse to the POWER node coordinates again to make sure it's active
    await page.mouse.move(1440 * 0.82, 1080 * 0.25);
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Generating PDF...');
    await page.pdf({
      path: 'public/Iron-District-Athletics-Final.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });

    await browser.close();
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
