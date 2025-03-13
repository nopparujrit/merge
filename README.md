1.how to setup dependency 
  -initialize package.json รันคำสั่ง npm init -y และเเก้ไข
    "scripts": {
      "build": "tsc",
      "test": "jest"
    },
  -ติดตั้ง TypeScript, Jest รันคำสั่ง npm install --save-dev typescript jest ts-jest @types/jest
  -initialize tsconfig รันคำสั่ง npx tsc --init และตั้งต่า {
      "compilerOptions": {
        "target": "es2017",
        "module": "commonjs",
        "rootDir": "./",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
      }
    }
  -สร้างไฟล์ jest.config.js
    module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node'
    };
    
2.execute code and unit test
 -compile TypeScript รันคำสั่ง npm run build
 -Unit Test รันคำสั่ง npm test

 
