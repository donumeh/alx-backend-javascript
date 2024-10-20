interface MajorCredits {
    credits: number
    brand: string
}

interface MinorCredits {
    credits: number
    brand: string
}

const sumMajorCredits = (subject1: {credits: number}, subject2: {credits: number} ): MajorCredits => {
    return {credits: subject1.credits + subject2.credits, brand: 'BYU'};
}

const sumMinorCredits = (subject1: {credits: number}, subject2: {credits: number}) : MinorCredits => {
    return {credits: subject1.credits + subject2.credits, brand: 'BYU'};
}