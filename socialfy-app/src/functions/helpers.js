import moment from 'moment';

export const convertTime = (time) => {
    return moment(time).fromNow();
}