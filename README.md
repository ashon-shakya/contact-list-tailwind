# Simple Contact List (Tailwind CSS Demo)

## Description

This project is a simple, static HTML contact list designed to demonstrate basic usage of Tailwind CSS (via CDN) and simple JavaScript for interactivity. It simulates a mobile phone view centered on the screen and features expandable list items to show more contact details.

## Features

- **Mobile View Simulation:** The contact list is displayed within a styled frame resembling a smartphone.
- **Expandable Items:** Click on a contact's summary row to expand/collapse a section with additional details (e.g., Address, Notes, Company).
- **Tailwind CSS Styling:** Styled entirely using Tailwind CSS utility classes loaded via the CDN. Includes basic hover effects.
- **Static Data:** Contact information is hardcoded directly in the HTML.
- **Image Display:** Shows a static image for each contact (currently using the same image for all). Includes basic fallback styling if the image fails to load.
- **Basic JavaScript:** Uses vanilla JavaScript for the expand/collapse functionality.

## Technology Used

- **HTML:** Structure of the page and content.
- **Tailwind CSS (v3 via CDN):** For all styling and layout.
- **JavaScript (Vanilla):** For handling click events to toggle contact details visibility.
- **Google Fonts (Inter):** For the primary font.

## How to Run

1.  Save the HTML code from the Canvas into a file named `index.html` (or any other `.html` name).
2.  Open the `index.html` file directly in your web browser (e.g., Chrome, Firefox, Safari, Edge).

No build process or server is required because it uses the Tailwind CDN and vanilla JavaScript.

## Structure

- **`HTML (index.html):`** Contains the entire structure, including the phone frame, header, contact list (`<ul>`), and individual contact items (`<li>`).
- **CSS:**
  - Tailwind CSS classes are applied directly within the HTML elements.
  - A small `<style>` block in the `<head>` includes the base font setting, phone notch/speaker styles, transition helpers, and image fallback styles.
- **JavaScript:**
  - Included in a `<script>` tag at the bottom of the `<body>`.
  - Adds event listeners to each contact summary row to handle clicks for expanding/collapsing details and updating the +/- icon.
  - Includes basic keyboard accessibility for the expandable items.
