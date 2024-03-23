export function countVotes(options) {
    if (options.type=="mcq")
    return sum(options);
    else return typeof(options.votes)==="undefined"?0:options.votes;
}
function sum(option){
    let v=0;
    option.options.map(e=>{
        v+=e.votes;
    })
    return v;
}