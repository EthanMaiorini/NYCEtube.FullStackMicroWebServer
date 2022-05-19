// import { useAppSelector } from 'app/config/store';

// export const GetVideo = () => {
// const account = useAppSelector(state => state.authentication.account);

 const AWS = require('aws-sdk');
 const config = require('./tsconfig.json');

const s3 = new AWS.S3();

require('dotenv').config();

// console.log(process.env);

function getVideo(videoName) {
//string concat string variable 
(async function() {
    try {
        AWS.config.setPromisesDependency();
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: 'us-east-1'
        })
        

        const response = await s3.getObject({
            Bucket: "zcw-cohort8zero",
            Key: videoName
        }).promise();
        
        console.log(response);

    } catch (e) {
        console.log('our error', e);
    }

})();

}

{
console.log(getVideo("videoapp/sora1.mp4"));
}
// 
// export default getVideo;

// https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora.mp4 <--- url