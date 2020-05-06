export function removePasswords(data: any): any {
  if (Array.isArray(data)) {
    const temp: any = data.map((d: any) => {
      delete d?.createdBy?.password;
      delete d?.updatedBy?.password;
      return d;
    });
    return temp;
  }

  const temp: any = data;
  delete temp?.createdBy?.password;
  delete temp?.updatedBy?.password;
  return temp;
}
