import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import Service from '../../../utilities/services/Service.js';

class FileService extends Service {
  constructor(config) {
    super(config);
    this.app = config.app;

    console.log(this.app.var('s3AccessKeyId'), this.app.var('s3SecretAccessKey'));

    this.s3 = new AWS.S3({
      accessKeyId: this.app.var('s3AccessKeyId'),
      secretAccessKey: this.app.var('s3SecretAccessKey'),
    });
  }

  async create(data) {
    const { file_type } = data;
    const s3Key = this.app.var('s3BucketKey');

    const key = `${uuidv4()}`;

    const url = await this.s3.getSignedUrl('putObject', {
      Bucket: this.app.var('s3Bucket'),
      Key: key,
      ContentType: file_type,
      ACL: 'public-read',
    });

    console.log(url, s3Key, key);

    return {
      url,
      key: `${s3Key}${key}`,
    };
  }
}

export default FileService;
