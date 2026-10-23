// Boolean Cheks 
export function hasNumbers(str : string): boolean{
    return /\d/.test(str)
}

export function hasSymbols(str: string): boolean{
    return /[^a-zA-Z0-9\s]/.test(str);
}

export function hasLetters(str: string): boolean{
    return /[a-zA-Z]/.test(str)
}

