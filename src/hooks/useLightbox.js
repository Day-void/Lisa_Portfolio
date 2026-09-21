import { useCallback, useEffect, useMemo, useState } from 'react'

export function useLightbox(items = []) {
  const [index, setIndex] = useState(null)
  const isOpen = index !== null

  const open = useCallback((nextIndex) => setIndex(nextIndex), [])
  const close = useCallback(() => setIndex(null), [])

  const next = useCallback(() => {
    setIndex((current) => (current === null ? current : (current + 1) % items.length))
  }, [items.length])

  const previous = useCallback(() => {
    setIndex((current) =>
      current === null ? current : (current - 1 + items.length) % items.length
    )
  }, [items.length])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') previous()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, next, previous])

  const item = useMemo(
    () => (index === null ? null : items[index] ?? null),
    [index, items]
  )

  return { index, item, isOpen, open, close, next, previous }
}
