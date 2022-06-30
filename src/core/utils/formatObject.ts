interface Mask {
  [key: string]: (value: string) => string;
}

function setMask(keys: string[], values: string[], masks: Mask) {
  return values.map((value, i) => {
    const key = keys[i];
    if (!masks[key]) {
      return value;
    }
    return masks[key](value);
  });
}

function objectStructure(keys: string[], values: string[]) {
  return keys.map((key, index) => {
    const obj = { key, value: values[index] };

    return obj;
  });
}

function formatObject(obj: Object, masks?: Mask) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  if (masks) {
    const valuesMasked = setMask(keys, values, masks);
    return objectStructure(keys, valuesMasked);
  }

  return objectStructure(keys, values);
}

export default formatObject;
