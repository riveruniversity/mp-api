export function cleanPhoneNumber(num?: string | number | null): string {

  if (!num) return '';

  const cleaned = String(num).trim()
    .replace(/(?<!^)\+|[^\d+]+/g, '')  // Remove non digits and keep the +
    .replace(/^00/, '+')               // Remove preceding '00'
    .replace(/^\+?1(?=\d{10})/, '');    // Remove preceding '+1' or '1' for American numbers     

  return cleaned;
}

export function formatPhone(phone: string) {
	return String(cleanPhoneNumber(phone)).replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}