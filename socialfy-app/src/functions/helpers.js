import moment from 'moment';

export const convertTime = (time) => {
    return moment(time).fromNow();
}

export const getLikes = (likeArray) => {
    let count = 0;

    for (let i = 0; i < likeArray.length; i++) {
        if (likeArray[i].liked) count ++
    };

    return count;
}

export const checkLiked = (likeArray, user) => {
    for (let i = 0; i < likeArray.length; i++ ){
        
       
        if (likeArray[i].userId === user.id) {
            return likeArray[i].liked;
        }
    }

    return false;
}