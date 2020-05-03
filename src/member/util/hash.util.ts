import * as bcrypt from 'bcrypt';

export default async function hash(data: any): Promise<string> {
  const salt: string = await bcrypt.genSalt(12);
  const hashed: string = await bcrypt.hash(data, salt);
  return hashed;
}
