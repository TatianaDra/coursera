
/**
 * @param {String} tweet
 * @returns {String[]}
 */



module.exports=function (tweet) {
var hashs=[];
//var space=' ';
var arrayOfStrings=tweet.split(' ');

for (var i=0; i<arrayOfStrings.length; i++) {
if (arrayOfStrings[i].indexOf('#')!=-1) {
var word=arrayOfStrings[i].replace('#','');
hashs.push(word);

}

}

return hashs;

};
	


