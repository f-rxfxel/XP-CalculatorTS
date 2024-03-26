export function waitSeconds(seconds: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`waited ${seconds} seconds`);
      }, seconds * 1000);
    });
  }