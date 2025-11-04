import { useEffect, useState } from "react";

export function useFetch<T = unknown>(
  url: string | null,
  options: RequestInit = {},
  auto: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(auto);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auto) fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
