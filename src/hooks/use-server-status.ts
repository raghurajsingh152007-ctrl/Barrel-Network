import { useState, useEffect } from "react";

export interface ServerStatus {
  online: boolean;
  players: { online: number; max: number } | null;
  version: string | null;
  loading: boolean;
}

export function useServerStatus(address: string): ServerStatus {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: null,
    version: null,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.mcsrvstat.us/3/${address}`);
        const data = await res.json();
        if (!cancelled) {
          setStatus({
            online: data.online ?? false,
            players: data.online ? { online: data.players?.online ?? 0, max: data.players?.max ?? 0 } : null,
            version: data.version ?? null,
            loading: false,
          });
        }
      } catch {
        if (!cancelled) {
          setStatus({ online: false, players: null, version: null, loading: false });
        }
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // refresh every 60s

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [address]);

  return status;
}
