import IconText from "@/components/molecules/IconText";
import { color, spacing, tipografia, radius } from "../protons";

const NavItem = ({
  icon,
  label,
  textColor = "primary",
  href = '#',
  active = false,
}) => {

    const state = active ? 'active' : 'default'

    return (
        <a
            href={href}
            style={{
                textDecorationColor: "none",
                padding: `${spacing.sm} ${spacing.md}`,
                borderRadius: radius.md,
                backgroundColor: active ? color.brand.mangoDark: "transparent",
            }}
        >
            <IconText
                icon={icon}
                textWeight={active ? 'bold' : 'regular'}
                textColor={state === 'active' ? 'inverse' : 'secondary'}
                iconColor={active ? 'brand.mango' : 'neutral.gray'}
            >
                {label}
            </IconText>

        </a>
    )
}

export default NavItem