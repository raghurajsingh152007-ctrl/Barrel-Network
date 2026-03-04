import { useState, useEffect } from "react";

export function useServerStatus(address: string) {
  const [status, setStatus] = useState({
    online: false,
    players: null as { online: number; max: number } | null,
    version: null as string | null,
    loading: true,
  });

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await fetch(
          `https://api.mcsrvstat.us/2/${address}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        setStatus({
          online: data.online,
          players: data.online
            ? {
                online: data.players?.online ?? 0,
                max: data.players?.max ?? 0,
              }
            : null,
          version: data.version ?? null,
          loading: false,
        });
      } catch (error) {
        setStatus({
          online: false,
          players: null,
          version: null,
          loading: false,
        });
      }
    }

    fetchStatus();

    const interval = setInterval(fetchStatus, 30000); // refresh every 30 sec
    return () => clearInterval(interval);
  }, [address]);

  return status;
}
