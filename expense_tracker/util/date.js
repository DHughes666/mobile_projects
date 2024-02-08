let moment = require('moment');

export const getFormattedDate = (date) => {
    return moment(date).format('lll')
}