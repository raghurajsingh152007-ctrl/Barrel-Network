import { useState, useEffect, useCallback } from "react";

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

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(`https://api.mcstatus.io/v2/status/java/${address}`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setStatus({
        online: data.online ?? false,
        players: data.online ? { online: data.players?.online ?? 0, max: data.players?.max ?? 0 } : null,
        version: data.version?.name_clean ?? null,
        loading: false,
      });
    } catch {
      setStatus({ online: false, players: null, version: null, loading: false });
    }
  }, [address]);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  return status;
}
