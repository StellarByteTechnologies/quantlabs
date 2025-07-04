// utils/CalendlyUtils.js
'use client'

import { CALENDLY_URL } from './constants';

/**
 * Opens Calendly in a popup window with optional UTM parameters
 * @param {Object} options - Configuration options
 * @param {string} options.url - Optional custom Calendly URL (defaults to the one in constants)
 * @param {string} options.source - Optional UTM source for tracking
 * @param {string} options.medium - Optional UTM medium for tracking
 * @param {string} options.campaign - Optional UTM campaign for tracking
 * @returns {void}
 */
export const openCalendly = (options = {}) => {
  console.log('Opening Calendly with options:', options); // Debug log
  
  const {
    url = CALENDLY_URL,
    source = '',
    medium = '',
    campaign = ''
  } = options;
  
  // Build URL with optional UTM parameters
  let calendlyUrl = url;
  
  console.log('Base Calendly URL:', calendlyUrl); // Debug log
  
  // Add UTM parameters if provided
  const utmParams = [];
  if (source) utmParams.push(`utm_source=${encodeURIComponent(source)}`);
  if (medium) utmParams.push(`utm_medium=${encodeURIComponent(medium)}`);
  if (campaign) utmParams.push(`utm_campaign=${encodeURIComponent(campaign)}`);
  
  // Append UTM parameters to URL if any exist
  if (utmParams.length > 0) {
    // Check if URL already has query parameters
    calendlyUrl += (calendlyUrl.includes('?') ? '&' : '?') + utmParams.join('&');
  }
  
  console.log('Final Calendly URL:', calendlyUrl); // Debug log
  
  try {
    // Open Calendly in a new window
    const newWindow = window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    
    // Check if popup was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      console.warn('Popup blocker may have prevented opening the Calendly window');
      // Fallback - redirect in same window if popup blocked
      window.location.href = calendlyUrl;
    }
  } catch (error) {
    console.error('Error opening Calendly:', error);
    // Fallback - redirect in same window
    window.location.href = calendlyUrl;
  }
};