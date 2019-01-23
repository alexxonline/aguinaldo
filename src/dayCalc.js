import moment from "moment";

export default function() {
    return {
        days: getDays(),
        prev: getPrev()
    }
};

function getDays() {
    const now = moment();

    const next = getNext(now);
    return next.diff(now, 'days') + 1;
}

function getNext(now) {
    const june = moment([now.year(), 5, 30]);
    const december = moment([now.year(), 11, 18]);
    if(now.isAfter(december))
        return june.year(now.year()+1);
    else if(now.isAfter(june))
        return december;
    else
        return june;
}

const format = 'DD/MM/YYYY';
function getPrev() {
    const now = moment();
    const june = moment([now.year(), 5, 30]);
    const december = moment([now.year(), 11, 18]);
    
    if(now.isAfter(december))
        return december.format(format);
    else if(now.isAfter(june))
        return june.format(format);
    else return december.year(now.year()-1).format(format);
}

