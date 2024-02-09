let moment = require('moment');

export const getFormattedDate = (date) => {
    return moment(date).format('lll')
}

export const getDateMinusDays = (date, days) => {
    return new Date(
        date.getFullYear(), date.getMonth(), date.getDate() - days)
}