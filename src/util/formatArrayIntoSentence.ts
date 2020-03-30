const formatArrayIntoSentence = (arr): string => {
    let outStr = '';
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = `${arr.slice(0, -1).join(', ')}, and ${arr.slice(-1)}`;
    }
    return outStr;
};

export default formatArrayIntoSentence;
