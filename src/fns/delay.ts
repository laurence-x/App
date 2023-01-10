export default function delay(ms: number) {
	return new Promise((resolve) => {
		const timer = setTimeout(resolve, ms)
		return () => clearTimeout(timer)
	})
}
