function utf8ToBase64(text: string, window?: Window): string {
  if (typeof window !== 'undefined') {
    return window.btoa(encodeURIComponent(text));
  }
  return Buffer.from(text).toString('base64');
}

function base64ToUtf8(text: string, window?: Window): string {
  if (typeof window !== 'undefined') {
    return decodeURIComponent(window.atob(text));
  }
  return Buffer.from(text, 'base64').toString('utf8');
}

export { utf8ToBase64, base64ToUtf8 };
