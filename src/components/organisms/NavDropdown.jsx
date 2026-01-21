import { useState, useRef, useEffect } from 'react'
import IconText from '@/components/molecules/IconText'
import DropdownItem from '@/components/molecules/DropdownItem'
import { spacing, color, radius, shadows } from '../protons'

const NavDropdown = ({ label, items = [] }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(true)}
    >
      <div onClick={() => setOpen((prev) => !prev)}>
        <IconText textColor="inverse">
          {label}
        </IconText>
      </div>

      {open && items.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: spacing.xs,
            backgroundColor: color.ui.secondary,
            borderRadius: radius.md,
            boxShadow: shadows.md,
            padding: spacing.xs,
            minWidth: 180,
            zIndex: 1000,
          }}
        >
          {items.map((item) => (
            <DropdownItem
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavDropdown

