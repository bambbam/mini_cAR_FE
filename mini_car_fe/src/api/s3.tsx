import { S3 } from "aws-sdk";

class S3Api {
    s3: S3;
    bucket_name: string;
    constructor(bucket_name: string) {
        this.s3 = new S3({
            //            apiVersion: process.env.REACT_APP_S3_aws_apiVersion,
            region: process.env.REACT_APP_S3_aws_region,
            credentials: {
                accessKeyId: process.env.REACT_APP_S3_aws_access_key_id as string,
                secretAccessKey: process.env.REACT_APP_S3_aws_secret_access_key as string,
            },
        });
        this.bucket_name = bucket_name;
    }
    get_object(prefix: string, key: string) {
        return this.s3
            .getObject({
                Bucket: this.bucket_name,
                Key: `${prefix}/${key}`,
            })
            .promise();
    }
    head_object(prefix: string, key: string) {
        return this.s3
            .headObject({
                Bucket: this.bucket_name,
                Key: `${prefix}/${key}`,
            })
            .promise();
    }
    upload_object(prefix: string, key: string, file: File) {
        try {
            return this.s3
                .upload({
                    Bucket: this.bucket_name,
                    Key: `${prefix}/${key}`,
                    Body: file,
                })
                .promise();
        } catch (e) {
            console.log(e);
        }
    }
    get_url(prefix: string, key: string) {
        return `https://${this.bucket_name}.s3.${process.env.REACT_APP_S3_aws_region}.amazonaws.com/${prefix}/${key}`;
    }
}

export default S3Api;
