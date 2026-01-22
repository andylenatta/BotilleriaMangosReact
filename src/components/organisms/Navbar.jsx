import NavItem from '@/components/molecules/NavItem'
import NavDropdown from './NavDropdown'
import IconText from '@/components/molecules/IconText'
import { spacing, color, shadows } from '../protons'
import Link from '../atoms/Link'

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: color.brand.mangoDark,
        boxShadow: shadows.sm,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: `0 ${spacing.md}`,
          height: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/*- Logo */}
        <div style={{ flex: 1 }}>
          <Link href={"#"}>
            <IconText icon="Mango" textWeight="bold">
              Mangos
            </IconText>
          </Link>
          
        </div>

        {/*Navegacion */}
        <div
          style={{
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            gap: spacing.md,
          }}
        >
          <NavItem label="Inicio" href="/" />
          
          <NavDropdown
            label="Productos"
            items={[
              { label: 'Promos', href: '/productos/' },
              { label: 'Piscos', href: '/productos/' },
              { label: 'Whiskys', href: '/productos/' },
              { label: 'Cervezas', href: '/productos/' },
              { label: 'Vinos', href: '/productos/' },
              { label: 'Espumantes', href: '/productos/' },
              { label: 'Otros', href: '/productos/' },
            ]}
          />

          <NavItem label="Nosotros" href="/nosotros" />
          <NavItem label="Blog" href="/blog" />
          <NavItem label="Contacto" href="/contacto" />
        </div>

        {/* RIGHT - Actions */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: spacing.sm,
          }}
        >
          <NavItem label="Ingresar" href="/login" />
          <NavItem
            label="Registrarse"
            href="/register"
            active
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
