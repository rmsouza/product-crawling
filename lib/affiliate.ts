import { amazon } from 'affiliate';

const AFFILIATE_TAG = 'emmilemenez07-20';

function isValidAmazonUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('amazon.');
  } catch {
    return false;
  }
}

function getAmazonDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.split('.')[1]; // Get 'ca', 'com', etc.
  } catch {
    return 'com';
  }
}

export function transformToAffiliateUrl(url: string): string {
  if (!url) {
    return '';
  }

  if (!isValidAmazonUrl(url)) {
    return url;
  }

  try {
    const domain = getAmazonDomain(url);
    // Handle different Amazon domains while maintaining the affiliate tag
    return amazon(url, AFFILIATE_TAG, { domain });
  } catch (error) {
    console.error('Error transforming URL:', error);
    // If transformation fails, append the tag manually
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tag=${AFFILIATE_TAG}`;
  }
}