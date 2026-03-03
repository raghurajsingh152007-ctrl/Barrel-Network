import { useState } from "react";

export interface ServerStatus {
  online: boolean;
  players: { online: number; max: number } | null;
  version: string | null;
  loading: boolean;
}

export function useServerStatus(_address: string): ServerStatus {
  const [status] = useState<ServerStatus>({
    online: true,
    players: { online: 0, max: 100 },
    version: null,
    loading: false,
  });

  return status;
}
