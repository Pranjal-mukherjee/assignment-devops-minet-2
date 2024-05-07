import "@mui/material";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/styles" {
    interface TypographyVariants {
        caption1: TypographyStyleOptions;
        caption2: TypographyStyleOptions;
    }
    interface TypographyVariantsOptions {
        caption1?: TypographyStyleOptions;
        caption2?: TypographyStyleOptions;
    }
    interface Palette {
        gray: {
            50: string;
            100: string;
            300: string;
            500: string;
            700: string;
            900: string;
            400:string;
            1100: string;
            1300: string;
            white: string;
        };
        textColor: {
            lowEmp: string;
            medEmp: string;
            highEmp: string;
        };
        structural: {
            blue: string;
        };
    }

    interface PaletteOptions {
        gray: {
            50: string;
            100: string;
            300: string;
            500: string;
            700: string;
            900: string;
            1100: string;
            1300: string;
            white: string;
        };
        textColor: {
            lowEmp: string;
            medEmp: string;
            highEmp: string;
        };
        structural: {
            blue: string;
        };
    }

    interface PaletteColor {
        50: string;
        100: string;
        300: string;
        400: string;
        500: string;
        700: string;
        900: string;
    }
    interface SimplePaletteColorOptions {
        50?: string;
        100?: string;
        300?: string;
        400?: string;
        500?: string;
        700?: string;
        900?: string;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        caption1: true;
        caption2: true;
    }
}
