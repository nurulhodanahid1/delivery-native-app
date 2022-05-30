import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.grey,
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.lightBlue,
}

const BOLD = {
    fontFamily: typography.bold,
    fontSize: 39,
    color: colors.lightBlue,
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BASE_BOLD,
        fontSize: 32,
    },
    h2: {
        ...BASE_BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    p: {
        ...BASE,
        fontSize: 15,
    },
}