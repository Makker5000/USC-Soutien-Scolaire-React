import { useSession } from './useSession'

export function useUser() {
  const { session } = useSession()
  return session?.user ?? null
}
