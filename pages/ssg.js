import Link from "../src/components/Link";
import { Text } from "../src/theme/components";
import { theme } from "../src/theme/theme";
import { delay } from "../src/utils/delay";

export const getStaticProps = (async () => {
  await delay(5);
  return { props: { message: `I've been generated on build time` } }
});

export default function Ssr({ message }) {
  return (
    <>
      <div>
        Static site Generation
      </div>
      <p>
        {message}
      </p>
      <Text
        as="p"
        styleSheet={{
          marginTop: theme.space.x4,
          textVariant: theme.typography.variants.body1,
          color: theme.colors.neutral[500],
        }}
      >
        <Link
          href="/"
          styleSheet={{
            color: theme.colors.primary[400],
            fontWeight: '500',
            hover: {
              color: theme.colors.primary[300],
            },
          }}
        >
          Voltar para home
        </Link>
      </Text>
    </>
  )
}
