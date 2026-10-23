// Boolean Cheks 
export function hasNumbers(str : string): boolean{
    return /\d/.test(str)
}

export function hasSymbols(str: string): boolean {
  return /[^\p{L}\p{N}\s]/u.test(str);
}

export function hasLetters(str: string): boolean {
  return /\p{L}/u.test(str);
}

export function hasUppercase(str: string): boolean {
  return /\p{Lu}/u.test(str);
}

export function hasLowercase(str: string): boolean {
  return /\p{Ll}/u.test(str);
}

export function hasWhitespace(str: string): boolean{
    return /[\s]/.test(str)
}

export function hasEmoji(str: string): boolean {
  return /\p{Extended_Pictographic}|\p{Regional_Indicator}{2}|[0-9#*]\uFE0F?\u20E3/u.test(str);
}


export function hasOnlyNumbers(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export function hasOnlyLetters(str: string): boolean {
  return /^\p{L}+$/u.test(str);
}


export function hasOnlyAlphanumeric(str: string): boolean {
  return /^[\p{L}0-9]+$/u.test(str);
}