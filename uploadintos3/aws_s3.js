const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const awsAccessKey = process.env.AWS_ACCESS_ID_KEY;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const awsSecretKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region: bucketRegion,
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecretKey
});

module.exports = {
    uploadFile: (fileStream, filename) => {
        console.log('Filestream', fileStream);
        console.log('Filename', filename);

        const uploadParams = {
            Bucket: bucketName,
            Body: fileStream,
            Key: filename
        };
        return s3.upload(uploadParams).promise();
    },
    downloadFile: (filename) => {
        const dParams = {
            Key: filename,
            Bucket: bucketName
        };
        return s3.getObject(dParams).createReadStream();
    }
}
