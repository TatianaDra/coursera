/**
 * @param {String[]} hashtags
 * @param {String}
 */
 module.exports = function (hashtags) {
	var tagsMap = {};
	var tagsList = [];
	for (var i=0; i<hashtags.length; i++) {
		var hashtag = hashtags[i].toLowerCase();
		if (!tagsMap.hasOwnProperty(hashtag)) {
			tagsMap[hashtag] = true;
			tagsList.push(hashtag);
		}
	}
	return tagList.join(', ');
};