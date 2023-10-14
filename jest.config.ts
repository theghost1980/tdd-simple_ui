export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest", // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "\\.(css|less|sass|scss)$": 'identity-obj-proxy',
        
    },
}