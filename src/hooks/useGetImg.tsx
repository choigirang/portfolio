import { useQuery } from 'react-query';
import AWS from 'aws-sdk';

const fetchS3Objects = async (folder: string) => {
  const ACCESS_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
  const region = 'ap-northeast-2';
  const bucketName = 'choigirang-portfolio';

  AWS.config.update({
    accessKeyId: ACCESS_ID,
    secretAccessKey: ACCESS_KEY,
    region,
  });

  const s3 = new AWS.S3();

  try {
    const data = await s3.listObjectsV2({ Bucket: bucketName, Prefix: folder }).promise();

    if (data.Contents) {
      const urls = data.Contents.map(obj => {
        return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`;
      });

      return urls.slice(1);
    }
  } catch (error) {
    throw new Error(`Error listing objects: ${error}`);
  }
};

const useGetImg = (folder: string) => {
  return useQuery(['s3Objects', folder], () => fetchS3Objects(folder));
};

export default useGetImg;
