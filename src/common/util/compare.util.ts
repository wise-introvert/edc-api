import * as bcrypt from 'bcrypt';

export default async function compare(
  data: string,
  hash: string,
): Promise<boolean> {
  const valid: boolean = await bcrypt.compare(data, hash);
  return valid;
}
