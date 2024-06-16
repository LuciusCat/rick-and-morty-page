import { useState, useEffect } from "react";
interface Props {
  url: string;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetchApi<T>({ url }: Props) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function getApi() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`¡ Error HTTP !: ${response.status}`);
        }
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error: any) {
        setState({ data: null, loading: false, error: error.message });
      }
    }
    getApi();
  }, [url]);

  return state;
}
