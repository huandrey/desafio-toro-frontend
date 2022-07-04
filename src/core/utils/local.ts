export function saveLocal(key: string, data: any) {
  const stateNow = localStorage.getItem('state');
  if (!stateNow) {
    localStorage.setItem('state', JSON.stringify({ [key]: data }));
  } else {
    localStorage.setItem('state', JSON.stringify({ ...JSON.parse(stateNow), [key]: data }));
  }
}

export function takeLocal(key: string) {
  const value = localStorage.getItem(key);
  return value;
}
