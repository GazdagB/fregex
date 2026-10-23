export function minLength(str: string, min: number): boolean {
        //Catch invalid min values
        if(min < 0){
            throw new Error("the minimum integer should be positive")
        } else if (!Number.isInteger(min)){
            throw new Error("Minimum must be an integer")
        }

        return Array.from(str).length >= min;
  
}