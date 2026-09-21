import { useCallback, useEffect, useRef, useState } from 'react'

export function useBeforeAfter(startAt = 50) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(startAt)
  const [isDragging, setIsDragging] = useState(false)

  const moveTo = useCallback((clientX) => {
    const node = containerRef.current
    if (!node) return
    const { left, width } = node.getBoundingClientRect()
    const ratio = ((clientX - left) / width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const onPointerDown = useCallback(
    (event) => {
      event.currentTarget.setPointerCapture?.(event.pointerId)
      setIsDragging(true)
      moveTo(event.clientX)
    },
    [moveTo]
  )

  const onPointerMove = useCallback(
    (event) => {
      if (!isDragging) return
      moveTo(event.clientX)
    },
    [isDragging, moveTo]
  )

  const stop = useCallback(() => setIsDragging(false), [])

  const onKeyDown = useCallback((event) => {
    const step = event.shiftKey ? 10 : 2
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPosition((value) => Math.max(0, value - step))
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition((value) => Math.min(100, value + step))
    }
    if (event.key === 'Home') setPosition(0)
    if (event.key === 'End') setPosition(100)
  }, [])

  useEffect(() => {
    if (!isDragging) return
    window.addEventListener('pointerup', stop)
    window.addEventListener('pointercancel', stop)
    return () => {
      window.removeEventListener('pointerup', stop)
      window.removeEventListener('pointercancel', stop)
    }
  }, [isDragging, stop])

  return {
    containerRef,
    position,
    setPosition,
    isDragging,
    onKeyDown,
    handlers: { onPointerDown, onPointerMove, onPointerUp: stop },
  }
}
