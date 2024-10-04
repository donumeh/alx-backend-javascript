export default function uploadPhoto(filename) {
  return Promise.resolve({status: 'ok'})
  // reject(new Error(`${filename} cannot be processed`));
}
