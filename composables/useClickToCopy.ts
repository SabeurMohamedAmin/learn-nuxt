import { ref } from 'vue';

interface resultClickToCopy {
  copied: Ref<boolean>,
  error : Ref<string | null>,
  copyToClipboard : (event: Event) => Promise<void>,
}

export const useClickToCopy = ():resultClickToCopy => {
  // Reactive state to track success or error messages
  const copied = ref<boolean>(false);
  const error = ref<string | null>(null);

  /**
   * Copies text to the clipboard.
   * @param event - The click event from which the text is extracted.
   */
  const copyToClipboard = async (event: Event): Promise<void> => {
    try {
      // Extract the text content from the clicked element
      const el = (event.target as HTMLElement).innerText;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        // Use modern clipboard API for HTTPS websites
        await navigator.clipboard.writeText(el);
        copied.value = true;
        error.value = null; // Clear any previous errors
      } else {
        // Fallback for older browsers or non-HTTPS websites
        const textArea = document.createElement('textarea');
        textArea.value = el;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (!successful) {
          throw new Error('Unable to copy text to clipboard.');
        }

        document.body.removeChild(textArea);
        copied.value = true;
        error.value = null; // Clear any previous errors
      }
    } catch (err) {
      // Handle errors during the copy process
      console.error('Error copying text to clipboard:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error';
      copied.value = false;
    }
  };

  return {
    copied,
    error,
    copyToClipboard,
  };
};