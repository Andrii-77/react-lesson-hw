const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T, >(endpoint: string, page: string): Promise<T> => {
    const limit = 30;
    const skip = limit * (+page) - limit;

    return await fetch(`${baseUrl}${endpoint}${skip}`).then(res => res.json());
}


