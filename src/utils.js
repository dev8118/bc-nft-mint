import $ from 'jquery'
export const truncateAddress = (address) => {
    if (!address) return "No Account";
    const match = address.match(
      /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };
  
  export const toHex = (num) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };
  
  export const preprocess = () => {
    $('img.fn__svg').each(function(){
      var img 		= $(this);
      var imgClass	= img.attr('class');
      var imgURL		= img.attr('src');

      $.get(imgURL, function(data) {
        var svg 	= $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          svg 	= svg.attr('class', imgClass+' replaced-svg');
        }
        img.replaceWith(svg);

      }, 'xml');
      var div = $('*[data-bg-img]');
			div.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-bg-img');
				var dataBg	= element.data('bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+dataBg+')'});
				}
			});

    });
  }