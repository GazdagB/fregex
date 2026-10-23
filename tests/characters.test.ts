import {it,describe, expect} from "vitest"
import {
    hasNumbers,
    hasSymbols,
    hasLetters
} from "../dist/functions/charachters"

describe("hasNumbers",()=>{
    it("should return true if it contains a digit",()=>{
        expect(hasNumbers("has123")).toBe(true)
    })

    it("should return false if it dosent contain a digit",()=>{
        expect(hasNumbers("dosen't")).toBe(false)
    })

    it("should return false even if it contains symbols",()=>{
        expect(hasNumbers("dos-.%+/en't")).toBe(false)
    })
})

describe("hasSymbols",()=>{
     it("should return true if it contains a symbol",()=>{
        expect(hasSymbols("string.")).toBe(true)
    })

    it("should return false if it dosen't contain a symbol",()=>{
        expect(hasSymbols("string")).toBe(false)
    })
})

describe("hasLetters",()=>{
    it("should return true if it contains letters",()=>{
        expect(hasLetters("asd")).toBe(true)
    })

    it("should return false if it dosen't contain letters", ()=>{
        expect(hasLetters(" .12342-")).toBe(false)
    })
})
