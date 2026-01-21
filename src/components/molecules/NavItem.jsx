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
                textColor: {textColor}
            }}
        >
            <IconText
                icon={icon}
                textWeight={active ? 'bold' : 'regular'}
                textColor={state === active ? 'primary': 'inverse' }
                iconColor={active ? 'brand.primary' : 'neutral.gray'}
            >
                {label}
            </IconText>

        </a>
    )
}

export default NavItem