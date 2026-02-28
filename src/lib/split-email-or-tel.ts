export function splitEmailOrTel(value: string): { email?: string; phone?: string } {
  const v = value.trim();
  if (v.includes('@')) return { email: v };
  return { phone: v };
}
