import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'Application/json'}) => {
        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Response error with status ${response.status}, could not fetch ${url}`);
            }

            setLoading(false);
            return response.json();
        } catch (err) {
            setLoading(false);
            setError(err.message);
            throw err;
        }
    }, [])

    const clearError = () => setError(null);

    return { loading, error, request, clearError };
}