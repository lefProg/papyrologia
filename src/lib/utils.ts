import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Downloads a file from a URL
 * @param url - The URL of the file to download
 * @param filename - Optional custom filename for the download
 */
export async function downloadFile(url: string, filename?: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename || url.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback: open in new tab if download fails
    window.open(url, '_blank');
  }
}

/**
 * Downloads multiple files sequentially
 * @param files - Array of objects with url and filename
 */
export async function downloadMultipleFiles(files: Array<{ url: string; filename: string }>) {
  for (let i = 0; i < files.length; i++) {
    // Add a small delay between downloads to avoid browser blocking
    if (i > 0) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    await downloadFile(files[i].url, files[i].filename);
  }
}
