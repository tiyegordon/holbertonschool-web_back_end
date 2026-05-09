/* eslint-disable linebreak-style */
export default function uploadPhoto(filename) {
  const photo = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return photo;
}
