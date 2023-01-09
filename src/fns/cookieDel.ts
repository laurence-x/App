export default function cookieDel(ccA: string[]) {

	document.cookie.split(";").forEach((c) => {

		let pos = c.indexOf("=")
		let cnm = pos > -1 ? c.slice(0, pos) : c

		// if cookie name not in cookie array
		!ccA.includes(cnm.trim()) &&
			(document.cookie =
				cnm +
				"=;" +
				"domain=;" +
				"path=/;" +
				"expires=Thu, 01 Jan 1970 00:00:00 GMT;" +
				"secure=true;" +
				"samesite=Strict;")

	})


}

// usage: cookieDel([ "vic", "xxxxxx" ]) // <- cookies to keep
