export const useClickToCopy = (event: Event): void => {
  const el = (event.target as HTMLElement).innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(el)
      .then(() => {
        // Text copied successfully
      })
      .catch((error) => {
        // Unable to write to clipboard
        console.error('Error copying text to clipboard:', error);
      });
  } else {
    // SUPPORT OLD BROWSER AND NON-HTTPS WEBSITE
    const textArea = document.createElement('textarea');
    textArea.value = el;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        // Text copied successfully
      } else {
        console.error('Unable to copy text to clipboard.');
      }
    } catch (error) {
      console.error('Error copying text to clipboard:', error);
    }
    document.body.removeChild(textArea);
  }
};
