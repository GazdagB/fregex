export function minLength(str: string, min: number): boolean {
        //Catch invalid min values
        if(min < 0){
            throw new Error("the minimum integer should be positive")
        } else if (!Number.isInteger(min)){
            throw new Error("Minimum must be an integer")
        }

        return Array.from(str).length >= min;
}

export function maxLength(str: string, max: number): boolean {
        //Catch invalid max values
        if(max < 0){
            throw new Error("the maximum integer should be positive")
        } else if (!Number.isInteger(max)){
            throw new Error("maximum must be an integer")
        }

        return Array.from(str).length <= max;
}