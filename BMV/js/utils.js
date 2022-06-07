	// trim and clean string, trim blank spaces, clean CSS characters
	function trim(str) {
          return str.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/['"]+/g, '').replace(/<[^>]*>/g, '').replace(/&/g, '');
    } //jc trim

