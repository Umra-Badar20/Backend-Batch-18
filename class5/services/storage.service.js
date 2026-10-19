import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey: "private_YRZ1RqbIcv84oKa2lHuEOtfhxwA="
});

async function uploadFile(buffer){
    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg',
      });
      return response
}
export default uploadFile