// Docs: https://tailwindcss.com/docs/configuration
import colors from "tailwindcss/colors";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default{
    theme: {
        extend: {
          colors: {
            primary: colors.teal["500"],
          },
          backgroundColor: {
            primary: colors.teal["500"],
          },
        },
      },
}
