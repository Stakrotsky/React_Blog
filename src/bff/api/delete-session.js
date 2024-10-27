export const deletSession = async (sessionId) =>
	fetch(`http://localhost:3005/sessions/${sessionId}`, {
		method: 'DELETE',
	});
