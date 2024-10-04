import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {

    const signupPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);


    return Promise.allSettled([signupPromise, uploadPhotoPromise])
            .then(responses => responses.map((res) => ({
                status: res.status,
                value: res.status === 'fulfilled' ? result.value : result.reason,
            })));
}
