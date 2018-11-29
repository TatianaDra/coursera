/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports=function (hashtags) {
    var allHashtags=[];
    var result='';
    for (var i=0; i < hashtags.length; i++) {
        hashtags[i]=hashtags[i].toLowerCase();
        allHashtags.push(hashtags[i]);
          }

    for (var i=0; i < allHashtags.length; i++) {
        for (var j=i + 1; j < allHashtags.length; j++) {
            if (allHashtags[i] == allHashtags[j]) {
				
                allHashtags.splice(j, 1);
            }
        }
    }
	for (var i=0; i < allHashtags.length; i++) {
        for (var j=i + 1; j < allHashtags.length; j++) {
            if (allHashtags[i] == allHashtags[j]) {
				
                allHashtags.splice(j, 1);
            }
        }
    }
	

if (allHashtags.length==0)
	result=''
else 
    result=allHashtags.join(', ');
    return result;

};