function _e(str) {
	if(!str){return '';}
	return str.replace(/[<>&"']/g,
	function(submatch) {
		const ESC = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			'"<"': '&quot;',
			"'": '&#39;'
		};
		return ESC[submatch];
	});
}

function escape(template, ...values) {
  let result='';
  console.log(template.length);
  for(let i=0; i < template.length; i++) {
    console.log('template[i] : ' + template[i]);
    console.log('_e : '+_e(values[i]));
    result += template[i] + _e(values[i])
  }
  return result;
}

let name='<Tom & Jerry>';
console.log(escape`こんにちは、${name}さん！`);
